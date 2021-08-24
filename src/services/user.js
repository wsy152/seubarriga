module.exports = (app) => {
  const findAll = (filter = {}) => app.db('users').where(filter).select();

  const save = async (user) => {
    if (!user.name) return { error: 'Nome é um atributo obrigatorio' };
    if (!user.mail) return { error: 'Email atribuido é obrigatorio' };
    if (!user.password) return { error: 'Senha é um atributo obrigatorio' };

    const userDb = await findAll({ mail: user.mail });
    if (userDb && userDb.length > 0) { return { error: 'ja existe um usuario com este email' }; }

    return app.db('users').insert(user, '*');
  };
  return { findAll, save };
};
