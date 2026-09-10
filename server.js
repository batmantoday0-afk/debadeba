import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Pterodactyl compatibility: check PORT, SERVER_PORT, or P_SERVER_PORT
const PORT = process.env.PORT || process.env.SERVER_PORT || process.env.P_SERVER_PORT || 3000;
const HOST = '0.0.0.0'; // Crucial for Pterodactyl Docker network binding

const distPath = path.join(__dirname, 'dist');

// Serve static assets from Vite build
app.use(express.static(distPath, {
  maxAge: '1d',
  etag: true,
}));

// Health check endpoint for Pterodactyl monitors & Cloudflare probes
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    domain: 'debadeba.in',
    message: '100% Organic Deba is running smoothly',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Fallback to index.html for SPA / root
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start listening
const server = app.listen(PORT, HOST, () => {
  console.log(`=========================================`);
  console.log(`🤪 DEBA DEBA Web Server Active!`);
  console.log(`📍 Listening on: http://${HOST}:${PORT}`);
  console.log(`🌐 Ready for domain: debadeba.in`);
  console.log(`🩺 Health check: http://${HOST}:${PORT}/health`);
  console.log(`=========================================`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, gracefully closing Deba server...');
  server.close(() => {
    console.log('Deba server closed cleanly.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down...');
  server.close(() => {
    process.exit(0);
  });
});
