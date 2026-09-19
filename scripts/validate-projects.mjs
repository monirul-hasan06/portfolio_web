import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = await readFile(new URL('../assets/js/app.js', import.meta.url), 'utf8');
const start = source.indexOf('const projects = [');
const end = source.indexOf('const root =', start);

if (start === -1 || end === -1) {
  throw new Error('Could not locate the projects array in assets/js/app.js');
}

const projects = vm.runInNewContext(`${source.slice(start, end)}; projects`);
const allowedCategories = new Set(['featured', 'fullstack', 'frontend', 'game']);
const errors = [];
const ids = new Set();

for (const project of projects) {
  if (!project.id || ids.has(project.id)) errors.push(`duplicate or missing id: ${project.id || '(missing)'}`);
  ids.add(project.id);

  for (const field of ['title', 'monogram', 'year', 'type', 'status', 'summary', 'github']) {
    if (!project[field]) errors.push(`${project.id || '(unknown)'} is missing ${field}`);
  }

  if (!Array.isArray(project.category) || project.category.length === 0) {
    errors.push(`${project.id} must have at least one category`);
  } else if (project.category.some((category) => !allowedCategories.has(category))) {
    errors.push(`${project.id} contains an invalid category`);
  }

  if (!Array.isArray(project.tech) || project.tech.length === 0) errors.push(`${project.id} must have tech entries`);
  if (!Array.isArray(project.features) || project.features.length === 0) errors.push(`${project.id} must have feature entries`);
  if (!/^https:\/\//.test(project.github)) errors.push(`${project.id} has an invalid GitHub URL`);
  if (project.live && !/^https:\/\//.test(project.live)) errors.push(`${project.id} has an invalid live URL`);
  if (project.status === 'Live' && !project.live) errors.push(`${project.id} is marked Live but has no live URL`);
  if (project.status !== 'Live' && project.live) errors.push(`${project.id} has a live URL but is not marked Live`);
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log(`Validated ${projects.length} projects successfully.`);
