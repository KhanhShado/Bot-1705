module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};
module.exports.run = async({ event, api, Threads, Users }) => {
   const moment = require("moment-timezone");
  var tpk = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên đá";
 if (type == "tự rời") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, async(error, info) => {
      var axios = require('axios'),
      image = (await axios.get('https://apivip.nvt20011.repl.co/image/vdanime')).data.url,
      stream = (await axios.get(image,{responseType: 'stream'})).data;
   if (error) {
    api.sendMessage({body: `[ 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 ] → 𝗞𝗶́𝗰𝗵 𝗵𝗼𝗮̣𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗵𝗼𝗮́𝘁 𝗻𝗵𝗼́𝗺
━━━━━━━━━━━━━━━━━━
✔️ 𝗧𝗿𝗮̣𝗻𝗴 𝘁𝗵𝗮́𝗶: Thành công
👤 𝗧𝗲̂𝗻: ${name}
⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${tpk}
`, attachment: stream}, event.threadID);
   } else api.sendMessage({body:`[ 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 ] → 𝗞𝗶́𝗰𝗵 𝗵𝗼𝗮̣𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗵𝗼𝗮́𝘁 𝗻𝗵𝗼́𝗺
━━━━━━━━━━━━━━━━━━
❌ 𝗧𝗿𝗮̣𝗻𝗴 𝘁𝗵𝗮́𝗶: Thất bại
👤 𝗧𝗲̂𝗻: ${name}
⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${tpk}
`, attachment: stream}, event.threadID);
  })
 }
}