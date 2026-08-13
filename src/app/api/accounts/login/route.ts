import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!apiBaseUrl) {
      return NextResponse.json({ error: 'Backend API is not configured' }, { status: 500 });
    }

    const response = await fetch(new URL('/api/accounts/login/', apiBaseUrl), {
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
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Unable to reach backend API' }, { status: 502 });
  }
}
