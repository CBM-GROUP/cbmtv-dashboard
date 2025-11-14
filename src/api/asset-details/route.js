// /api/asset-details/route.js
import fetch from "node-fetch";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const assetId = searchParams.get('assetId');
    
    if (!assetId) {
      return new Response(JSON.stringify({ error: "Asset ID is required" }), { 
        status: 400 
      });
    }

    console.log("🎬 Getting asset details for:", assetId);

    const response = await fetch(`https://api.mux.com/video/v1/assets/${assetId}`, {
      method: "GET",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`${process.env.MUX_TOKEN_ID}:${process.env.MUX_TOKEN_SECRET}`).toString("base64"),
      },
    });

    const data = await response.json();
    
    console.log("📊 Asset Details:", {
      assetId: data.data?.id,
      status: data.data?.status,
      playbackId: data.data?.playback_ids?.[0]?.id,
      duration: data.data?.duration,
      aspectRatio: data.data?.aspect_ratio,
      tracks: data.data?.tracks?.length,
      createdAt: data.data?.created_at,
      timestamp: new Date().toISOString()
    });

    return new Response(JSON.stringify(data), { status: 200 });
   
  } catch (error) {
    console.error("❌ Failed to get asset details:", {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    return new Response(JSON.stringify({ error: "Failed to get asset details" }), { 
      status: 500 
    });
  }
}