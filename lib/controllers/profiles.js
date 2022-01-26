const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  try {
    const profiles = await ProfileService.create({
      name: req.body.name,
    });
    res.send(profiles);
  } catch (error) {
    next(error);
  }
});
