import { readFile } from 'node:fs/promises';
import { access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const errors = [];
const links = [...html.matchAll(/<a\b([^>]*)>/gi)].map((match) => match[1]);

for (const attributes of links) {
  const href = attributes.match(/\bhref=["']([^"']+)["']/i)?.[1];
  if (!href) continue;
  const targetBlank = /\btarget=["']_blank["']/i.test(attributes);
  const rel = attributes.match(/\brel=["']([^"']+)["']/i)?.[1]?.split(/\s+/) || [];
  if (targetBlank && (!rel.includes('noopener') || !rel.includes('noreferrer'))) {
    errors.push(`target=_blank link is missing noopener noreferrer: ${href}`);
  }
  if (href.startsWith('#') || /^(https?:|mailto:|tel:)/i.test(href)) continue;
  try {
    await access(resolve(root, href.split('#')[0].split('?')[0]));
  } catch {
    errors.push(`missing local link target: ${href}`);
  }
}

if (process.env.CHECK_REMOTE_LINKS === '1') {
  const remoteLinks = [...new Set([...html.matchAll(/\bhref=["'](https?:\/\/[^"']+)["']/gi)].map((match) => match[1]))];
  const blocked = [];
  for (const href of remoteLinks) {
    try {
      let response = await fetch(href, { method: 'HEAD', redirect: 'follow' });
      if (response.status === 405) response = await fetch(href, { method: 'GET', redirect: 'follow' });
      if ([401, 403, 429, 999].includes(response.status)) blocked.push(`${href} (${response.status})`);
      else if (!response.ok) errors.push(`remote link returned ${response.status}: ${href}`);
    } catch (error) {
      errors.push(`remote link could not be checked: ${href} (${error.message})`);
    }
  }
  if (blocked.length) console.warn(`Remote destinations blocked automated checks:\n${blocked.map((link) => `- ${link}`).join('\n')}`);
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log(`Validated ${links.length} HTML links${process.env.CHECK_REMOTE_LINKS === '1' ? ' and remote destinations' : ''}.`);
