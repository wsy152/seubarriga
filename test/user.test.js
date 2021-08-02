const request = require('supertest');

const app = require('../src/app');

test('Listar todos os usuarios', () => request(app).get('/users')
  .then((res) => {
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toHaveProperty('name', 'Edvaldo');
  }));

test('Deve inserir com Sucesso', () => request(app).post('/users')
  .send({ name: 'Edvaldo Santana', mail: 'walter@mail.com' })
  .then((res) => {
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Edvaldo Santana');
  }));
