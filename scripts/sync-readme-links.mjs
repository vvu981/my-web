import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const linksPath = path.join(rootDir, 'src', 'content', 'links', 'external-links.json');
const readmePath = path.join(rootDir, 'README.md');

function replaceContactLine(source, label, value) {
  const lineRegex = new RegExp(`(^- ${label}: ).*$`, 'gm');
  if (!lineRegex.test(source)) {
    throw new Error(`No se encontro la linea '${label}' en README.md`);
  }
  return source.replace(lineRegex, `$1${value}`);
}

try {
  const linksRaw = await readFile(linksPath, 'utf8');
  const links = JSON.parse(linksRaw);

  if (typeof links.github !== 'string' || typeof links.linkedin !== 'string') {
    throw new TypeError('external-links.json debe incluir github y linkedin como strings');
  }

  const readmeRaw = await readFile(readmePath, 'utf8');
  const withLinkedIn = replaceContactLine(readmeRaw, 'LinkedIn', links.linkedin);
  const withGithub = replaceContactLine(withLinkedIn, 'GitHub', links.github);

  if (withGithub === readmeRaw) {
    console.log('README.md ya estaba sincronizado');
  } else {
    await writeFile(readmePath, withGithub, 'utf8');
    console.log('README.md sincronizado con external-links.json');
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
