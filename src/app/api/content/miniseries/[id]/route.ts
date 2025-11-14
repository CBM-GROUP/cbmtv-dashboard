
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In-memory store for episodes (replace with actual database)
// NOTE: This is a separate in-memory store for demonstration.
// For a real application, this data should be in a shared database.
import { Episode } from "@/types";

const episodes: (Episode & { content: number })[] = [
  {
    id: '1',
    title: 'Episode 1: The Pilot',
    miniseries_no: 1,
    content: 13,
    streaming_link: '',
    duration: '0',
    thumbnail: '',
  },
  {
    id: '2',
    title: 'Episode 2: The Rising Action',
    miniseries_no: 2,
    content: 13,
    streaming_link: '',
    duration: '0',
    thumbnail: '',
  },
];

// PATCH handler to update a miniseries episode
export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const { title, miniseries_no, streaming_link, duration, thumbnail } = body;

    const episodeIndex = episodes.findIndex(ep => ep.id === id);

    if (episodeIndex === -1) {
      return NextResponse.json({ error: 'Episode not found' }, { status: 404 });
    }

    // Update specified fields
    if (title) episodes[episodeIndex].title = title;
    if (miniseries_no) episodes[episodeIndex].miniseries_no = miniseries_no;
    if (streaming_link) episodes[episodeIndex].streaming_link = streaming_link;
    if (duration) episodes[episodeIndex].duration = duration;
    if (thumbnail) episodes[episodeIndex].thumbnail = thumbnail;

    return NextResponse.json(episodes[episodeIndex]);

  } catch {
    return NextResponse.json({ error: 'Failed to update episode' }, { status: 500 });
  }
}

// DELETE handler to delete a miniseries episode
export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const episodeIndex = episodes.findIndex(ep => ep.id === id);

    if (episodeIndex === -1) {
      return NextResponse.json({ error: 'Episode not found' }, { status: 404 });
    }

    episodes.splice(episodeIndex, 1);

    return new Response(null, { status: 204 }); // No Content

  } catch {
    return NextResponse.json({ error: 'Failed to delete episode' }, { status: 500 });
  }
}
