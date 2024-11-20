var express = require('express');
var router = express.Router();
const fs = require('fs');
const { ls } = require("../folderHandler")


router.get(`/:username`, async (req, res) => {
    console.log(req.params.username);
    res.send(await ls("talya"));
})

module.exports = router;