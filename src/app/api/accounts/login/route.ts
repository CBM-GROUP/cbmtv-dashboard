import { NextResponse } from 'next/server';
import apiClient from '@/services/api';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key_change_me_in_production';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Proxy login to central backend
    const response = await apiClient.post('/api/accounts/login/', { email, password });
    const data = response.data;

    // Expect backend to return access/refresh tokens and user
    if (!data?.access) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
