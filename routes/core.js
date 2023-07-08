const coreController = require('../controllers/coreController');
const router = require('express').Router();

router.post("/addCore", coreController.addCore);
router.put("/updateCore/:id", coreController.update);







module.exports = router;