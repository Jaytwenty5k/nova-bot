import { NextResponse } from 'next/server';

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get('file');

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  // Process the uploaded file here

  return NextResponse.json({ success: true });
}

export const config = {
  runtime: 'edge',
  // Ändern Sie den API-Pfad, um Konflikte zu vermeiden
  api: {
    path: '/api/avatar/upload',
  },
};