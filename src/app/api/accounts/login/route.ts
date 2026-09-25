import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let targetUrl = '';
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const rawApiUrl =
      process.env.NEXT_PUBLIC_API_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
    const trimmedApiUrl = rawApiUrl.trim().replace(/\/+$/, '');

    if (!trimmedApiUrl) {
      return NextResponse.json({ error: 'Backend API is not configured' }, { status: 500 });
    }

    const baseWithScheme = /^https?:\/\//i.test(trimmedApiUrl)
      ? trimmedApiUrl
      : `https://${trimmedApiUrl}`;
    targetUrl = `${baseWithScheme}/api/accounts/login/`;

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      cache: 'no-store',
    });

    const responseBody = await response.text();
    const contentType = response.headers.get('content-type');

    return new NextResponse(responseBody, {
      status: response.status,
      headers: contentType ? { 'Content-Type': contentType } : undefined,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Login proxy error reaching backend at', targetUrl, error);
    return NextResponse.json(
      {
        error: 'Unable to reach backend API',
        targetUrl,
        details: message,
      },
      { status: 502 }
    );
  }
}
