const acclassController = require('../controllers/acclassController');
const router = require('express').Router();

router. post ("/addAcclass", acclassController.addAcClass);
router. put ("/updateAcclass/:id", acclassController.updateAcclass);
router.delete("/deleteAcclass/:id", acclassController.deleteAcClass);
router.get ("/getAllAcclass", acclassController.getAllClass);
router.get ("/getAcclass/:id", acclassController.getClass)







module.exports = router;