// controllers/fileController.js
import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from '@aws-sdk/client-s3';
import { bucketName } from '../lib/s3.js';

export async function getFile(req, res) {
  const s3 = new S3Client({ region: 'us-east-1' });

  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: req.params.filename,
  });

  try {
    const response = await s3.send(command);
    res.setHeader('Content-Type', response.ContentType);
    response.Body.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving file from S3' });
  }
}

export async function uploadFile(req, res) {
  const s3 = new S3Client({ region: 'us-east-1' });

  const file = req.file; // we're using multer
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
  });

  try {
    await s3.send(command);
    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error uploading file to S3' });
  }
}
