import Mux from "@mux/mux-node";

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

export async function POST() {
  try {
    const liveStream = await mux.video.liveStreams.create({
      playback_policy: ["public"],
      new_asset_settings: { playback_policy: ["public"] }, // auto-archive enabled
    });

    // ✅ Log the full Mux response to your server console
    console.log("✅ Mux Live Stream Created:", JSON.stringify(liveStream, null, 2));

    return new Response(JSON.stringify(liveStream), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Mux API Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
