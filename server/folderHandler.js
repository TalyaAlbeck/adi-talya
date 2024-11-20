const fs = require('fs');

exports.ls = async function (name) {
    const files = await fs.promises.readdir(`folders/${name}`);
    const filesArr = [];
    for (let file of files) {
        const fileContent = await fs.promises.readFile(`folders/${name}/${file}`, { encoding: 'utf-8' })
        filesArr.push(fileContent)
    }
    return filesArr;

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
