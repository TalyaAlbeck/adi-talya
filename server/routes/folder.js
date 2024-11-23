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
    if (!req.body.isFile) {
        console.log('req.body.isFile: ', req.body.isFile);
        try {
            let data;
            if (req.body.path.length === 0) {
                console.log('req.body.path : ', req.body.path);
                data = await makedir(req.body.username + "/" + req.body.folderName)
            }
            else {
                console.log('req.body.path : ', req.body.path);
                data = await makedir(req.body.username + req.body.path + "/" + req.body.folderName)
            }
            if (data) {
                res.status(200).send(data)
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
    }
    if (req.body.isFile) {
        try {
            let data = await fs.promises.appendFile("./folders/" + req.body.username + req.body.path + "/" + req.body.fileName,
                JSON.stringify(req.body.folderBody))
            if (data) {
                res.status(200).send(data)
                res.end();
            }
            if (!data) {
                res.status(404)
                res.end
            }
        } catch (err) {
            console.log(err);
            res.status(404).send("the file wasend maked");
            return;

        }
    }
})


router.post(`/:username`, async (req, res) => {
    if (!req.body.isFile) {
        console.log('req.body.isFile: ', req.body.isFile);
        try {
            let data;
            console.log('req.body.path : ', req.body.path);
            data = await makedir(req.body.username + req.body.path + "/" + req.body.folderName)

            if (data) {
                res.status(200).send(data)
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
    }
    if (req.body.isFile) {
        try {
            let data = await fs.promises.appendFile("./folders/" + req.body.username + req.body.path + "/" + req.body.fileName,
                JSON.stringify(req.body.folderBody))
            if (data) {
                res.status(200).send(data)
                res.end();
            }
            if (!data) {
                res.status(404)
                res.end
            }
        } catch (err) {
            console.log(err);
            res.status(404).send("the file wasend maked");
            return;

        }
    }
})

router.patch(`/:username/*`, async (req, res) => {
    try {
        let data = await fs.promises.writeFile("./folders/" + req.body.username + req.body.path,
            JSON.stringify(req.body.bodyContent))
        if (data) {
            res.status(200).send(data)
            res.end();
        }
        if (!data) {
            res.status(404)
            res.end
        }
    } catch (err) {
        console.log(err);
        res.status(404).send("the file wasend saved");
        return;

    }
})

////////////////need no convert it to delete a file, or make one to a file

router.delete(`/:username/*`, async (req, res) => {
    try {
        let data = await fs.promises.rmdir("./folders/" + req.body.username + req.body.path)
        if (data) {
            res.status(200).send(data)
            res.end();
        }
        if (!data) {
            res.status(404)
            res.end
        }
    } catch (err) {
        console.log(err);
        res.status(404).send("the file wasend deleted");
        return;

    }
})


module.exports = router;