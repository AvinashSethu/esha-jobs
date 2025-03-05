import { MongoClient, ServerApiVersion } from 'mongodb';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Job from '@/src/app/models/job'; 

// MongoDB connection string from environment variables
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'esha-jobs';

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Use a singleton pattern for the MongoDB client
if (!client) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  clientPromise = client.connect();
}

// Connect Mongoose to MongoDB
mongoose.connect(uri, { dbName })
  .then(() => console.log('Mongoose connected to MongoDB'))
  .catch(err => console.error('Mongoose connection error:', err));

export async function POST(request) {
  try {
    const formData = await request.formData();
    const jobData = {
      jobTitle: formData.get('jobTitle'),
      salary: formData.get('salary'),
      location: formData.get('location'),
      gender: formData.get('gender'),
      description: formData.get('description'),
      keyFeatures: JSON.parse(formData.get('keyFeatures') || '["", ""]'),
      jobDetails: formData.get('jobDetails'),
      benefits: formData.get('benefits'),
      otherDetails: formData.get('otherDetails'),
      jobImage: null, // We'll handle image storage later
    };

    // Handle image upload (mock for now, store file name/path)
    const imageFile = formData.get('jobImage');
    if (imageFile) {
      const imageName = `${Date.now()}-${imageFile.name}`;
      const imagePath = path.join(process.cwd(), 'public', 'uploads', imageName);
      await fs.mkdir(path.dirname(imagePath), { recursive: true });
      const arrayBuffer = await imageFile.arrayBuffer();
      await fs.writeFile(imagePath, Buffer.from(arrayBuffer));
      jobData.jobImage = `/uploads/${imageName}`; // Store relative path
    }

    const newJob = new Job(jobData);
    const savedJob = await newJob.save();

    return NextResponse.json({ success: true, job: savedJob }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const jobs = await Job.find({}).sort({ createdAt: -1 }); // Sort by newest first
    return NextResponse.json({ jobs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Close connections on server shutdown
process.on('SIGTERM', async () => {
  if (client) await client.close();
  await mongoose.connection.close();
});

process.on('SIGINT', async () => {
  if (client) await client.close();
  await mongoose.connection.close();
});