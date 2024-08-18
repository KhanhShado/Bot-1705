module.exports.config = {
  name: "vdgai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Văn Tân",
  description: "video gái",
  commandCategory: "giải trí",
  usages: "gái",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var thơ = (await axios.get("https://api.api-official.repl.co/thinh")).data.url;
  axios.get('https://ngtien.canvastpk.repl.co/image/vdgai').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body: `=======𝐕𝐃𝐆𝐀𝐈=======\n━━━━━━━━━━━━━━━━━━\n『⏰』➝ 𝐋𝐢𝐧𝐤: ${res.data.url}\n『🍑』➝ 𝐓𝐡𝐢́𝐧𝐡: ${thơ}\n━━━━━━━━━━━━━━━━━━\n『🎀』➝ 𝐀𝐝𝐦𝐢𝐧 𝐔𝐩𝐝𝐚𝐭𝐞: 𝐕𝐚̆𝐧 𝐓𝐚̂𝐧\n『🌐』➝ 𝐋𝐢𝐧𝐤 𝐅𝐁: https://www.facebook.com/AnhYeuEm.Tan06\n『❤️』➝ 𝐂𝐡𝐮́𝐜 𝐂𝐚́𝐜 𝐁𝐚̣𝐧 𝐗𝐞𝐦 𝐕𝐢𝐝𝐞𝐨 𝐕𝐮𝐢 𝐕𝐞̉`,
            attachment: fs.createReadStream(__dirname + `/cache/dạ.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dạ.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/dạ.${ext}`)).on("close", callback);
      })
}
