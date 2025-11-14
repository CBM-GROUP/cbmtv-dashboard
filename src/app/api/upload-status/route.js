import { NextResponse } from 'next/server';
import Mux from '@mux/mux-node';

const { video } = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const uploadId = searchParams.get('uploadId');

  if (!uploadId) {
    return NextResponse.json({ error: 'Missing uploadId' }, { status: 400 });
  }

  try {
    const upload = await video.uploads.retrieve(uploadId);
    return NextResponse.json({ data: upload });
  } catch (error) {
    console.error('Error retrieving upload status:', error);
    return NextResponse.json({ error: 'Error retrieving upload status' }, { status: 500 });
  }
}
