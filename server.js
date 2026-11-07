const express = require('express');
const fs = require('node:fs');
const path = require('node:path');

const app = express();
const port = Number(process.env.PORT) || 3001;
const distPath = path.join(__dirname, 'dist');
const notFoundPath = path.join(distPath, '404.html');
const productionStart = process.argv.includes('--production');
const hasBuild = fs.existsSync(distPath);

if (productionStart && !hasBuild) {
  console.error('Production build not found. Run "npm run build" before starting the server.');
  process.exit(1);
}

app.disable('x-powered-by');

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.use('/api', (_request, response) => {
  response.status(404).json({ error: 'Not found' });
});

if (hasBuild) {
  app.use(express.static(distPath, {
    index: 'index.html',
    maxAge: '1y',
    immutable: true,
    setHeaders(response, filePath) {
      if (filePath.endsWith('.html')) {
        response.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      } else if (filePath.includes(`${path.sep}videos${path.sep}`)) {
        response.setHeader('Cache-Control', 'public, max-age=2592000');
      }
      response.setHeader('X-Content-Type-Options', 'nosniff');
    },
  }));
}

app.use((_request, response) => {
  if (hasBuild && fs.existsSync(notFoundPath)) {
    return response.status(404).sendFile(notFoundPath);
  }
  return response.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Klay Consultants server listening on port ${port}`);
});
