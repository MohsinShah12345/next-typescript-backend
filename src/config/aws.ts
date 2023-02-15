import AWS from "aws-sdk";
export const config = {
  region: process.env.SS_AWS_REGION,
  accessKeyId: process.env.SS_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.SS_AWS_SECRET_ACCESS_KEY,
};
