const { spawn } = require('child_process');
const http = require('http');

const child = spawn('node', ['dist/server.cjs'], {
  env: { ...process.env, NODE_ENV: 'production' }
});

child.stdout.on('data', (d) => console.log('STDOUT:', d.toString()));
child.stderr.on('data', (d) => console.log('STDERR:', d.toString()));

setTimeout(() => {
  http.get('http://127.0.0.1:3000/api/health', (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      console.log('Health:', data);
      child.kill();
    });
  }).on('error', (err) => {
    console.error('Request Error:', err.message);
    child.kill();
  });
}, 2000);
