import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  console.log('Extracting routes...');
  
  const portfolioData = fs.readFileSync('src/data/portfolioData.ts', 'utf-8');
  const appData = fs.readFileSync('src/App.tsx', 'utf-8');
  
  const extractSlugs = (text) => {
    const matches = [...text.matchAll(/slug:\s*'([^']+)'/g)];
    return Array.from(new Set(matches.map(m => m[1]))); // Deduplicate
  };

  const projectSlugs = extractSlugs(portfolioData);
  const blogSlugs = extractSlugs(appData);

  const routes = [
    '/',
    '/work',
    '/about',
    '/blog',
    ...projectSlugs.map(slug => `/project/${slug}`),
    ...blogSlugs.map(slug => `/blog/${slug}`)
  ];

  console.log(`Found ${routes.length} routes to prerender.`);

  console.log('Starting vite preview server...');
  const serverProcess = spawn('npm', ['run', 'preview', '--', '--port', '5000'], { stdio: 'ignore' });

  // Wait for the server to be ready
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log('Launching Playwright...');
  const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  
  const outBase = path.join(__dirname, 'dist-prerendered');
  
  // Copy original dist to dist-prerendered to ensure assets exist
  fs.cpSync(path.join(__dirname, 'dist'), outBase, { recursive: true });
  
  for (const url of routes) {
    console.log(`Prerendering ${url}...`);
    try {
      const page = await browser.newPage();
      
      // Navigate to the route
      await page.goto(`http://localhost:5000${url}`, { waitUntil: 'networkidle' });
      
      // Wait a moment for React's useEffect to update the document title and meta tags
      await page.waitForTimeout(1000); 

      // Extract the full HTML
      const html = await page.content();
      
      // Create output directory structure
      const outDir = path.join(outBase, url === '/' ? '' : url);
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }
      
      // Write the prerendered HTML file
      fs.writeFileSync(path.join(outDir, 'index.html'), html);
      
      await page.close();
    } catch (e) {
      console.error(`Error prerendering ${url}:`, e);
    }
  }

  await browser.close();
  serverProcess.kill();
  
  console.log('Replacing dist with dist-prerendered...');
  fs.rmSync(path.join(__dirname, 'dist'), { recursive: true, force: true });
  fs.renameSync(outBase, path.join(__dirname, 'dist'));
  
  console.log('Prerendering complete.');
}

prerender();
