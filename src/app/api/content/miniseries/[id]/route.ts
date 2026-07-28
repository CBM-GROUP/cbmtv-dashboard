import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma/client';

// PATCH handler to update a miniseries episode
export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const { title, miniseries_no, streaming_link, duration, thumbnail } = body;

    // Check if the episode exists
    const existingEpisode = await prisma.episode.findUnique({
      where: { id },
    });

    if (!existingEpisode) {
      return NextResponse.json({ error: 'Episode not found' }, { status: 404 });
    }

    // Prepare updated fields
    const data: {
      title?: string;
      miniseries_no?: number;
      streaming_link?: string;
      duration?: string;
      thumbnail?: string;
    } = {};
    if (title !== undefined) data.title = title;
    if (miniseries_no !== undefined) data.miniseries_no = parseInt(miniseries_no, 10);
    if (streaming_link !== undefined) data.streaming_link = streaming_link;
    if (duration !== undefined) data.duration = duration;
    if (thumbnail !== undefined) data.thumbnail = thumbnail;

    const updatedEpisode = await prisma.episode.update({
      where: { id },
      data,
    });

    return NextResponse.json(updatedEpisode);

  } catch (error) {
    console.error('Failed to update episode:', error);
    return NextResponse.json({ error: 'Failed to update episode' }, { status: 500 });
  }
}

// DELETE handler to delete a miniseries episode
export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;

    // Check if the episode exists
    const existingEpisode = await prisma.episode.findUnique({
      where: { id },
    });

    if (!existingEpisode) {
      return NextResponse.json({ error: 'Episode not found' }, { status: 404 });
    }

    await prisma.episode.delete({
      where: { id },
    });

    return new Response(null, { status: 204 }); // No Content

  } catch (error) {
    console.error('Failed to delete episode:', error);
    return NextResponse.json({ error: 'Failed to delete episode' }, { status: 500 });
  }
}
