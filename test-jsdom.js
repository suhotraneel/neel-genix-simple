import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

(async () => {
  try {
    const html = fs.readFileSync('dist/index.html', 'utf8');
    const dom = new JSDOM(html, {
      url: 'http://localhost/',
      runScripts: 'dangerously',
      resources: 'usable'
    });
    // Wait for a few seconds for React to mount
    setTimeout(() => {
      console.log(dom.window.document.title);
      dom.window.close();
    }, 2000);
  } catch(e) {
    console.error(e);
  }
})();
