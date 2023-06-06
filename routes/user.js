const userController = require('../controllers/userController');
const userMiddelware = require('../middleware/authMiddleware')
const router = require('express').Router();
router.post('/addUser',  userMiddelware.protectedRoute,userController.addUser);
router.put('/updateUser/:idUser', userController.updateUser);
router.post('/login',  userController.login);






module.exports = router;