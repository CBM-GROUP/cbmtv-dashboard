import fetch from "node-fetch";

export async function POST() {
  try {
    console.log("🎬 Creating Mux upload URL...");
    
    const response = await fetch("https://api.mux.com/video/v1/uploads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(`${process.env.MUX_TOKEN_ID}:${process.env.MUX_TOKEN_SECRET}`).toString("base64"),
      },
      body: JSON.stringify({
        cors_origin: "*",
        new_asset_settings: {
          playback_policy: ["public"],
          video_quality: "basic",
        },
      }),
    });

    const data = await response.json();
    
    // Enhanced logging
    console.log("✅ Mux API Response Status:", response.status);
    console.log("📊 Upload URL Data:", {
      uploadId: data.data?.id,
      uploadUrl: data.data?.url,
      assetId: data.data?.asset_id,
      timestamp: new Date().toISOString()
    });

    return new Response(JSON.stringify(data), { status: response.status });
   
  } catch (error) {
    console.error("❌ Mux upload creation failed:", {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    return new Response(JSON.stringify({ error: "Failed to create upload" }), { status: 500 });
  }
}