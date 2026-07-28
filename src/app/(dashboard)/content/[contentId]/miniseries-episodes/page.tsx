"use client";

import React, { use } from "react";
import { MiniseriesEpisodeListView } from "src/features/episode/miniseries-episode-list-view";

interface MiniseriesEpisodesPageProps {
  params: Promise<{
    contentId: string;
  }>;
}

export default function MiniseriesEpisodesPage({
  params,
}: MiniseriesEpisodesPageProps) {
  const { contentId } = use(params);
  return <MiniseriesEpisodeListView contentId={contentId} />;
}
