const fs = require('fs');

exports.ls = async function (name) {
    const files = await fs.promises.readdir(`folders/${name}`);

    return files;

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
