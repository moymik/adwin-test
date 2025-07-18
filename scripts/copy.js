import fs from 'fs';
import path from 'path';

// Копируем все HTML из components в корень dist
const components = fs.readdirSync('src/components');
components.forEach(dir => {
    const htmlPath = `src/components/${dir}/${dir}.html`;
    if (fs.existsSync(htmlPath)) {
        fs.copyFileSync(htmlPath, `dist/${dir}.html`);
    }
});