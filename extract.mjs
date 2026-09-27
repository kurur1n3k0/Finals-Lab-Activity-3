import fs from 'fs';
import path from 'path';

const data = JSON.parse(
  fs.readFileSync('./solution.json', 'utf8')
);

for (const [filename, content] of Object.entries(data.files)) {
  const fullPath = path.resolve(filename);

  fs.mkdirSync(path.dirname(fullPath), {
    recursive: true
  });

  fs.writeFileSync(fullPath, content, 'utf8');

  console.log(`Created: ${filename}`);
}

console.log('\nAll project files created successfully!');