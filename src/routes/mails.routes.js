const express = require("express");
const router = express.Router();
const fileUpload = require('../utils/fileUpload');
const upload = fileUpload("barterFunds/userfiles");

const { 
    sendBulkEmail
     } = require('../controllers/mails.controllers');

router.post("/send-bulk-email", upload.single('csvFile'), sendBulkEmail);

module.exports = router;