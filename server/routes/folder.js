var express = require('express');
var router = express.Router();
const fs = require('fs');
const { ls } = require("../folderHandler");
const { url } = require('inspector');


router.get(`/:username`, async (req, res) => {
    console.log(req.params.username);
    res.send(await ls(req.params.username));
})

router.get(`/:username/*`, async (req, res) => {
    console.log("here");
    console.log(req.params.username);
    const folderPath = req.path.split(`/${req.params.username}/`)[1]
    res.send(await ls(`${req.params.username}/${folderPath}`));
})

module.exports = router;