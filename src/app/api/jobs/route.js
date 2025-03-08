import connectMongo from "@/lib/connectMongo";
import Job from "@/src/app/models/job";
console.log("Job Model Schema (gender path):", Job.schema.paths.gender);

export async function POST(request) {
  try {
    await connectMongo(); // Connect to MongoDB

    // Parse JSON payload
    const jobData = await request.json();
    console.log("Received jobData:", JSON.stringify(jobData, null, 2)); // Debug log

    // Ensure keyFeatures is an array
    if (typeof jobData.keyFeatures === "string") {
      jobData.keyFeatures = JSON.parse(jobData.keyFeatures);
    } else if (!Array.isArray(jobData.keyFeatures)) {
      jobData.keyFeatures = ["", ""];
    }

    // Validate required fields
    const requiredFields = [
      "jobTitle",
      "salary",
      "location",
      "gender",
      "description",
    ];
    for (const field of requiredFields) {
      if (
        !jobData[field] ||
        (field === "gender" && (!Array.isArray(jobData[field]) || jobData[field].length === 0))
      ) {
        return new Response(JSON.stringify({ error: `${field} is required` }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    // Create a new job document
    const newJob = new Job(jobData);
    console.log("New job before save:", newJob); // Debug log
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