const AWS = require('aws-sdk')
const env = require('../config/s3.env')

const ID = env.AWS_ACCESS_KEY;
const SECRET = env.AWS_SECRET_ACCESS_KEY;
const BUCKET_NAME = env.Bucket;
const RESION = env.REGION;

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
})

const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: RESION
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});