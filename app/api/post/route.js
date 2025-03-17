import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { Readable } from "stream";

// Configure AWS S3
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
// Define S3 bucket and file key
const BUCKET_NAME = "blogbasket"; // Your bucket name
const FILE_KEY = "uploads/posts.json"; // The S3 key for the JSON file

// Helper function to get data from S3
async function getDataFromS3() {
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: FILE_KEY,
    });
    const response = await s3Client.send(command);

    if (!response.Body) {
      console.log("File found but no content.");
      return [];
    }

    const stream = response.Body;
    const data = await streamToString(stream);

    console.log("Data retrieved from S3:", data);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to read data from S3:", error);
    return [];
  }
}

// Helper function to convert a stream to a string
async function streamToString(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf-8");
}

// Helper function to save data to S3
async function saveDataToS3(data) {
  const params = {
    Bucket: BUCKET_NAME,
    Key: FILE_KEY,
    Body: JSON.stringify(data, null, 2),
    ContentType: "application/json",
  };
  await s3Client.send(new PutObjectCommand(params));
}

export async function GET(req) {
  try {
    // Read data from S3
    const users = await getDataFromS3();

    if (users.length === 0) {
      console.log("No data found in S3.");
    }

    return NextResponse.json({
      success: true,
      users: users,
    });
  } catch (error) {
    console.error("Failed to read JSON data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to read data" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("picture");

    if (!file) {
      return NextResponse.json({ success: false, error: "No file uploaded" }, { status: 400 });
    }

    // Convert the uploaded file to a buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Set up the S3 upload parameters for the picture
    const pictureParams = {
      Bucket: BUCKET_NAME,
      Key: file.name,
      Body: buffer,
      ContentType: file.type,
    };

    // Upload the picture to S3
    await s3Client.send(new PutObjectCommand(pictureParams));

    // Create the new ad data
    const newAd = {
      title: data.get("title"),
      content: data.get("content"),
      date: data.get("date"),
      price: data.get("price"),
      owner: data.get("owner"),
      picture: `https://${BUCKET_NAME}.s3.amazonaws.com/${file.name}`,
    };

    // Read the current data from S3
    let currentData = await getDataFromS3();

    // Append the new ad data to the current data
    currentData.push(newAd);

    // Save the updated data back to S3
    await saveDataToS3(currentData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to handle POST request:", error);
    return NextResponse.json({ success: false, error: "Failed to create ad" }, { status: 500 });
  }
}