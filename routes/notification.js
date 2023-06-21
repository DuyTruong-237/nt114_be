const notiController = require('../controllers/notificationController');
const router = require('express').Router();
router.post("/addNotification", notiController.addNoti);
router.get("/getNoTificationAsType/:type", notiController.getNotiAsType);







module.exports = router;