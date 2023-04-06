const lecturerController = require('../controllers/lectureController');
const router = require('express').Router();
router.post("/addLecturer",lecturerController.addLecture);
router.get("/getAllLecturer", lecturerController.getAllLecturer);
router.get("/getLecturer/:id",lecturerController.getLecturer);

router.get("/getLecturerID",lecturerController.getLecturerID);
router.put("/updateLecturer/:id",lecturerController.updateLecturer);
router.delete("/deleteLecturer/:id",lecturerController.deleteLecturer);




module.exports = router;