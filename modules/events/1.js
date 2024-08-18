module.exports.config = {
  name: "1",
  eventType: ["log:user-nickname"],
  version: "0.0.1",//beta
  credits: "ProCoderCyrus",
  description: "Chống đổi biệt danh của Bot"
};

module.exports.run = async function({ api, event, Users, Threads }) {
    var { logMessageData, threadID, author } = event;
    var botID = api.getCurrentUserID();
    var { BOTNAME, ADMINBOT } = global.config;
    var { nickname } = await Threads.getData(threadID, botID);
    var nickname = nickname ? nickname : BOTNAME;
    if (logMessageData.participant_id == botID && author != botID && !ADMINBOT.includes(author) && logMessageData.nickname != nickname) {
   api.changeNickname(`『 ${global.config.PREFIX } 』• ${(!global.config.BOTNAME) ? "BOT" : global.config.BOTNAME}`, threadID, botID) 
        var info = await Users.getData(author);
        var vtan = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
 const dcm = process.uptime(); 
  var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var tvt = Math.floor(dcm % 60);
const t = args[0] || threadID;
    const name = await Users.getNameUser(event.senderID)
    let uid = event.senderID;
   const fs = require("fs-extra")
  const axios = require('axios');
var so = [
  "2","3","4","5","6"
];
const dongdev = so[Math.floor(Math.random()*so.length)];
  const imageUrls = await Promise.all(Array.from({ length: `${dongdev}` }, async () => {
    const res = await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`);
    return res.data.url;   
  }));
  const imgurl = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));
       return api.sendMessage({ body: `===== [ cấm đổi tên bot ] =====\n━━━━━━━━━━━━━━━━━━\n[🥦] → Người Dùng : ${name}\n[🍆] → Đã đổi tên bot: ${t}\n[⏰] → Vào Lúc : ${vtan}\n━━━━━━━━━━━━━━━━━━\n[🍠] → Bot Đã Onl Được : ${anh} : ${la} : ${tvt}`,attachment: imgurl}, event.threadID, event.messageID);   
    }  
                               }