const abcController = require('../controllers/abcController');
const coreController = require('../controllers/coreController');
const router = require('express').Router();

router.get("/getAll/:modelName", abcController.getAll);
router.put("/update/:modelName/:id", abcController.update);
router.delete("/delete/:modelName/:id", abcController.delete);
router.get("/getID/:modelName/:id", abcController.getID);
router.get("/getInfoByID/:modelName/:id",abcController.getInfoByIDStudent)








module.exports = router;