const sublecController = require('../controllers/sublecturersController');
const router = require('express').Router();

router.post("/addSubLec",sublecController.addSubLec);

router.delete("/deleteSublec/:id", sublecController.deleteSubLec);
router.get("/getSubLec/:id",sublecController.getSubLect);
router.get("/getSubLecID/:idRole/:id",sublecController.getSubLectID);
router.get("/getAllSubLec",sublecController.getAllSubLec);
router.put("/updateSubLec/:id", sublecController.updateSubLec);







module.exports = router;