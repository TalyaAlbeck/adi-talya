var express = require('express');
var router = express.Router();
const fs = require('fs');
const findUser = require("../folderHandler")

function signUp(name) {
    if (findUser.makedir(name)) {
        console.log("welcome!");

    }
}


router.post('/', (req, res) => {
    console.log(req.body);

    res.send(signUp(req.body.username))
})

module.exports = router;
