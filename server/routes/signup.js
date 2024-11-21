var express = require('express');
var router = express.Router();
const fs = require('fs');
const findUser = require("../folderHandler")
const { makedir } = require("../folderHandler")


function signUp(name) {
    if (findUser.makedir(name)) {
        console.log("welcome!");
        return JSON.stringify("nini")
    } else return false;
}


router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        let data = await fs.promises.readFile(`folders/${req.body.username}/${req.body.username.json()}`)
        console.log('req.body.username.json(): ', req.body.username.json());
        console.log('data: ', data);
        if (JSON.parse(!data)) {
            makedir(req.body.username)
            res.status(200)
            res.end()
        }
    } catch (err) {
        res.status(404).send("this user exists")
        return;
    }
})

module.exports = router;

