module.exports = (app) => {
  // eslint-disable-next-line indent
    const save = (account) => app.db('accounts').insert(account, '*');
  return { save };
};
