const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
  name: 'Mike',
  email: 'mike@example.com',
  password: '56what!!',
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

describe('user route', () => {
  test('should signup a new user', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'Shantanu',
        email: 'shantanu@example.com',
        password: 'MyPass777!',
      })
      .expect(201);
  });
});
