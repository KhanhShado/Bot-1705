module.exports.config = {
    name: "ngu",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Lê Định",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 10,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ngủ.png")) request("https://i.imgur.com/IWGK6hx.png").pipe(fs.createWriteStream(dirMaterial + "ngủ.png"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let sticker = data[Math.floor(Math.random() * data.length)];
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Ho_Chi_Minh').format('HHmm');
    var thơ = (await axios.get("https://api.apibot.repl.co/thinh")).data.url;
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `😻 ====[ 𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭 ] ==== 😻\n━━━━━━━━━━━━━━━━\n[💤] → 𝐏𝐚𝐢𝐢 𝐏𝐚𝐢𝐢𝐢 : ${name}\n[🛌] → 𝐂𝐡𝐮́𝐜 𝐁𝐛𝐢 : ${name} 𝐍𝐠𝐮̉ 𝐍𝐠𝐨𝐧\n[💓] → 𝗧𝗵𝗶́𝗻𝗵 : ${thơ}\n━━━━━━━━━━━━━━━━\n[🕰] → 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀ : ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")}`,
attachment: fs.createReadStream(__dirname + `/noprefix/ngủ.png`) 
    }
    if (event.body.toLowerCase() == "đi ngủ đây"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ thôi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "đi ngủ nha"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ đi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ ngon"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }