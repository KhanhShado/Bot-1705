module.exports.config = {
  name: "money",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Kiểm tra số tiền của bản thân hoặc người được tag",
  commandCategory: "Kiếm tiền",
  usages: "[trống|Tag]",
  cooldowns: 5
};
module.exports.run = async function({ api, event, args, Currencies, Users}) {
    const { threadID, messageID, senderID, mentions } = event;
  if (!args[0]) {
    const money = (await Currencies.getData(senderID)).money;
    let name = await Users.getNameUser(event.senderID)
const axios = require('axios');
	const fs = require('fs-extra');
var so = [
  "3"
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
     const img = imgurl[Math.floor(Math.random(imgurl.length))]
    return  api.sendMessage({body:`[ Ví Tiền Mặt ]\n────────────────────\n👤 Name: ${name}\n🎫 Số tiền: ${money}\n
────────────────────\n
✏️ Dùng work nếu muốn kiếm thêm thu nhập nhé!`, attachment: imgurl},event.threadID, event.messageID);  }
  else if (Object.keys(event.mentions).length == 1) {
    var mention = Object.keys(mentions)[0];
    var money = (await Currencies.getData(mention)).money;
    if (!money) money = 0;
 return api.sendMessage({body:`[ 𝕍𝕚́ 𝕋𝕚𝕖̂̀𝕟 𝕄𝕒̣̆𝕥 ]\n[👤] → 𝗧𝗲̂𝗻: ${mentions[mention].replace(/\@/g, "")}\n[💵] → 𝗦𝗼̂́ 𝗧𝗶𝗲̂̀𝗻: ${money} 𝗩𝗡𝗗`,
      mentions: [{
        tag: mentions[mention].replace(/\@/g, ""),
        id: mention
      }]
    }, threadID, messageID);
  }
  else return global.utils.throwError(this.config.name, threadID, messageID);
}