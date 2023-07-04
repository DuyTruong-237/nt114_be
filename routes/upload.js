const uploadController = require("../controllers/uploadController")
const router = require('express').Router();

router.post("/addfile",uploadController.addfile);
router.get("/getFile/:subclass",uploadController.getFile);
router.get("/download/:nameFile",uploadController.download)
module.exports = router