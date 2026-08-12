import { NextResponse } from 'next/server';
import apiClient from '@/services/api';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name, phone, location, country, role } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Proxy registration to central backend
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = await apiClient.post('/api/accounts/register/', {
      email,
      password: hashedPassword,
      name,
      phone,
      location,
      country,
      role,
    });

    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
