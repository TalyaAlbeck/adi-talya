const fs = require('fs');

exports.ls = async function (name) {
    const files = await fs.promises.readdir(`folders/${name}`);
    const filesArr = [];
    for (let file of files) {
        console.log('file: ', file);
        const fileContent = await fs.promises.readFile(`folders/${name}/${file}`, { encoding: 'utf-8' })
        if (file !== `${name}.json`) {
            filesArr.push({ name: file, body: fileContent })
        }
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
        await fs.promises.mkdir(`./folders/${folderName}`)
        await fs.promises.appendFile(`./folders/${folderName}/${folderName}.json`, JSON.stringify({ name: folderName }))
        return true;
    }
}
