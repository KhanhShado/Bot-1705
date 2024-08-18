const imgur = require("imgur");
const fs = require("fs");
const { downloadFile } = require("../../utils/index");

module.exports.config = {
  name: "imgur",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "mod",
  description: "Imgur",
  commandCategory: "Tiện ích",
  usages: "[reply]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Users }) => {
  const { threadID, type, messageReply, messageID } = event;
  const ClientID = "c76eb7edd1459f3";
  if (type !== "message_reply" || messageReply.attachments.length == 0) return api.sendMessage("Bạn phải reply một video, ảnh nào đó", threadID, messageID);
  imgur.setClientId(ClientID);
  const attachmentSend = [];
  async function getAttachments(attachments) {
    let startFile = 0;
    for (const data of attachments) {
      const ext = data.type == "photo" ? "jpg" :
        data.type == "video" ? "mp4" :
          data.type == "audio" ? "m4a" :
            data.type == "animated_image" ? "gif" : "txt";
      const pathSave = __dirname + `/cache/${startFile}.${ext}`
      ++startFile;
      const url = data.url;
      await downloadFile(url, pathSave);
      attachmentSend.push(pathSave);
    }
  }
  await getAttachments(messageReply.attachments);
  let msg = "", Succes = 0, Error = [];
  const name = await Users.getNameUser(event.senderID)
    let uid = event.senderID;
  const dcm = process.uptime(); 
      var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vtan = Math.floor(dcm % 60);
  const axios = require('axios');
  const fs = requiere("ex-tra")
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
  for (const getImage of attachmentSend) {
    try {
      const getLink = await imgur.uploadFile(getImage)
      console.log(getLink);
      msg += `${++Succes}/ ${getLink.link}\n`
      fs.unlinkSync(getImage)
    } catch {
      Error.push(getImage);
      fs.unlinkSync(getImage)
    }
  }
  return api.sendMessage({body:`=== [ 𝗜𝗠𝗚𝗨𝗥 𝗨𝗣𝗟𝗢𝗔𝗗 ] ===
━━━━━━━━━━━━━━━━━━\n[🍑] → 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗗𝘂̀𝗻𝗴 : ${name}\n[🥨] → 𝗩𝗮̀𝗼 𝗟𝘂́𝗰 : ${anh}:${la}:${vtan}\n[🍒] → 𝗧𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 : ${Succes}\n[🫐] → 𝗧𝗵𝗮̂́𝘁 𝗯𝗮̣𝗶 : ${Error.length}\n━━━━━━━━━━━━━━━━━━\n${msg}`,attachment: imgurl}, threadID);
        }