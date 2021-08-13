const request = require('supertest');

const app = require('../../src/app');
// eslint-disable-next-line arrow-body-style
test('Listar todos os usuarios', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

// eslint-disable-next-line arrow-body-style
test('Deve inserir com Sucesso', () => {
  const mail = `${Date.now()}@mail.com`;
  return request(app).post('/users')
    .send({ name: 'Edvaldo Santana', mail, password: '1234567' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Edvaldo Santana');
    });
});
