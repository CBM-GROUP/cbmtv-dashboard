import { NextResponse } from 'next/server';
import Mux from '@mux/mux-node';

// Initialize Mux client
const { video } = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

export async function POST() {
  try {
    const upload = await video.uploads.create({
      cors_origin: '*',
      new_asset_settings: {
        playback_policy: ['public'],
      },
    });

    return NextResponse.json({ data: upload });
  } catch (error) {
    console.error('Error creating Mux upload URL:', error);
    return NextResponse.json({ error: 'Error creating upload URL' }, { status: 500 });
  }
}
