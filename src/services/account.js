module.exports = (app) => {
  // eslint-disable-next-line indent
  const save = (account) => app.db('accounts').insert(account, '*');
  const findAll = () => app.db('accounts');
  const find = (filter = {}) => app.db('accounts').where(filter).first();

  return { save, findAll, find };
};
