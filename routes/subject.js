const subjectController = require('../controllers/subjectController');
const router = require('express').Router();


router.post("/addSubject", subjectController.addSubject);
router.put("/updateSubject/:id", subjectController.updateSubject);
router.delete("/deleteSubject/:id",subjectController.deleteSubject);
router.get ("/getSubject/:id",subjectController.getSubject);
router.get ("/getAllSubject",subjectController.getAllSubject);






module.exports = router;