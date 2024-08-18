module.exports.config = {
  name: "vdvip",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Tnam Procoder lỏ",
  description: "Xem video vip có 18+",
  commandCategory: "random vdieo mp4",
  usages: "vdvip",
  cooldowns: 10,
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
  axios.get('https://vdvip.trickertnam.repl.co/vdvip/php').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body: `🤩===[ 𝗩𝗜𝗗𝗘𝗢 𝗩𝗜𝗣 𝟭𝟴+ ]===🤩\n━━━━━━━━━━━━━━━━━━━\n→ 𝗩𝗶𝗱𝗲𝗼 𝘀𝗶𝗲̂𝘂 𝘃𝗶𝗽 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆\n→ 𝗦𝗼̂́ 𝘃𝗶𝗱𝗲𝗼 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́: ${res.data.count}\n→ 𝗟𝘂̛𝘂 𝘆́! 𝗵𝗮̃𝘆 𝗴𝗼̛̃ 𝘃𝗶𝗱𝗲𝗼 𝘀𝗮𝘂 𝗸𝗵𝗶 𝘅𝗲𝗺 𝘅𝗼𝗻𝗴, 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗮𝗰𝗰 𝗯𝗼𝘁 😂\n→ 𝗧𝗶𝗺𝗲: ${time}.`,attachment: fs.createReadStream(__dirname + `/cache/dạ.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dạ.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/dạ.${ext}`)).on("close", callback);
      })
}
// Vui lòng không sửa credits sửa bố tắt api