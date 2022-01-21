const express = require('express');
const fs = require('fs');

const app = express();

app.get('/Video', (req,res) =>{
    // Range is the position of the video where in we are
    // For example if we are at start of the video then range is 0 byte, if we are in the middle then suppose 10000 bytes
    // This range is passed in the header
    const range = req.headers.range; // Return byte
    const videoPath  =  './SampleVideo.mp4';
    const videoSize = fs.statSync(videoPath).size;

    const chunkSize = 1 * 1e+6; // 1MB
    const start = range?Number(range.replace(/\D/g,'')): Number('');
    const end = Math.min(start + chunkSize, videoSize - 1);
    
    const contentLength = end - start + 1;
    
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    }
    res.writeHead(206, headers);

    // It tells fs (filesystem) to read the file at VideoPath from the start position to end - read the file size as mentioned in chunkSize
    const rstream = fs.createReadStream(videoPath, {start,end});
    rstream.pipe(res);
})

app.listen(3000);