const userController = require('../controllers/userController');
const router = require('express').Router();
router.post('/addUser',  userController.addUser);
router.put('/updateUser/:idUser', userController.updateUser);







module.exports = router;