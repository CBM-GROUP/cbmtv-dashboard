// /api/upload-status/route.js
import fetch from "node-fetch";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const uploadId = searchParams.get('uploadId');
    
    if (!uploadId) {
      return new Response(JSON.stringify({ error: "Upload ID is required" }), { 
        status: 400 
      });
    }

    console.log("🔍 Checking upload status for:", uploadId);

    const response = await fetch(`https://api.mux.com/video/v1/uploads/${uploadId}`, {
      method: "GET",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`${process.env.MUX_TOKEN_ID}:${process.env.MUX_TOKEN_SECRET}`).toString("base64"),
      },
    });

    const data = await response.json();
    
    console.log("📊 Upload Status Response:", {
      uploadId: data.data?.id,
      status: data.data?.status,
      assetId: data.data?.asset_id,
      error: data.data?.error,
      timestamp: new Date().toISOString()
    });

    return new Response(JSON.stringify(data), { status: 200 });
   
  } catch (error) {
    console.error("❌ Failed to get upload status:", {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    return new Response(JSON.stringify({ error: "Failed to get upload status" }), { 
      status: 500 
    });
  }
}