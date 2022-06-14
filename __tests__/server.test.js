'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe('Server Tests', () => {
  describe('GET requests', () => {
    it('Responds with status code 200 to generic / route', async () => {

      const response = await request.get('/');
      expect(response.status).toEqual(200);
    });

    test('All your base are belong to us, indeed.', async () => {
      const response = await request.get('/test');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('All your base are belong to us.');
    });
  });
});
