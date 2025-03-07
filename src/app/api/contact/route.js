import connectMongo from "@/lib/connectMongo";
import Contact from "@/src/app/models/contact";

export async function POST(request) {
  try {
    await connectMongo(); // Connect to MongoDB

    // Parse JSON payload
    const contactData = await request.json();

    // Validate required fields
    const requiredFields = ["fullName", "email", "phone", "services", "jobTitle", "message"];
    for (const field of requiredFields) {
      if (!contactData[field]) {
        return new Response(JSON.stringify({ error: `${field} is required` }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    // Create a new contact document using the Contact model
    const newContact = new Contact(contactData);
    const savedContact = await newContact.save();

    return new Response(JSON.stringify({ success: true, contact: savedContact }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET() {
    try {
      await connectMongo();
      console.log("Fetching contacts from database...");
      const contacts = await Contact.find({}).sort({ createdAt: -1 });
      console.log("Fetched contacts:", contacts);
      return new Response(JSON.stringify({ contacts }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }