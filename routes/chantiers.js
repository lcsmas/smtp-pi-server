const router = require("express").Router();
const Chantier = require("../models").sequelize.model('Chantier');

router.get("/", async (req, res, next) => {
    try {
        res.json(await Chantier.findAll())
    } catch (error) {
        next(error)
    }
});

router.post("/", async (req, res, next) => {
  try {
    const { nom, lieuChargementId, lieuDéchargementId } = req.body;
    if (!(nom && lieuChargementId && lieuDéchargementId)) {
      res.sendStatus(400)
    }
    res.status(201).json(
      await Chantier.create({
        nom,
        lieuDéchargementId,
        lieuChargementId,
      })
    );
  } catch (error) {
    next(error);
  }
});

module.exports = router;
