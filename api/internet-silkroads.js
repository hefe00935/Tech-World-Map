export const config = { runtime: 'edge' };

// Returns an RSS feed describing major Internet "Silkroads" routes (subsea cables,
// terrestrial arteries, datacenter regions). This is a lightweight local feed used
// by the Tech Silkroads panel as a placeholder. Data is static but can be replaced
// with dynamic sources later.

const SILKROADS = [
  {
    id: 'silkroad-1',
    name: 'Southern Silk Road',
    description: 'Connectivity route from Southeast Asia through India and the Middle East to Europe (submarine + terrestrial).',
  },
  {
    id: 'silkroad-2',
    name: 'Northern Terrestrial Silk Road',
    description: 'High-capacity terrestrial route connecting East Asia to Europe via Central Asia.',
  },
  {
    id: 'silkroad-3',
    name: 'Trans-Pacific North',
    description: 'Major data artery connecting Tokyo to Seattle (submarine).',
  },
  {
    id: 'silkroad-4',
    name: 'Trans-Pacific South',
    description: 'Southern trans-pacific route linking Taiwan/Guam to California.',
  },
  {
    id: 'silkroad-5',
    name: 'Trans-Atlantic Gateway',
    description: 'Primary high-capacity nexus between London/Paris and New York (submarine).',
  },
  {
    id: 'silkroad-6',
    name: 'African Coastal Link',
    description: 'Regional backbone circuiting the African continent (submarine).',
  },
];

export default async function handler(req) {
  try {
    const rssItems = SILKROADS.map((r) => `
      <item>
        <title><![CDATA[${r.name}]]></title>
        <link>https://worldmonitor.app/#/silkroads/${r.id}</link>
        <guid>https://worldmonitor.app/#/silkroads/${r.id}</guid>
        <pubDate>${new Date().toUTCString()}</pubDate>
        <description><![CDATA[${r.description}]]></description>
        <source url="https://worldmonitor.app">WorldMonitor</source>
      </item>`).join('');

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Internet Silkroads</title>
    <link>https://worldmonitor.app</link>
    <description>Major Internet arteries: subsea cables, terrestrial links, datacenters and IXPs</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://worldmonitor.app/api/internet-silkroads" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

    return new Response(rss, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=1800',
      },
    });
  } catch (err) {
    console.error('internet-silkroads error:', err);
    return new Response(JSON.stringify({ error: 'Failed to build silkroads feed' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
}
