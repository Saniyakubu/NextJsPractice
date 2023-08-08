import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get('user');
  const name = searchParams.get('name');
  return NextResponse.json({ user, name });
}
