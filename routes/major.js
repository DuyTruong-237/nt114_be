const MajorController = require('../controllers/majorController');
const router = require('express').Router();

router. post ("/addMajor", MajorController.addMajor);
router. put ("/updateMajor/:id", MajorController.updateMajor);
router.delete("/deleteMajor/:id", MajorController.deleteMajor);
router.get ("/getAllMajor", MajorController.getAllMajor);
router.get ("/getMajor/:id", MajorController.getMajor)







module.exports = router;