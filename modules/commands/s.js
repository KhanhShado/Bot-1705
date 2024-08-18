module.exports.config = {
  name: "s",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDz mod by HieuSimpRin",
  description: "Xem ngày giờ",
  commandCategory: "Công Cụ",
  usages: "",
  cooldowns: 0,
  dependencies: []
};

module.exports.run = async function ({ api, event, args, Currencies, Users }) {
   const axios = require("axios")
var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};
  const moment = require("moment-timezone");
  var ngay = moment.tz('Asia/Ho_Chi_Minh').format('D/MM/YYYY');
  var gio = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss');
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  var thang = moment.tz("Asia/Ho_Chi_Minh").format('MM');
  var nam = moment.tz("Asia/Ho_Chi_Minh").format('YYYY');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
  const res = await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`);
  const finduid = res.data.data.uid
  const finddate = res.data.data.date
  let name = await Users.getNameUser(event.senderID);
   let
  s = process.uptime(),u = [s/3600<<0, s/60%60<<0, s%60<<0].map(el => el < 10?'0'+el: el);
 return api.sendMessage({body:`𝐇𝐞𝐥𝐥𝐨: ${name}\n𝐈𝐃 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: ${finduid}\n𝐍𝐠𝐚̀𝐲 𝐭𝐚̣𝐨: ${finddate} \n𝐇𝐨𝐮𝐫: ${gio}\n𝐃𝐚𝐲: ${ngay} ${thu}\n𝐘𝐞𝐚𝐫: ${nam}\n𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐨𝐧𝐥: ${u.join(':')}\n━━━━━━━━━━━━━━━━━━\n`, attachment: await streamURL(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID,event.messageID);
}