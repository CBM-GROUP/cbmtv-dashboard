import { NextResponse } from 'next/server';
import axios from 'axios';
import apiClient from '@/services/api';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name, phone, location, country, role } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Proxy registration to central backend (backend Django handles password hashing)
    const response = await apiClient.post('/api/accounts/register/', {
      email,
      password,
      name,
      phone,
      location,
      country,
      role,
    });

    return NextResponse.json(response.data, { status: 201 });
  } catch (error: unknown) {
    console.error('Registration error:', error);
    let status = 500;
    let data: unknown = { error: 'Internal server error' };
    if (axios.isAxiosError(error) && error.response) {
      status = error.response.status;
      data = error.response.data;
    } else if (error instanceof Error) {
      data = { error: error.message };
    }
    return NextResponse.json(data, { status });
  }
}
