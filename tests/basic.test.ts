import 'jest';
import request from 'supertest';
import app from '../src/app';

describe('basic GET at root path /', () => {
  test('respond with a message', async () => {
    const response = await request(app).get('/');
    expect(response.body.message).toBe('hello world');
  });
});
