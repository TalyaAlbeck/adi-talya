const fs = require('fs');

exports.ls = function (name) {
    fs.readdir("folders", (err, res) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(res);
            for (let i = 0; i < res.length; i++) {
                fs.stat(`./folders/${res[i]}`, (err, stats) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    if (res[i] === name) {
                        console.log("the folder is " + name + "!!!");
                        return true;
                    }
                    if (stats.isFile()) { console.log(res[i] + " is a file") }
                    else console.log(res[i] + " is a folder")
                })

            }
        }

    })
}

exports.makedir = async function (folderName) {
    try {
        await fs.promises.access(`./folders/${folderName}`);

        console.log("this folder already exists");
        return false;

    } catch (err) {

        console.log(`${folderName} was maked!`);
        fs.mkdirSync(`./folders/${folderName}`)
        return true;
    }
}
