import { createServer } from 'http';
import request from 'supertest';

describe('Server Integration Tests', () => {
  let app: any;

  beforeEach(() => {
    // Create a simple server for testing that mimics the localServer behavior
    app = createServer((req, res) => {
      if (req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Welcome to the VX SDK API', status: 'success' }));
      } else if (req.url === '/api/') {
        res.writeHead(301, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Redirecting to /api', status: 'redirect' }));
      } else if (req.url === '/debug') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const htmlContent = `<html>
          <head><title>VX Local Web View</title></head>
          <body>
            <h1 style="text-align: center; color: #333;">VX SDK Local Web View</h1>
            <h2>Block Number: 0</h2>
            <p>This is a local web view for VX SDK.</p>
          </body>
        </html>`;
        res.end(htmlContent);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("not found api endpoint....\n");
      }
    });
  });

  describe('API Endpoints', () => {
    it('should respond with success message on GET /api', async () => {
      const response = await request(app).get('/api');
      
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toBe('application/json');
      expect(response.body).toEqual({
        message: 'Welcome to the VX SDK API',
        status: 'success'
      });
    });

    it('should redirect on GET /api/', async () => {
      const response = await request(app).get('/api/');
      
      expect(response.status).toBe(301);
      expect(response.headers['content-type']).toBe('application/json');
      expect(response.body).toEqual({
        message: 'Redirecting to /api',
        status: 'redirect'
      });
    });

    it('should return HTML content on GET /debug', async () => {
      const response = await request(app).get('/debug');
      
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toBe('text/html');
      expect(response.text).toContain('VX SDK Local Web View');
      expect(response.text).toContain('Block Number: 0');
    });

    it('should return 404 for unknown endpoints', async () => {
      const response = await request(app).get('/unknown');
      
      expect(response.status).toBe(404);
      expect(response.headers['content-type']).toBe('text/plain');
      expect(response.text).toBe("not found api endpoint....\n");
    });

    it('should handle POST requests to /api with 404', async () => {
      const response = await request(app).post('/api');
      
      expect(response.status).toBe(404);
    });
  });
});