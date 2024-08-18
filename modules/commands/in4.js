module.exports.config = {
    name: "in4",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "BraSL",
    description: ".hee",
    commandCategory: "Tiện ích",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function ({ api, event, args, client }) {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios'];
    const { threadID, messageID, senderID, mentions, type, messageReply } = event;
    let targetID = senderID;
    if (type == 'message_reply') {
        targetID = messageReply.senderID;
    } else if (Object.keys(mentions).length > 0) {
        targetID = Object.keys(mentions)[0];
    }
    var data = await api.getUserInfoV2(targetID);
    var name = data.name
       /* name = 'No name'
    (e, i) => if(e) name = 'noname'*/

    var username = data.username
    var follow = data.follow
    var uid = targetID
    var about = data.about
    var gender = data.gender == 'male' ? "Nam" : res.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = data.birthday
    var love = data.relationship_status
    var rela = data.love.name
    var id = data.love.id
    var location = data.location.name
    var locationid = data.location.id
    var hometown = data.hometown.name
    var home = data.hometown.id
    var url = data.link
    var web = data.website
    var quotes = data.quotes
    var link = data.avatar

    var callback = () => api.sendMessage({ body: `\n====  𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ====\n→ 𝗧𝗲̂𝗻: ${name}\n→ 𝗧𝗲̂𝗻 𝗸𝗵𝗮́𝗰: ${username}\n→ 𝗨𝗜𝗗: ${uid}\n→ 𝗙𝗼𝗹𝗹𝗼𝘄: ${follow}\n→ 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: ${gender}\n→ 𝗦𝗶𝗻𝗵 𝗻𝗵𝗮̣̂𝘁 ${birthday}\n→ 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂: ${love} ( ${rela} )\n→ 𝗦𝗼̂́𝗻𝗴 𝘁𝗮̣𝗶: ${location}\n→ 𝗧𝗼𝗮̣ đ𝗼̣̂: ${locationid}\n→ Đ𝗲̂́𝗻 𝘁𝘂̛̀: ${hometown}\n→ 𝗧𝗼𝗮̣ đ𝗼̣̂: ${home}\n→ 𝗟𝗶𝗻𝗸 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${url}`, attachment: fs.createReadStream(__dirname + "/cache/1.png") }, threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"), messageID);
    return request(link).pipe(fs.createWriteStream(__dirname + '/cache/1.png')).on('close',
        () => callback());

}