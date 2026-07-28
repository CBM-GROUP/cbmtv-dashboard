import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma/client';

// GET handler to filter miniseries episodes
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const contentId = searchParams.get('content');

  if (!contentId) {
    return NextResponse.json({ error: 'Content ID is required' }, { status: 400 });
  }

  try {
    const dbEpisodes = await prisma.episode.findMany({
      where: {
        content: parseInt(contentId, 10),
      },
      orderBy: {
        miniseries_no: 'asc',
      },
    });

    return NextResponse.json(dbEpisodes);
  } catch (error) {
    console.error('Failed to fetch episodes:', error);
    return NextResponse.json({ error: 'Failed to fetch episodes' }, { status: 500 });
  }
}

// POST handler to create a new miniseries episode
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, miniseries_no, content, streaming_link, duration, thumbnail } = body;

    if (!title || !miniseries_no || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newEpisode = await prisma.episode.create({
      data: {
        title,
        miniseries_no: parseInt(miniseries_no, 10),
        content: parseInt(content, 10),
        streaming_link: streaming_link || '',
        duration: duration || '0',
        thumbnail: thumbnail || '',
      },
    });

    return NextResponse.json(newEpisode, { status: 201 });
  } catch (error) {
    console.error('Failed to create episode:', error);
    return NextResponse.json({ error: 'Failed to create episode' }, { status: 500 });
  }
}
