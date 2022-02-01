// s3 위해서(multer와 aws-sdk npm install로 설치)
const multer = require('multer');
var storage = multer.memoryStorage()
var upload = multer({storage: storage});
const s3 = require('../modules/s3upload');
const express = require('express');
const router = express.Router();

// s3 이미지 업로드 위해서
router.post('/api/file/upload', upload.single("file"), function(req, res){
    const s3Client = s3.s3Client;
    const params = s3.uploadParams;
    
    params.Key = req.file.originalname;
    params.Body = req.file.buffer;

    console.log('파일 이름 내놔 : ' + params.Key );

    s3Client.upload(params, (err, data) => {
        if (err) {
            res.status(500).json({error:"Error -> " + err});
        }
        console.log('파일 이름 내놔 : ' + req.file.originalname );
    
        res.json({message: 'upload success! -> filename = ' + req.file.originalname});
    });
});

module.exports = router;