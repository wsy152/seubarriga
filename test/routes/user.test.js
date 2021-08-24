const request = require('supertest');

const app = require('../../src/app');

const mail = `${Date.now()}@mail.com`;
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
  return request(app).post('/users')
    .send({ name: 'Edvaldo Santana', mail, password: '1234567' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Edvaldo Santana');
    });
});
// eslint-disable-next-line arrow-body-style
test('Não deve inserir usuário sem nome', () => {
  return request(app).post('/users')
    .send({ mail: 'edy@gmail.com', password: '1234567' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Nome é um atributo obrigatorio');
    });
});
// eslint-disable-next-line arrow-body-style
test('Não deve inserir usuário sem email', async () => {
  const result = await request(app).post('/users')
    .send({ name: 'Edvaldo', password: '1234567' });
  expect(result.status).toBe(400);
  expect(result.body.error).toBe('Email atribuido é obrigatorio');
});

// eslint-disable-next-line no-unused-vars
test('Não deve inserir usuário sem senha', (done) => {
  request(app).post('/users')
    .send({ name: 'Edvaldo', mail: 'edy@gmail.com' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Senha é um atributo obrigatorio');
      done();
    })
    // eslint-disable-next-line arrow-parens
    .catch(err => done.fail(err));
});

test('Não deve inserir usuário com email existente', () => request(app).post('/users')
  // eslint-disable-next-line no-undef
  .send({ name: 'Edvaldo Santana', mail, password: '1234567' })
  .then((res) => {
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('ja existe um usuario com este email');
  }));
