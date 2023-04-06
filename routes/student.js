const studentController = require('../controllers/studentController');
const router = require('express').Router();

router.post('/addStudent', studentController.addStudent);
router.put('/updateStudent/:id', studentController.updateStudent);
router.delete('/deleteStudent/:id', studentController.deleteStudent);
router.get('/getAllStudent', studentController.getAllStudent);
router.get('/getStudent/:id',studentController.getStudent);
router.get('/getStudentID', studentController.getStudentID);



module.exports = router;