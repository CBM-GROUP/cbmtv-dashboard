import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import apiClient from '@/services/api';

// GET handler to filter miniseries episodes
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const contentId = searchParams.get('content');

  if (!contentId) {
    return NextResponse.json({ error: 'Content ID is required' }, { status: 400 });
  }

  try {
    const response = await apiClient.get(`/api/content/miniseries/?content=${contentId}`);
    return NextResponse.json(response.data);
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

    const response = await apiClient.post('/api/content/miniseries/', {
      title,
      miniseries_no: Number.parseInt(miniseries_no, 10),
      content: Number.parseInt(content, 10),
      streaming_link: streaming_link || '',
      duration: duration || '0',
      thumbnail: thumbnail || '',
    });

    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    console.error('Failed to create episode:', error);
    return NextResponse.json({ error: 'Failed to create episode' }, { status: 500 });
  }
}
