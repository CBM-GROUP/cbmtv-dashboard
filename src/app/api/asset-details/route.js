import { NextResponse } from 'next/server';
import Mux from '@mux/mux-node';

const { video } = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const assetId = searchParams.get('assetId');

  if (!assetId) {
    return NextResponse.json({ error: 'Missing assetId' }, { status: 400 });
  }

  try {
    const asset = await video.assets.retrieve(assetId);
    return NextResponse.json({ data: asset });
  } catch (error) {
    console.error('Error retrieving asset details:', error);
    return NextResponse.json({ error: 'Error retrieving asset details' }, { status: 500 });
  }
}
