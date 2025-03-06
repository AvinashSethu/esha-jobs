import connectMongo from "@/lib/connectMongo";
import Job from "@/src/app/models/job";

export async function POST(request) {
  try {
    await connectMongo(); // Connect to MongoDB

    // Parse JSON payload
    const jobData = await request.json();

    // Ensure keyFeatures is an array (in case it's sent as a string)
    if (typeof jobData.keyFeatures === "string") {
      jobData.keyFeatures = JSON.parse(jobData.keyFeatures);
    } else if (!Array.isArray(jobData.keyFeatures)) {
      jobData.keyFeatures = ["", ""];
    }

    // Validate required fields (optional, but recommended)
    const requiredFields = [
      "jobTitle",
      "salary",
      "location",
      "gender",
      "description",
    ];
    for (const field of requiredFields) {
      if (!jobData[field]) {
        return new Response(JSON.stringify({ error: `${field} is required` }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    // Create a new job document using the Job model
    const newJob = new Job(jobData); // Correct instantiation
    const savedJob = await newJob.save();

    return new Response(JSON.stringify({ success: true, job: savedJob }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error saving job:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET() {
  try {
    await connectMongo(); // Connect to MongoDB
    const jobs = await Job.find({}).sort({ createdAt: -1 }); // Sort by newest first
    return new Response(JSON.stringify({ jobs }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
