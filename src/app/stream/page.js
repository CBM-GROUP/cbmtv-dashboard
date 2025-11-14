"use client";

import { useState } from "react";
import MuxPlayer from "@mux/mux-player-react";

export default function LivePage() {
  const [streamInfo, setStreamInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const createStream = async () => {
    setLoading(true);
    const res = await fetch("/api/create-live", { method: "POST" });
    const data = await res.json();
    setStreamInfo(data);
    setLoading(false);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">🎥 Start a Live Stream</h1>

      <button
        onClick={createStream}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Creating Stream..." : "Create Live Stream"}
      </button>

      {streamInfo && (
        <div className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold">🔑 Stream Details</h2>
          <p><strong>RTMP Server:</strong> {streamInfo.rtmp?.url}</p>
          <p><strong>Stream Key:</strong> {streamInfo.stream_key}</p>
          <p>
            <strong>Playback URL:</strong>{" "}
            https://stream.mux.com/{streamInfo.playback_ids[0].id}.m3u8
          </p>

          <h2 className="text-xl font-semibold mt-6">▶ Live Player</h2>
          <MuxPlayer
            streamType="live"
            playbackId={streamInfo.playback_ids[0].id}
            metadataVideoTitle="Concert Live"
            primaryColor="#ff0055"
            style={{ width: "100%", aspectRatio: "16/9", borderRadius: "12px" }}
          />
        </div>
      )}
    </div>
  );
}
