module.exports.config = {
	name: "info",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Horizon & đuợc mod bởi Mr.ben theo sự chỉ dẫn nhiệt tình của DKhang",
	description: "Lấy thông tin người dùng dạng canvas",
	commandCategory: "game",
	usages: "getInfo",
	cooldowns: 5
};
module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
    }
module.exports.run =async function({ api, event, args, client, Users }) {
global.nodemodule["fs-extra"];
  const { loadImage, createCanvas , registerFont} = require("canvas");
  const { threadID, senderID, type, messageReply } = event;  
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
let pathImg = __dirname + "/cache/tan.png";
  let pathAvt1 = __dirname + "/cache/Avtmot.png";
  if (type == "message_reply") uid = messageReply.senderID;
  else uid = senderID;
	//var data = await api.getUserInfoV2(uid);
// const sinhnhat = data.birthday;
	//quên moẹ get rr, đi nhớ lại cái                                                                                                                             
  var cc = await api.getUserInfoV5(uid);
  //console.log(cc[0].o0.data.messaging_actors[0])
  var name = cc[0].o0.data.messaging_actors[0].name;
  var gender = cc[0].o0.data.messaging_actors[0].gender;
  var id = cc[0].o0.data.messaging_actors[0].id;
  var url = cc[0].o0.data.messaging_actors[0].url;
  var username = cc[0].o0.data.messaging_actors[0].username;
  var shortname = cc[0].o0.data.messaging_actors[0].short_name;
  var friend = cc[0].o0.data.messaging_actors[0].is_viewer_friend; 
  var cv = cc[0].o0.data.messaging_actors[0].work_info; 
  var mess = cc[0].o0.data.messaging_actors[0].is_messenger_user; 
  var chucvu = cc[0].o0.data.messaging_actors[0].is_employee; 
  var block = cc[0].o0.data.messaging_actors[0].is_message_blocked_biewer; 
  var background = ["https://i.imgur.com/Vblq0gn.jpg"];
    var rd = background[Math.floor(Math.random() * background.length)];
    let tân = (
    await axios.get(`https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt1, Buffer.from(tân, "utf-8"));
  ben = await this.circle(pathAvt1);
  let getbackground = (
    await axios.get(`${rd}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getbackground, "utf-8"));
  let font = (await axios.get(`https://github.com/hanakuUwU/font/blob/main/CaviarDreams.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/CaviarDreams.ttf`, Buffer.from(font, "utf-8"));
  let baseImage = await loadImage(pathImg);
    let baseAvt1 = await loadImage(ben);
    let canvas = createCanvas(baseImage.width, baseImage.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseAvt1, 150, 115, 170, 170);
registerFont(__dirname + `/tad/CaviarDreams.ttf`, {
family: "time"
    });
    ctx.textAlign = "start";
    ctx.fillStyle = "#eae6f2";
    ctx.font = "26px time"; ctx.fillText(`Tên: ${name}\nUsername:\n${username == true ? "không có" : username}\nSex: ${gender == "MALE" ? "Trai" : "gái"}`, 470, 135)
ctx.restore();
    ctx.save();
    ctx.beginPath(); 
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    fs.removeSync(pathAvt1);
  return api.sendMessage({
    body: `==== 𝗜𝗡𝗙𝗢 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ====\n→ 𝗧𝗲̂𝗻: ${name}\n→ 𝗧𝗲̂𝗻 𝗰𝗵𝗶́𝗻𝗵: ${shortname}\n→ 𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲: ${username == true? "𝗸𝗵𝗼̂𝗻𝗴 𝗱𝘂̀𝗻𝗴" : username}\n→ 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: ${gender == "𝗠𝗔𝗟𝗘" ? "𝗡𝗮𝗺" : "𝗡𝘂̛̃"}\n→ 𝗨𝗶𝗱 𝗣𝗿𝗼𝗳𝗶𝗹𝗲: ${id}\n→ 𝗟𝗶𝗻𝗸 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${url}\n→ 𝗕𝗮̣𝗻 𝗯𝗲̀: ${friend == true ? "Đ𝗮̃ 𝗸𝗲̂́𝘁 𝗯𝗮̣𝗻 𝘃𝗼̛́𝗶 𝗯𝗼𝘁" : "𝗖𝗵𝘂̛𝗮 𝗸𝗲̂́𝘁 𝗯𝗮̣𝗻 𝘃𝗼̛́𝗶 𝗯𝗼𝘁"}\n👋${mess == true ? "Đ𝗮̃ 𝗻𝗵𝗮̆́𝗻 𝘃𝗼̛́𝗶 𝗯𝗼𝘁" : "𝗖𝗵𝘂̛𝗮 𝗻𝗵𝗮̆́𝗻 𝘃𝗼̛́𝗶 𝗯𝗼𝘁"}\n🙄${block == true ? "Đ𝗮̃ 𝗰𝗵𝗮̣̆𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗯𝗼𝘁" : "𝗞𝗵𝗼̂𝗻𝗴 𝗰𝗵𝗮̣̆𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗯𝗼𝘁"}\n→ 𝗖𝗼̂𝗻𝗴 𝘃𝗶𝗲̣̂𝗰: ${cv == null ? "𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́" : cv}\n→ 𝗖𝗵𝘂̛́𝗰 𝘃𝘂̣: ${chucvu == null ? "𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́" : chucvu}`, attachment: fs.createReadStream(pathImg) }, event.threadID, () => fs.unlinkSync(pathImg));
} 
//test xem,no đc, z đc rồi ha 
// is_viewer_friend: xem danh sách bb, sao nx ah
// làm như bth, lấy typename ko, nó bị lỗi replytest
//var callback = () => senblabla,  còn đó ko....