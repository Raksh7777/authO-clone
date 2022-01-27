const express = require('express');
const  router = express.Router();
const sendEmail=require ('../controllers/sendEmail');
const verifyEmail = require('../controllers/verifyEmail');


router.post('/sendEmail',sendEmail)
router.post('/verifyEmail',verifyEmail)



module.exports = router;