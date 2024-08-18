module.exports.config = {
  name: "mông",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nnl", //thích thay cre ko bố m đã bố thí cho dùng rồi bớt bớt lại nha con chó
  description: "Random ảnh mong cực xịn",
  commandCategory: "hình ảnh",
  usages: "mong",
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

  var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
  const imageUrls = await Promise.all(Array.from({ length: 6 }, async () => {
    const res = await axios.get('https://api.api-official.repl.co/mong');
    return res.data.data;
    
  }));

  const attachments = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));

  const res = await axios.get(`https://api.api-official.repl.co/thinh`);
  var thinh = res.data.data;
  api.sendMessage({
    body: `🌸 ==『 𝗔̉𝗡𝗛 𝗠𝗢𝗡𝗚 』== 🌸\n━━━━━━━━━━━━━━━━━━\n[🍑] → 𝗔̉𝗻𝗵 𝗺𝗼̂𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆\n[🎊] → 𝗧𝗵𝗶́𝗻𝗵 : ${thinh}\n[⏰] → 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${time}\n━━━━━━━━━━━━━━━━━━\n⚠️ 𝗔̉𝗻𝗵 𝘀𝗲̃ 𝗿𝗮 𝗻𝗴𝗮̂̃𝘂 𝗻𝗵𝗶𝗲̂𝗻 𝘁𝘂̛̀ 𝟭 => 𝟲 𝗮̉𝗻𝗵`,
    attachment: attachments
  }, threadID);
};