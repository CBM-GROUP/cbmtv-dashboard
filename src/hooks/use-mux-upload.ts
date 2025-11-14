import { useEffect, useRef, useState } from "react";

export function useMuxUpload() {
  const [uploadUrl, setUploadUrl] = useState("");
  const [uploadId, setUploadId] = useState("");
  const [status, setStatus] = useState("initializing");
  const [isPolling, setIsPolling] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  const getUploadUrl = async () => {
    try {
      setStatus("fetching");
      const res = await fetch("/api/create-upload", { method: "POST" });
      const data = await res.json();
      if (res.ok && data.data?.url) {
        setUploadUrl(data.data.url);
        setUploadId(data.data.id);
        setStatus("ready");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const getAssetDetails = async (assetId: string) => {
    try {
      const res = await fetch(`/api/asset-details?assetId=${assetId}`);
      const data = await res.json();
      if (data.data?.playback_ids?.[0]?.id) {
        const playbackId = data.data.playback_ids[0].id;
        const playbackUrl = `https://stream.mux.com/${playbackId}.m3u8`;
        setFinalUrl(playbackUrl);
      }
    } catch (error) {
      console.error("Failed to get asset details:", error);
    }
  };

  const checkUploadStatus = async () => {
    if (!uploadId) return;
    try {
      const res = await fetch(`/api/upload-status?uploadId=${uploadId}`);
      const data = await res.json();
      if (data.data?.status === "asset_created" && data.data?.asset_id) {
        await getAssetDetails(data.data.asset_id);
        stopPolling();
      } else if (data.data?.status === "errored") {
        stopPolling();
      }
    } catch {
      stopPolling();
    }
  };

  const startPolling = () => {
    if (pollingRef.current) clearInterval(pollingRef.current);
    setIsPolling(true);
    pollingRef.current = setInterval(() => checkUploadStatus(), 3000);
  };

  const stopPolling = () => {
    if (pollingRef.current) clearInterval(pollingRef.current);
    setIsPolling(false);
  };

  useEffect(() => {
    getUploadUrl();
  }, []);

  return {
    uploadUrl,
    status,
    isPolling,
    finalUrl,
    startPolling,
  };
}
