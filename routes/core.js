const coreController = require('../controllers/coreController');
const router = require('express').Router();

router.post("/addCore", coreController.addCore);







module.exports = router;