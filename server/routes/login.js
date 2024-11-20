var express = require('express');
var router = express.Router();
const fs = require('fs');
const { ls } = require("../folderHandler")

router.post('/', (req, res) => {
    console.log("body: ", req.body);
    res.send(ls(req.body.username))
})

module.exports = router;
