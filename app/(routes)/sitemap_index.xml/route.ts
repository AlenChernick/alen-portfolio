import { NextResponse } from 'next/server';
import { websiteURL } from '@/app/constants';

async function buildSitemapIndex(sitemaps: string[]) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  for (const sitemapURL of sitemaps) {
    xml += '<sitemap>';
    xml += `<loc>${sitemapURL}</loc>`;
    xml += `<lastmod>${new Date().toISOString()}</lastmod>`;
    xml += '</sitemap>';
  }

  xml += '</sitemapindex>';
  return xml;
}

export async function GET() {
  try {
    const sitemaps = [`${websiteURL}/sitemap.xml`];

    const sitemapIndexXML = await buildSitemapIndex(sitemaps);

    return new NextResponse(sitemapIndexXML, {
      headers: {
        'Content-Type': 'application/xml',
        'Content-Length': Buffer.byteLength(sitemapIndexXML).toString(),
      },
    });
  } catch (error) {
    console.error('Error generating sitemap index:', error);
    return NextResponse.error();
  }
}
