import express, { Request, Response } from "express";
import multer from "multer";
import { S3Client } from "@aws-sdk/client-s3";
import multerS3 from "multer-s3";
import * as dotenv from "dotenv";
const app = express();
dotenv.config();
const s3 = new S3Client({
  region: process.env.JB_AWS_REGION ?? "",
  credentials: {
    accessKeyId: process.env.JB_AWS_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.JB_AWS_SECRET_ACCESS_KEY ?? "",
  },
});

export const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.JB_BUCKET_NAME ?? "",
    acl: "private",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, `${Date.now().toString()}-url-${file.originalname}`);
    },
  }),
});
