var express = require('express');
var router = express.Router();
const fs = require('fs');
const findUser = require("../folderHandler")
const { makedir } = require("../folderHandler")
const { ls } = require("../folderHandler")

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        let data = await makedir(req.body.username, req.body.password, true)
        console.log('req.body.username.json(): ', req.body.username);
        console.log('data: ', data);
        if (data) {
            res.status(200)
            res.end()
        }
        if (!data) {
            res.status(404)
            res.end()
        }
    } catch (err) {
        console.log('err: ', err);
        res.status(404).send("this user exists")
        return;
    }
})

module.exports = router;

