"use client";

import React from "react";
import { MiniseriesEpisodeListView } from "src/features/episode/miniseries-episode-list-view";

interface MiniseriesEpisodesPageProps {
  params: {
    contentId: string;
  };
}

export default function MiniseriesEpisodesPage({
  params,
}: MiniseriesEpisodesPageProps) {
  const { contentId } = params;
  return <MiniseriesEpisodeListView contentId={contentId} />;
}
