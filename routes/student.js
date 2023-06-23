const studentController = require('../controllers/studentController');
const router = require('express').Router();
const authMiddleware=require('../middleware/authMiddleware')
router.post('/addStudent',authMiddleware.protectedRouteAdminRole, studentController.addStudent);
router.put('/updateStudent/:id', studentController.updateStudent);
router.delete('/deleteStudent/:id', studentController.deleteStudent);
router.get('/getAllStudent', studentController.getAllStudent);
router.get('/getStudent/:id',studentController.getStudent);
router.get('/getStudentID/:idUser', studentController.getStudentID);



module.exports = router;