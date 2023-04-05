const lecturerController = require('../controllers/lectureController');
const router = require('express').Router();
router.post("/addLecturer",lecturerController.addLecture);








module.exports = router;