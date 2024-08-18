module.exports.config = {
  name: "rela",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "TNT", 
  description: "Rela có chọn giới tính",
  commandCategory: "Tình yêu", 
  usages: "rela Nam/Nữ", 
  cooldowns: 10
};
module.exports.run = async ({ api, event, handleReply, Users, Currencies }) => {
const { threadID, messageID, senderID } = event;
   var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  const getHours = await global.client.getTime("hours");
	  var session = `${getHours < 3 ? "đê𝐦 𝐤𝐡𝐮𝐲𝐚" : getHours < 8 ? "𝐛𝐮ổ𝐢 𝐬á𝐧𝐠" : getHours < 12 ? "𝐛𝐮ổ𝐢 𝐭𝐫ư𝐚" : getHours < 17 ? "𝐛𝐮ổ𝐢 𝐜𝐡𝐢ề𝐮" : getHours < 23 ? "𝐛𝐮ổ𝐢 𝐭ố𝐢" : "đê𝐦 𝐤𝐡𝐮𝐲𝐚"}`
  const getHours1 = await global.client.getTime("hours");
			var session1 = `${getHours1 < 3 ? "🌌" : getHours1 < 8 ? "🏙" : getHours1 < 12 ? "🌁" : getHours1 < 17 ? "🌇" : getHours1 < 23 ? "🌃" : "🎑"}`
	return api.sendMessage(`❤==[ 𝗠𝗘𝗡𝗨 𝗥𝗘𝗟𝗔 𝗧𝗡𝗧 ]==❤\n━━━━━━━━━━━━━━━━━━━\n 𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n⚠️ 𝗖𝗵𝘂𝗮̂̉𝗻 𝗯𝗶̣ 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 đ𝗼̂́𝗶 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗿𝗲𝗹𝗮\n🌐 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻 𝗴𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵 𝗰𝗮̂̀𝗻 𝗿𝗲𝗹𝗮\n𝟭.𝗧𝗶𝗻𝗱𝗲𝗿 𝗿𝗲𝗹𝗮 𝗸𝗶𝗲̂̉𝘂 𝗕𝗹𝗶𝗻𝗸💓⚫ (𝗡𝗮𝗺) \n𝟮.𝗧𝗶𝗻𝗱𝗲𝗿 𝗿𝗲𝗹𝗮 𝗸𝗶𝗲̂̉𝘂 𝗕𝗹𝗶𝗻𝗸 💓⚫ (𝗡𝘂̛̃) \n3.Tinder rela Blink🟣🔵 (Nam) \n4.Tinder rela Blink🟣🔵 (Nữ) \n5.Tinder rela Jennie💓🖤 (Nam) \n6.Tinder rela Jennie💓🖤 (Nữ) 7.Tider rela TNT hiệu ứng neon⚪⚫ (Nam) \n8.Tinder rela TNT hiệu ứng neon⚪⚫ (Nữ) \n9.Tinder rela TNT hiệu ứng neon sắc màu🌈 (Nam) \n10.Tinder rela TNT hiệu ứng neon sắc màu🌈 (Nữ) \n11.Tinder rela hiệu ứng trái tim có cánh💗🤍 (Nam) \n12.Tinder rela hiệu ứng trái tim có cánh💗🤍 (Nữ) \n━━━━━━━━━━━━━━━━━━━\n⚠️ 𝗥𝗲𝗽𝗹𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ đ𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴\n🍀 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗼́ 𝟲 𝗸𝗶𝗲̂̉𝘂 𝘁𝗶𝗻𝗱𝗲𝗿 𝗯𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴`, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "tinder",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
     })
   }
module.exports.handleReply = async ({ api, event, handleReply, Users, Currencies }) => {
var token = `6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const tile = (Math.random() * 50)+50;
const emoji = ["♥️","❤️","💛","💚","💙","💜","💞","💖","💝","💓","💘","💍"];
const random = ["𝗖𝗵𝘂́𝗰 𝟮 𝗯𝗮̣𝗻 𝘁𝗿𝗮̆𝗺 𝗻𝗮̆𝗺 𝗵𝗮̣𝗻𝗵 𝗽𝗵𝘂́𝗰", "𝗖𝗵𝘂́𝗰 𝟮 𝗯𝗮̣𝗻 𝘆𝗲̂𝘂 𝗻𝗵𝗮𝘂 𝘁𝗼̛́𝗶 𝗴𝗶𝗮̀", "𝗖𝗵𝘂́𝗰 𝗰𝗵𝗼 𝟮 𝗯𝗮̣𝗻 𝘀𝗼̛́𝗺 𝗰𝗵𝗶𝗮 𝘁𝗮𝘆", "𝗠𝗮̃𝗶 𝗯𝗲̂𝗻 𝗻𝗵𝗮𝘂 𝟮 𝗯𝗮̣𝗻 𝗻𝗵𝗲́", "𝗦𝗼̛́𝗺 𝘀𝗶𝗻𝗵 𝗾𝘂𝘆́ 𝘁𝘂̛̉ 𝗻𝗵𝗲𝗮𝗮𝗮", "𝗦𝗼̛́𝗺 𝘀𝗶𝗻𝗵 𝗾𝘂𝘆́ 𝘁𝘂̛̉ 𝗻𝗵𝗮𝗮𝗮", "𝗖𝗵𝘂́𝗰 𝟮 𝗯𝗮̣𝗻 𝗰𝗼́ 𝟭 𝘁𝗶̀𝗻𝗵 𝘆𝗲̂𝘂 𝗯𝗲̂̀𝗻 𝘃𝘂̛̃𝗻𝗴", "𝗖𝗵𝘂́𝗰 𝟮 𝗯𝗮̣𝗻 𝗺𝗮̃𝗶 𝗺𝗮̃𝗶 𝟭 𝘁𝗶̀𝗻𝗵 𝘆𝗲̂𝘂"];
  var tl = ["46" , "3" , "5" , "36" , "72" , "24" , "86" , "9" , "33" , "60" , "43" , "84" , "50" , "46" , "73" , "83" , "91" , "74" , "63" , "7" , "77" , "96" , "75" , "100" , "2" , "6" , "49" , "40" , "64" , "74" , "70" , "85" , "63" , "21" , "99" , "56"];
var tle = tl[Math.floor(Math.random() * tl.length)];
  var tl1 = ["46" , "3" , "5" , "36" , "72" , "24" , "86" , "9" , "33" , "60" , "43" , "84" , "50" , "46" , "73" , "83" , "91" , "74" , "63" , "7" , "77" , "96" , "75" , "100" , "2" , "6" , "49" , "40" , "64" , "74" , "70" , "85" , "63" , "21" , "99" , "56"];
var tle1 = tl[Math.floor(Math.random() * tl.length)];
  var tl2 = ["46" , "3" , "5" , "36" , "72" , "24" , "86" , "9" , "33" , "60" , "43" , "84" , "50" , "46" , "73" , "83" , "91" , "74" , "63" , "7" , "77" , "96" , "75" , "100" , "2" , "6" , "49" , "40" , "64" , "74" , "70" , "85" , "63" , "21" , "99" , "56"];
var tle2 = tl[Math.floor(Math.random() * tl.length)];
var tl3 = ["46" , "3" , "5" , "36" , "72" , "24" , "86" , "9" , "33" , "60" , "43" , "84" , "50" , "46" , "73" , "83" , "91" , "74" , "63" , "7" , "77" , "96" , "75" , "100" , "2" , "6" , "49" , "40" , "64" , "74" , "70" , "85" , "63" , "21" , "99" , "56"];
var tle3 = tl[Math.floor(Math.random() * tl.length)];
  const getHours = await global.client.getTime("hours");
	  var session = `${getHours < 3 ? "đê𝐦 𝐤𝐡𝐮𝐲𝐚" : getHours < 8 ? "𝐛𝐮ổ𝐢 𝐬á𝐧𝐠" : getHours < 12 ? "𝐛𝐮ổ𝐢 𝐭𝐫ư𝐚" : getHours < 17 ? "𝐛𝐮ổ𝐢 𝐜𝐡𝐢ề𝐮" : getHours < 23 ? "𝐛𝐮ổ𝐢 𝐭ố𝐢" : "đê𝐦 𝐤𝐡𝐮𝐲𝐚"}`
  const getHours1 = await global.client.getTime("hours");
			var session1 = `${getHours1 < 3 ? "🌌" : getHours1 < 8 ? "🏙" : getHours1 < 12 ? "🌁" : getHours1 < 17 ? "🌇" : getHours1 < 23 ? "🌃" : "🎑"}`
const getHours3 = await global.client.getTime("hours");
			var session3 = `${getHours3 < 3 ? "12" : getHours3 < 9 ? "72" : getHours3 < 8 ? "17" : getHours3 < 12 ? "56" : getHours3 < 10 ? "16" : getHours3 < 20 ? "77" : getHours3 < 17 ? "94" : getHours3 < 23 ? "73" : "100"}`
  const getHours2 = await global.client.getTime("hours");
			var session2 = `${getHours2 < 3 ? "86" : getHours2 < 8 ? "35" : getHours2 < 12 ? "63" : getHours2 < 17 ? "24" : getHours2 < 23 ? "85" : "63"}`
const getHours4 = await global.client.getTime("hours");
			var session4 = `${getHours4 < 3 ? "43" : getHours4 < 8 ? "54" : getHours4 < 12 ? "22" : getHours4 < 17 ? "73" : getHours4 < 18 ? "71" : getHours4 < 23 ? "84" : "97"}`
const getHours5 = await global.client.getTime("hours");
			var session5 = `${getHours5 < 3 ? "65" : getHours5 < 9 ? "73" : getHours5 < 8 ? "84" : getHours5 < 12 ? "74" : getHours5 < 11 ? "46" : getHours5 < 16 ? "51" : getHours5 < 13 ? "61" : getHours5 < 17 ? "32" : getHours5 < 23 ? "99" : "63"}`
    switch(handleReply.type) {
        case "tinder": {
          switch(event.body) {
					case "1": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`🔵 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝗿𝗲𝗹𝗮 𝗧𝗡𝗧 đ𝗮𝗻𝗴 𝘁𝗶̀𝗺 đ𝗼̂́𝗶 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝗰𝗵𝗼 𝗯𝗮̣𝗻...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/RmcxQuv.jpg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.jpeg", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💚==[ 𝗥𝗘𝗟𝗔 𝗧𝗡𝗧 ]==💚\n━━━━━━━━━━━━━━━━━━\n💖 𝗥𝗲𝗹𝗮 𝗧𝗡𝗧 đ𝗮̃ 𝘁𝗶̀𝗺 𝘁𝗵𝗮̂́𝘆 đ𝗼̂́𝗶 𝘁𝘂𝗼̛̣𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 \n💓 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💝 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n 𝗧𝗶̉ 𝗹𝗲̣̂̂ 𝗹𝗮̃𝗻𝗴 𝗺𝗮̣𝗻𝗴: ${tle}% \n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝘁𝗿𝘂𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵: ${tle1}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗯𝘂̛𝗼̛́𝗻𝗴 𝗯𝗶̉𝗻𝗵: ${tle2}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ đ𝗼̣̂𝗰 𝗹𝗮̣̂𝗽: ${tle3}%\n━━━━━━━━━━━━━━━━━━\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 𝗥𝗲𝗹𝗮 𝘁𝗮̣𝗶 𝗯𝗼𝘅: ${threadname}\n🔥 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
          case "2": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`🟠 Vui lòng chờ rela TNT đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/RmcxQuv.jpg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
         var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💙==[ 𝗥𝗘𝗟𝗔 𝗧𝗡𝗧 ]==💙\n━━━━━━━━━━━━━━━━━━━\n❤ Rela thành công\n️💞 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💖 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗶̉ 𝗹𝗲̣̂̂ 𝗹𝗮̃𝗻𝗴 𝗺𝗮̣𝗻𝗴: ${tle}% \n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝘁𝗿𝘂𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵: ${tle1}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗯𝘂̛𝗼̛́𝗻𝗴 𝗯𝗶̉𝗻𝗵: ${tle2}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ đ𝗼̣̂𝗰 𝗹𝗮̣̂𝗽: ${tle3}%\n━━━━━━━━━━━━━━━━━━\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 Rela tại box: ${threadname}\n🔥 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "3": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`💙 Vui lòng chờ rela TNT đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/bFsH1hS.jpg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
                 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💜====[ 𝗥𝗘𝗟𝗔 𝗧𝗡𝗧 ]====💜\n━━━━━━━━━━━━━━━━━━\n💖 𝗥𝗲𝗹𝗮 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 \n💓 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💝 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗶̉ 𝗹𝗲̣̂̂ 𝗹𝗮̃𝗻𝗴 𝗺𝗮̣𝗻𝗴: ${tle}% \n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝘁𝗿𝘂𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵: ${tle1}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗯𝘂̛𝗼̛́𝗻𝗴 𝗯𝗶̉𝗻𝗵: ${tle2}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ đ𝗼̣̂𝗰 𝗹𝗮̣̂𝗽: ${tle3}%\n━━━━━━━━━━━━━━━━━\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 Rela tại box: ${threadname}\n🔥 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
        case "4": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`💝 Vui lòng chờ rela TNT đang tìm đối tuợng cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/bFsH1hS.jpg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💙==[ RELA TNT ]==💙\n━━━━━━━━━━━━━━━━━━━\n❤ Rela thành công\n️💓 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💖 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗶̉ 𝗹𝗲̣̂̂ 𝗹𝗮̃𝗻𝗴 𝗺𝗮̣𝗻𝗴: ${tle}% \n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝘁𝗿𝘂𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵: ${tle1}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗯𝘂̛𝗼̛́𝗻𝗴 𝗯𝗶̉𝗻𝗵: ${tle2}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ đ𝗼̣̂𝗰 𝗹𝗮̣̂𝗽: ${tle3}%\n━━━━━━━━━━━━━━━━━\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 Rela tại box: ${threadname}\n🔥 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "5": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`💙 Vui lòng chờ rela TNT đang tìm đối tượng cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/QsK43fY.jpg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
                 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💜==[ RELA TNT ]==💜\n━━━━━━━━━━━━━━━━━━━\n💖 Rela thành công\n💓 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💝 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗶̉ 𝗹𝗲̣̂̂ 𝗹𝗮̃𝗻𝗴 𝗺𝗮̣𝗻𝗴: ${tle}% \n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝘁𝗿𝘂𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵: ${tle1}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗯𝘂̛𝗼̛́𝗻𝗴 𝗯𝗶̉𝗻𝗵: ${tle2}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ đ𝗼̣̂𝗰 𝗹𝗮̣̂𝗽: ${tle3}%\n━━━━━━━━━━━━━━━━━━\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 Rela tại box: ${threadname}\n🔥 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
              case "6": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`🔵 Vui lòng chờ rela TNT đang tìm đối tượng cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/QsK43fY.jpg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
                 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💙==[ RELA TNT ]==💙\n━━━━━━━━━━━━━━━━━━\n❤ Rela thành công\n️💞 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💖 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗶̉ 𝗹𝗲̣̂̂ 𝗹𝗮̃𝗻𝗴 𝗺𝗮̣𝗻𝗴: ${tle}% \n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝘁𝗿𝘂𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵: ${tle1}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗯𝘂̛𝗼̛́𝗻𝗴 𝗯𝗶̉𝗻𝗵: ${tle2}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ đ𝗼̣̂𝗰 𝗹𝗮̣̂𝗽: ${tle3}%\n━━━━━━━━━━━━━━━━━━\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 Rela tại box: ${threadname}\n🔥 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
         case "7": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`🟢 Vui lòng chờ rela TNT đang chọn đối tượng cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/Of1E4ji.jpg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
            var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💜==[ RELA TNT ]==💜\n━━━━━━━━━━━━━━━━━━\n💖 Rela thành công\n💓 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💝 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗶̉ 𝗹𝗲̣̂̂ 𝗹𝗮̃𝗻𝗴 𝗺𝗮̣𝗻𝗴: ${tle}% \n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝘁𝗿𝘂𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵: ${tle1}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗯𝘂̛𝗼̛́𝗻𝗴 𝗯𝗶̉𝗻𝗵: ${tle2}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ đ𝗼̣̂𝗰 𝗹𝗮̣̂𝗽: ${tle3}%\n━━━━━━━━━━━━━━━━━━\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 Rela tại box: ${threadname}\n 🔥 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
        case "8": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`🟧 Vui lòng chờ rela TNT đang tìm đối tượng phù hợp cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/Of1E4ji.jpg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💙==[ RELA TNT ]==💙\n━━━━━━━━━━━━━━━━━\n❤ Rela thành công\n️💞 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💖 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗶̉ 𝗹𝗲̣̂̂ 𝗹𝗮̃𝗻𝗴 𝗺𝗮̣𝗻𝗴: ${tle}% \n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝘁𝗿𝘂𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵: ${tle1}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗯𝘂̛𝗼̛́𝗻𝗴 𝗯𝗶̉𝗻𝗵: ${tle2}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ đ𝗼̣̂𝗰 𝗹𝗮̣̂𝗽: ${tle3}%\n━━━━━━━━━━━━━━━━━━\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 Rela tại box: ${threadname}\n🔥 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "9": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`💙 Vui lòng chờ rela TNT đang tìm đối tượng cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/1PGyFVA.jpg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
                 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💜==[ RELA TNT ]==💜\n━━━━━━━━━━━━━━━━━━\n💖 𝗠𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 \n💓 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💝 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗶̉ 𝗹𝗲̣̂̂ 𝗹𝗮̃𝗻𝗴 𝗺𝗮̣𝗻𝗴: ${tle}% \n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝘁𝗿𝘂𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵: ${tle1}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗯𝘂̛𝗼̛́𝗻𝗴 𝗯𝗶̉𝗻𝗵: ${tle2}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ đ𝗼̣̂𝗰 𝗹𝗮̣̂𝗽: ${tle3}%\n━━━━━━━━━━━━━━━━━━\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 Rela tại box: ${threadname}\n🔥 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
              case "10": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`💝 Vui lòng chờ rela TNT đang tìm đối tượng cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/1PGyFVA.jpg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
                 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `🤍==[ RELA TNT ]==🤍\n━━━━━━━━━━━━━━━━━━\n❤ Rela thành công\n️💞 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💖 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗶̉ 𝗹𝗲̣̂̂ 𝗹𝗮̃𝗻𝗴 𝗺𝗮̣𝗻𝗴: ${tle}% \n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝘁𝗿𝘂𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵: ${tle1}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗯𝘂̛𝗼̛́𝗻𝗴 𝗯𝗶̉𝗻𝗵: ${tle2}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ đ𝗼̣̂𝗰 𝗹𝗮̣̂𝗽: ${tle3}%\n━━━━━━━━━━━━━━━━\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞  Rela tại box: ${threadname}\n🔥 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "11": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`🔵 Vui lòng chờ rela TNT đang tìm đối tượng cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/Hsh23Sw.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
                 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💜==[ RELA TNT ]==💜\n━━━━━━━━━━━━━━━━━━━\n💖 Rela thành công\n💓 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💝 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗶̉ 𝗹𝗲̣̂̂ 𝗹𝗮̃𝗻𝗴 𝗺𝗮̣𝗻𝗴: ${tle}% \n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝘁𝗿𝘂𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵: ${tle1}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗯𝘂̛𝗼̛́𝗻𝗴 𝗯𝗶̉𝗻𝗵: ${tle2}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ đ𝗼̣̂𝗰 𝗹𝗮̣̂𝗽: ${tle3}%\n━━━━━━━━━━━━━━━━━━\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 Rela tại box: ${threadname}\n🔥 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "12": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(`🌹 Vui lòng chờ rela TNT đang tìm đối tượng cho bạn...`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/Hsh23Sw.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
                 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💙==[ RELA TNT ]==💙\n━━━━━━━━━━━━━━━━━\n❤ Rela thành công\n️💞 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💖 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗶̉ 𝗹𝗲̣̂̂ 𝗹𝗮̃𝗻𝗴 𝗺𝗮̣𝗻𝗴: ${tle}% \n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝘁𝗿𝘂𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵: ${tle1}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗯𝘂̛𝗼̛́𝗻𝗴 𝗯𝗶̉𝗻𝗵: ${tle2}%\n 𝗧𝗶̉ 𝗹𝗲̣̂ đ𝗼̣̂𝗰 𝗹𝗮̣̂𝗽: ${tle3}%\n━━━━━━━━━━━━━━━━━\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 Rela 𝘁𝗮̣𝗶 𝗯𝗼𝘅: ${threadname}\n🔥 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
        }
      }
    }
                }