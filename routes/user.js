const userController = require('../controllers/userController');
const userMiddelware = require('../middleware/authMiddleware')
const router = require('express').Router();
router.post('/addUser', userController.addUser);
router.put('/updateUser/:idUser', userController.updateUser);
router.post('/login',  userController.login);
router.post('/logout',  userController.logout);
module.exports = router;