module.exports = (app) => {
  // eslint-disable-next-line indent
    const create = (req, res) => {
    app.services.account.save(req.body)
      .then((result) => res.status(201).json(result[0]));
  };
  return { create };
};
