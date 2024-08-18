/**
* @author Sơnkb
* @warn Vui lòng không sửa credits tôn trọng người viết cảm ơn !
*/
module.exports.config = {
  name: "vdnaruto",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sơnkb",
  description: "Ảnh video anime",
  commandCategory: "game",
  usages: "anime",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var thơ = (await axios.get("https://apivip.kizz-kinncuti.repl.co/thinh")).data.data;
  axios.get('https://Api-Naruto.studentisfuture.repl.co/naruto').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body: `『🎀』➝ 𝐒𝐨̂́ 𝐯𝐢𝐝𝐞𝐨 𝐡𝐢𝐞̂̉𝐧 𝐭𝐡𝐢̣: ${res.data.count}\n『⏰』➝ 𝐋𝐢𝐧𝐤: ${res.data.data}\n『🍑』➝ 𝐓𝐡𝐢́𝐧𝐡: ${thơ}`,
            attachment: fs.createReadStream(__dirname + `/cache/dạ.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dạ.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/dạ.${ext}`)).on("close", callback);
      })
}
