var express = require('express');
var router = express.Router();
const fs = require('fs');
const { ls } = require("../folderHandler")

router.post('/', async (req, res) => {
    console.log("body: ", req.body);
    res.send(await ls(req.body.username))
})

module.exports = router;
