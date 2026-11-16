import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const outputDirectory = join(projectRoot, 'dist');
const config = JSON.parse(
  await readFile(join(projectRoot, 'seo.config.json'), 'utf8'),
);
const template = await readFile(join(outputDirectory, 'index.html'), 'utf8');

if (!template.includes('<!-- SEO:START -->') || !template.includes('<!-- SEO:END -->')) {
  throw new Error('SEO markers are missing from index.html');
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function metadataMarkup(page) {
  const canonicalUrl = `${config.siteUrl}${page.path}`;
  const imageUrl = `${config.siteUrl}${config.logoPath}`;
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);

  return [
    '<!-- SEO:START -->',
    `    <title>${title}</title>`,
    `    <meta name="description" content="${description}" />`,
    `    <link rel="canonical" href="${canonicalUrl}" />`,
    '    <meta property="og:type" content="website" />',
    '    <meta property="og:site_name" content="OJAPH Agro Development Limited" />',
    '    <meta property="og:locale" content="en_UG" />',
    `    <meta property="og:title" content="${title}" />`,
    `    <meta property="og:description" content="${description}" />`,
    `    <meta property="og:url" content="${canonicalUrl}" />`,
    `    <meta property="og:image" content="${imageUrl}" />`,
    '    <meta property="og:image:alt" content="OJAPH Agro Development Limited logo" />',
    '    <meta name="twitter:card" content="summary" />',
    `    <meta name="twitter:title" content="${title}" />`,
    `    <meta name="twitter:description" content="${description}" />`,
    `    <meta name="twitter:image" content="${imageUrl}" />`,
    '    <!-- SEO:END -->',
  ].join('\n');
}

for (const page of Object.values(config.pages)) {
  const pageHtml = template.replace(
    /<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/,
    metadataMarkup(page),
  );
  const outputPath = page.path === '/'
    ? join(outputDirectory, 'index.html')
    : join(outputDirectory, page.path.slice(1), 'index.html');

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, pageHtml);
}

console.log(`Generated SEO metadata for ${Object.keys(config.pages).length} routes.`);
