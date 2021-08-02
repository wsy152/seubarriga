test('Devo conhecer O Jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
});

test('Deve saber trabalhar com objetos', () => {
  const obj = { name: 'Edvaldo', email: 'edy@gmail.com' };
  expect(obj).toHaveProperty('name', 'Edvaldo');
  expect(obj.name).toBe('Edvaldo');
});
