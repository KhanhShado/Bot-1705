module.exports.config = {
    name: "masoi",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Raiden Shogun",
    description: "Ma sói vip trên messenger",
    commandCategory: "Game",
    usages: "masoi + Mã số làng",
    cooldowns: 2
};

module.exports.onLoad = async () => {
    const fs = require("fs-extra");
    const axios = require("axios");
    const path = require("path");
    const dir = process.cwd() + `/modules/commands/`;
    if (!fs.existsSync(dir + "masoi/masoi/index.js")) {
        await global.utils.downloadFile(`https://drive.google.com/u/0/uc?id=1QQlFJJVlYIydd2FN8mev8RICUc8xLRd9&export=download`, dir + 'game.zip');
        const unZip = require('adm-zip');
        const zip = new unZip(dir + 'game.zip');
        await zip.extractAllTo(dir + 'masoi', true);
        fs.unlinkSync(dir + 'game.zip')
    } 
    try {
    const subname = text => {
        return text
            .split('.')
            .slice(0, -1)
            .join('.');
    };
    const loader = dir => {
        const exportData = {};
        const files = fs
            .readdirSync(dir)
            .filter(
                filename =>
                    fs.lstatSync(path.join(dir, filename)).isDirectory() ||
                    filename.split('.').pop() == 'js'
            );
        for (const filename of files) {
            try {
                const data = require(path.join(dir, filename));
                const sname = subname(filename) || filename;
                if (sname == 'common') {
                    Object.assign(exportData, data);
                } else {
                    exportData[sname] = data;
                }
            } catch (e) {
                console.error(e.stack);
                continue;
            }
        }
        return exportData;
    };
    var GameManager = require(dir + 'masoi/masoi/GameManager')

    new Promise(resolve => setTimeout(resolve, 2000));
    var gameManager = new GameManager(
        loader(dir + 'masoi/')
    );
    global.gameManager = gameManager
}
    catch(e) {
        console.log(e)
    }
}

module.exports.handleEvent = async function({ api, event, Currencies }) {
    const reply = function(message) {
        return api.sendMessage(message, event.threadID, event.messageID);
    }
    if(!global.gameManager || !global.gameManager.items.some(i => i.name == "Ma Sói")) return
        for (const game of global.gameManager.items) {
            if(!game.participants) continue
            if ((game.participants.includes(event.senderID) && !event.isGroup) || game.threadID == event.threadID) {
                game.onMessage(event, reply);
            }
        }
}
module.exports.run = async ({ api, event, args, Users }) => {
    global.Users = Users
    global.gameManager.run(this.config.name, {
        masterID: event.senderID,
        threadID: event.threadID,
        param: args,
        isGroup: event.isGroup
    })
}