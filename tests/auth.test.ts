import axios from 'axios';
import 'jest';
import request from 'supertest';
import app from '../src/app';

const apiKey = process.env.FIREBASE_API_KEY;
let token = 'Bearer ';

beforeAll(async () => {
  try {
    await process.nextTick(() => {});
    // create user account in firebase
    const user = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      {
        email: 'this@is.justatest',
        password: '123456',
      }
    );
    const { idToken } = user.data;
    token += idToken;
  } catch (err) {
    return err;
  }
});

afterAll(async () => {
  try {
    await process.nextTick(() => {});
    // delete user account from firebase
    await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${apiKey}`,
      {
        idToken: token.split(' ')[1],
      }
    );
    // delete user from database
  } catch (err) {
    return err;
  }
});

describe('basic GET at root path /', () => {
  test('if a valid idToken from firebase(frontend) is provided respond with a message', async () => {
    const response = await request(app).get('/').set({
      Authorization: token,
    });
    expect(response.body.message).toBe('hello world');
  });
  test("if a valid idToken from firebase(frontend) is provided respond with the new created user's email", async () => {
    const response = await request(app).get('/').set({
      Authorization: token,
    });
    expect(response.body.email).toBe('this@is.justatest');
  });
});
