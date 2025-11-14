"use client";

import { useState, useEffect } from "react";
import MuxUploader from "@mux/mux-uploader-react";
import Video from 'next-video';

export default function MuxUploadTest() {
  const [uploadUrl, setUploadUrl] = useState("");
  const [uploadId, setUploadId] = useState("");
  const [uploadStatus, setUploadStatus] = useState("initializing");
  const [assetData, setAssetData] = useState(null);
  const [isPolling, setIsPolling] = useState(false);

  useEffect(() => {
    async function getUploadUrl() {
      try {
        console.log("🚀 Requesting upload URL...");
        setUploadStatus("fetching");
        
        const res = await fetch("/api/create-upload", { method: "POST" });
        const data = await res.json();

        console.log("📥 Client received data:", {
          status: res.status,
          hasUrl: !!data.data?.url,
          uploadId: data.data?.id,
          timestamp: new Date().toISOString()
        });

        if (data.data?.url) {
          setUploadUrl(data.data.url);
          setUploadId(data.data.id);
          setUploadStatus("ready");
          console.log("✅ Upload URL set successfully");
        } else {
          console.error("❌ No upload URL in response:", data);
          setUploadStatus("error");
        }
      } catch (error) {
        console.error("❌ Failed to get upload URL:", error);
        setUploadStatus("error");
      }
    }

    getUploadUrl();
  }, []);

  // Function to check upload status
  const checkUploadStatus = async () => {
    if (!uploadId) return;

    try {
      const res = await fetch(`/api/upload-status?uploadId=${uploadId}`);
      const data = await res.json();
      
      console.log("🔍 Upload status check:", data.data);
      
      if (data.data?.status === "asset_created" && data.data?.asset_id) {
        console.log("🎉 Asset created! ID:", data.data.asset_id);
        await getAssetDetails(data.data.asset_id);
        setIsPolling(false);
      } else if (data.data?.status === "errored") {
        console.error("❌ Upload failed:", data.data.error);
        setIsPolling(false);
      }
    } catch (error) {
      console.error("❌ Failed to check upload status:", error);
    }
  };

  // Function to get asset details
  const getAssetDetails = async (assetId) => {
    try {
      const res = await fetch(`/api/asset-details?assetId=${assetId}`);
      const data = await res.json();
      
      console.log("🎬 Asset details:", data.data);
      setAssetData(data.data);
    } catch (error) {
      console.error("❌ Failed to get asset details:", error);
    }
  };

  // Start polling for upload completion
  const startPolling = () => {
    if (isPolling) return;
    
    setIsPolling(true);
    console.log("⏱️ Starting upload status polling...");
    
    const pollInterval = setInterval(async () => {
      await checkUploadStatus();
      
      if (!isPolling) {
        clearInterval(pollInterval);
      }
    }, 3000); // Check every 3 seconds

    // Stop polling after 5 minutes
    setTimeout(() => {
      clearInterval(pollInterval);
      setIsPolling(false);
      console.log("⏰ Polling timeout reached");
    }, 300000);
  };

  // Upload event handlers
  const handleUploadStart = () => {
    console.log("🎬 Upload started");
  };

  const handleUploadProgress = (event) => {
    console.log(`📊 Upload progress: ${event.detail}%`);
  };

  const handleUploadSuccess = (event) => {
    console.log("🎉 Upload completed:", event.detail);
    // Start polling for asset creation
    startPolling();
  };

  const handleUploadError = (event) => {
    console.error("❌ Upload failed:", event.detail);
  };

  if (uploadStatus === "fetching") return <p>Getting upload URL...</p>;
  if (uploadStatus === "error") return <p>Error loading uploader</p>;
  if (!uploadUrl) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mux Upload Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upload Section */}
        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Upload Video</h2>
          <MuxUploader 
            endpoint={uploadUrl}
            onUploadStart={handleUploadStart}
            onProgress={handleUploadProgress}
            onSuccess={handleUploadSuccess}
            onError={handleUploadError}
          />
          
          {isPolling && (
            <div className="mt-4 p-3 bg-blue-50 rounded">
              <p className="text-blue-700">⏱️ Processing upload and creating asset...</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Upload Info</h2>
          
          <div className="space-y-2 text-sm">
            <div>
              <strong>Upload ID:</strong>
              <p className="font-mono text-xs bg-gray-100 p-1 rounded mt-1">
                {uploadId || 'Not available'}
              </p>
            </div>
            
            {assetData && (
              <>
                <div>
                  <strong>Asset ID:</strong>
                  <p className="font-mono text-xs bg-gray-100 p-1 rounded mt-1">
                    {assetData.id}
                  </p>
                </div>
                
                <div>
                  <strong>Status:</strong>
                  <span className={`ml-2 px-2 py-1 rounded text-xs ${
                    assetData.status === 'ready' ? 'bg-green-100 text-green-800' : 
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {assetData.status}
                  </span>
                </div>
                
                {assetData.playback_ids?.[0] && (
                  <div>
                    <strong>Playback ID:</strong>
                    <p className="font-mono text-xs bg-gray-100 p-1 rounded mt-1">
                      {assetData.playback_ids[0].id}
                    </p>
                  </div>
                )}
                
                {assetData.duration && (
                  <div>
                    <strong>Duration:</strong> {Math.round(assetData.duration)}s
                  </div>
                )}
                
                {assetData.aspect_ratio && (
                  <div>
                    <strong>Aspect Ratio:</strong> {assetData.aspect_ratio}
                  </div>
                )}
              </>
            )}
          </div>
          
          {/* Manual check buttons */}
          <div className="mt-4 space-x-2">
            <button 
              onClick={checkUploadStatus}
              disabled={!uploadId}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:bg-gray-300"
            >
              Check Status
            </button>
            
            {assetData && (
              <button 
                onClick={() => getAssetDetails(assetData.id)}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm"
              >
                Refresh Asset
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Video Player, Info, and Download Links */}
      {assetData && assetData.status === 'ready' && assetData.playback_ids?.[0] && (
        <div className="mt-6 border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Video Player</h2>
         <Video
            src={assetData.playback_ids[0].id}
            width="100%"
            height="auto"
            accentColor="#ff0055"
          />


          

          {/* Video Info */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <strong>Duration:</strong>
              <p>{assetData.duration ? `${Math.round(assetData.duration)}s` : 'N/A'}</p>
            </div>
            <div>
              <strong>Resolution:</strong>
              <p>{assetData.aspect_ratio || 'N/A'}</p>
            </div>
            <div>
              <strong>Status:</strong>
              <span className={`px-2 py-1 rounded text-xs ${
                assetData.status === 'ready' ? 'bg-green-100 text-green-800' : 
                'bg-yellow-100 text-yellow-800'
              }`}>
                {assetData.status}
              </span>
            </div>
            <div>
              <strong>Playback ID:</strong>
              <p className="font-mono text-xs truncate">{assetData.playback_ids[0].id}</p>
            </div>
          </div>

          {/* Download Links */}
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={`https://stream.mux.com/${assetData.playback_ids[0].id}/high.mp4`}
              download
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              📥 Download MP4
            </a>
            <a
              href={`https://image.mux.com/${assetData.playback_ids[0].id}/thumbnail.jpg`}
              download
              className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              🖼️ Download Thumbnail
            </a>
            <button
              onClick={() => navigator.clipboard.writeText(`https://stream.mux.com/${assetData.playback_ids[0].id}.m3u8`)}
              className="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 transition-colors"
            >
              📋 Copy HLS URL
            </button>
          </div>
        </div>
      )}

      {/* Asset Details */}
      {assetData && (
        <div className="mt-6 border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Asset Details</h2>
          <pre className="bg-gray-100 p-4 rounded text-xs overflow-x-auto">
            {JSON.stringify(assetData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}