import { NextResponse } from 'next/server';

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ap-mayfest-2025.vercel.app';
  
  const content = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
} 