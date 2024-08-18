module.exports.config = {
  name: "nude",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nnl", //thích thay cre ko bố m đã bố thí cho dùng rồi bớt bớt lại nha con chó
  description: "Random nude",
  commandCategory: "hình ảnh",
  usages: "nsfw",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

const request = require('request');
const fs = require("fs");

module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const threadID = event.threadID;

  const imageUrls = await Promise.all(Array.from({ length: 6 }, async () => {
    const res = await axios.get('https://obito.tiennguyen166.repl.co/images/nude');
    return res.data.url;
    
  }));

  const attachments = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));

  const res = await axios.get(`https://image-api.tiennguyen166.repl.co/thinh`);
  var thinh = res.data.data;
  api.sendMessage({
    body: `🌸 ===『 𝗜𝗺𝗮𝗴𝗲 𝗡𝘂𝗱𝗲 』===🌸
━━━━━━━━━━━━━━━━━━━━
[🎊] → 𝗧𝗵𝗶́𝗻𝗵 : ${thinh}
[🖤] → 𝗔̉𝗻𝗵 𝗻𝘂𝗱𝗲 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗯𝗲̂𝗻 𝗱𝘂̛𝗼̛́𝗶
━━━━━━━━━━━━━━━━━━━━
⚠️ 𝗔̉𝗻𝗵 𝘀𝗲̃ 𝗿𝗮 𝗻𝗴𝗮̂̃𝘂 𝗻𝗵𝗶𝗲̂𝗻 𝘁𝘂̛̀ 𝟭 => 𝟲 𝗮̉𝗻𝗵`,
    attachment: attachments
  }, threadID);
};