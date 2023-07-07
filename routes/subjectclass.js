const subclassController = require('../controllers/subjectClassController');
const router = require('express').Router();
router.post("/addSubClass", subclassController.addSubClass);

router.delete("/deleteSubClass/:id", subclassController.deleteSubClass);
router.put("/updateSubClass/:id",subclassController.updateSubClass);
router.get("/getAllSubClass", subclassController.getAllSubClass);
router.get("/getSubClass/:id", subclassController.getSubClass)
router.get("/getSubClassIDLec/:id", subclassController.getSubClassLec)





module.exports = router;