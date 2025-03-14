import connectMongo from "@/lib/connectMongo";
import Job from "@/src/app/models/job";

export async function POST(request) {
  try {
    await connectMongo(); // Connect to MongoDB

    // Parse JSON payload
    const jobData = await request.json();

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

export async function DELETE(request) {
  try {
    await connectMongo();
    const { id } = await request.json(); // Expecting { id: "jobId" } in the request body
    if (!id) {
      return new Response(JSON.stringify({ error: "Job ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const deletedJob = await Job.findByIdAndDelete(id);
    if (!deletedJob) {
      return new Response(JSON.stringify({ error: "Job not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, message: "Job deleted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error deleting job:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PATCH(request) {
  try {
    await connectMongo();
    const jobData = await request.json();
    const jobId = jobData._id; // Expect ID in the request body

    if (!jobId) {
      return new Response(JSON.stringify({ error: "Job ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Ensure keyFeatures is an array
    if (typeof jobData.keyFeatures === "string") {
      jobData.keyFeatures = JSON.parse(jobData.keyFeatures);
    } else if (!Array.isArray(jobData.keyFeatures)) {
      jobData.keyFeatures = ["", ""];
    }

    // Remove _id from update data to avoid modifying it
    const updateData = { ...jobData };
    delete updateData._id;

    // Optional validation: only check fields if they’re provided
    const requiredFields = ["jobTitle", "salary", "location", "gender", "description"];
    for (const field of requiredFields) {
      if (
        updateData[field] !== undefined &&
        (!updateData[field] ||
          (field === "gender" && (!Array.isArray(updateData[field]) || updateData[field].length === 0)))
      ) {
        return new Response(JSON.stringify({ error: `${field} is required` }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    // Update the existing job
    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      { $set: updateData }, // Update only provided fields
      { new: true, runValidators: true } // Return updated document, apply validators
    );

    if (!updatedJob) {
      return new Response(JSON.stringify({ error: "Job not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("Updated job:", updatedJob);
    return new Response(JSON.stringify({ success: true, job: updatedJob }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating job:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

