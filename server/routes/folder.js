var express = require('express');
var router = express.Router();
const fs = require('fs');
const { ls, makedir } = require("../folderHandler");
const { url } = require('inspector');
const path = require('path');


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

router.post(`/:username/*`, async (req, res) => {
    try {
        let data;
        if (req.body.path !== "") {
            data = await makedir(req.body.username + req.body.path + "/" + req.body.folderName)
        }
        else {
            data = await makedir(req.body.username + "/" + req.body.folderName)
        }
        if (data) {
            res.status(200)
            res.end();
        }
        if (!data) {
            res.status(404)
            res.end
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).send("the folder wasend maked");
        return;

    }
})


module.exports = router;