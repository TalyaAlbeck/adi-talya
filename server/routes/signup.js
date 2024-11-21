var express = require('express');
var router = express.Router();
const fs = require('fs');
const findUser = require("../folderHandler")
const { makedir } = require("../folderHandler")
const { ls } = require("../folderHandler")


// function signUp(name) {
//     if (findUser.makedir(name)) {
//         console.log("welcome!");
//         return JSON.stringify("nini")
//     } else return false;
// }


router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        let data = await makedir(req.body.username)
        // makedir(req.body.username)
        // let data = await fs.promises.readFile(`folders/${req.body.username}/${req.body.username}.json`)
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

