
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In-memory store for episodes (replace with actual database)
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

let nextId = 3;

// GET handler to filter miniseries episodes
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const contentId = searchParams.get('content');

  if (!contentId) {
    return NextResponse.json({ error: 'Content ID is required' }, { status: 400 });
  }

  const filteredEpisodes = episodes.filter(ep => ep.content === parseInt(contentId, 10));

  return NextResponse.json(filteredEpisodes);
}

// POST handler to create a new miniseries episode
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, miniseries_no, content, streaming_link, duration, thumbnail } = body;

    if (!title || !miniseries_no || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newEpisode: Episode & { content: number } = {
      id: String(nextId++),
      title,
      miniseries_no,
      content,
      streaming_link: streaming_link || '',
      duration: duration || '0',
      thumbnail: thumbnail || '',
    };

    episodes.push(newEpisode);

    return NextResponse.json(newEpisode, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create episode' }, { status: 500 });
  }
}
