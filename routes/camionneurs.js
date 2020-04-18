const router = require('express').Router()
const Camionneur = require('../models').sequelize.model('Camionneur')

router.get("/", async (req, res) => {
    try {
        res.json(await Camionneur.findAll())
    } catch (error) {
        next(error)
    }
});

router.post("/", async (req, res, next) => {
  try {
    const { nom, prenom } = req.body;
    if (!(nom && prenom)) {
      const error = new Error("Bad request");
      error.status = 400;
      next(error);
    }
    res.status(201).json(
      await Camionneur.create({ nom, prenom })
    );
  } catch (error) {
    next(error);
  }
});

module.exports = router