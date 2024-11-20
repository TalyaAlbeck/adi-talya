var express = require('express');
var router = express.Router();
const fs = require('fs');
const { ls } = require("../folderHandler")


router.get(`/`, (req, res) => {
    res.send("ninini");
})

module.exports = router;