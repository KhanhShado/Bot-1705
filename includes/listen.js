module.exports = function ({ api, models }) {
  setInterval(function () {
		if(global.config.NOTIFICATION) {			require("./handle/handleNotification.js")({ api });
		}
	}, 1000*60);
    const fs = require("fs");
	  const Users = require("./controllers/users")({ models, api }),
				Threads = require("./controllers/threads")({ models, api }),
				Currencies = require("./controllers/currencies")({ models });
	const logger = require("../utils/log.js");
	const moment = require('moment-timezone');
  const config = require('./../config.json');
	const axios = require("axios");
  var day = moment.tz("Asia/Ho_Chi_Minh").day();
    const checkttDataPath = __dirname + '/../modules/commands/checktt1/';
    var gio = moment.tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY || HH:mm:ss');

  setInterval(async() => {
    const day_now = moment.tz("Asia/Ho_Chi_Minh").day();
    if (day != day_now) {
      day = day_now;
      const checkttData = fs.readdirSync(checkttDataPath);
      console.log('--> CHECKTT: Ngày Mới');
      checkttData.forEach(async(checkttFile) => {
        const checktt = JSON.parse(fs.readFileSync(checkttDataPath + checkttFile));
        let storage = [], count = 1;
        for (const item of checktt.day) {
            const userName = await Users.getNameUser(item.id) || 'Facebook User';
            const itemToPush = item;
            itemToPush.name = userName;
            storage.push(itemToPush);
        };
        storage.sort((a, b) => {
            if (a.count > b.count) {
                return -1;
            }
            else if (a.count < b.count) {
                return 1;
            } else {
                return a.name.localeCompare(b.name);
            }
        });
  const time = process.uptime(),
		anh = Math.floor(time / (60 * 60)),
		la = Math.floor((time % (60 * 60)) / 60),
		mdonq = Math.floor(time % 60);
  const res = await axios.get(`https://apivip.nvt20011.repl.co/thinh`);
var thinh = res.data.url;
          const res1 = await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`);
    const res2 = await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`);
    const res3 = await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`);
    const res4 = await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`);
    const res5 = await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`);
    const res6 = await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`);
var data1 = res1.data.url;
var array = [];
var data2 = res2.data.url;
var data3 = res3.data.url;
var data4 = res4.data.url;
var data5 = res5.data.url;
var data6 = res6.data.url;
var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
var downloadfile3 = (await axios.get(data3, {responseType: 'stream'})).data;
var downloadfile4 = (await axios.get(data4, {responseType: 'stream'})).data;
var downloadfile5 = (await axios.get(data5, {responseType: 'stream'})).data;
var downloadfile6 = (await axios.get(data6, {responseType: 'stream'})).data;
    array.push(downloadfile1);
    array.push(downloadfile2);    
    array.push(downloadfile3);
    array.push(downloadfile4);
    array.push(downloadfile5);    
    array.push(downloadfile6);
        var haha = `\n━━━━━━━━━━━━━━━━━━━\n『💬』 𝗧𝗼̂̉𝗻𝗴 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${storage.reduce((a, b) => a + b.count, 0)}\n『🍒』𝗧𝗵𝗶́𝗻𝗵: ${thinh}\n『⏳』𝗕𝗼𝘁 𝗢𝗻𝗹𝗶𝗻𝗲: ${anh} 𝐠𝐢𝐨̛̀ ${la} 𝐩𝐡𝐮́𝐭 ${mdonq} 𝐠𝐢𝐚̂𝐲\n『🐧』 𝗖𝗮́𝗰 𝗯𝗮̣𝗻 𝗸𝗵𝗮́𝗰 𝗰𝗼̂́ 𝗴𝗮̆́𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗹𝗲̂𝗻 𝘁𝗼𝗽 𝗻𝗵𝗮💕\n━━━━━━━━━━━━━━━━━━━\n⏰️=『${gio}』=⏰️`;
        var checkttBody = '▭▭[ 𝗧𝗼𝗽 𝗧𝘂̛𝗼̛𝗻𝗴 𝗧𝗮́𝗰 𝗡𝗴𝗮̀𝘆 ]▭▭\n━━━━━━━━━━━━━━━━━━━\n𝗧𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝘃𝗮̀𝗼 𝗹𝘂́𝗰 𝟬:𝟬𝟬:𝟬𝟬 𝗔𝗠 𝗵𝗮̆̀𝗻𝗴 𝗻𝗴𝗮̀𝘆\n━━━━━━━━━━━━━━━━━━━\n\n';
            checkttBody += storage.slice(0, 10).map(item => {
      return `${count++}.『 𝐍𝐚𝐦𝐞 』 ➤ ${item.name}\n『 𝐓𝐮̛𝐨̛𝐧𝐠 𝐓𝐚́𝐜 』 ➢ ${item.count} 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧\n----------`;
                    }).join('\n');        api.sendMessage({body: checkttBody + haha, attachment: array/*(await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"](`${global.config.configApi.domain}/api/vdgai`)).data.data,
method: "GET",
responseType: "stream"
})).data*/
 }, checkttFile.replace('.json', ''), (err) => err ? console.log(err) : ''); 
        checktt.day.forEach(e => {
            e.count = 0;
        });
        checktt.time = day_now;
 
        fs.writeFileSync(checkttDataPath + checkttFile, JSON.stringify(checktt, null, 4));
      });
      if (day_now == 1) {
        console.log('--> CHECKTT: Tuần Mới');
        checkttData.forEach(async(checkttFile) => {
          const checktt = JSON.parse(fs.readFileSync(checkttDataPath + checkttFile));
          let storage = [], count = 1;
          for (const item of checktt.week) {
              const userName = await Users.getNameUser(item.id) || 'Facebook User';
              const itemToPush = item;
              itemToPush.name = userName;
              storage.push(itemToPush);
          };
          storage.sort((a, b) => {
              if (a.count > b.count) {
                  return -1;
              }
              else if (a.count < b.count) {
                  return 1;
              } else {
                  return a.name.localeCompare(b.name);
              }
          });
          let checkttBody = '▭[ 𝗧𝗢𝗣 𝗧𝗨̛𝗢̛𝗡𝗚 𝗧𝗔́𝗖 𝗧𝗨𝗔̂̀𝗡 ]▭\n\n━━━━━━━━━━━━━━━━━\n';
          checkttBody += storage.slice(0, 15).map(item => {
            return `${count++}.『 𝐍𝐚𝐦𝐞 』 ➤ ${item.name}\n『 𝐓𝐮̛𝐨̛𝐧𝐠 𝐓𝐚́𝐜 』 ➢ ${item.count} 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧\n----------`;
        }).join('\n');
          api.sendMessage(checkttBody, checkttFile.replace('.json', ''), (err) => err ? console.log(err) : '');
          checktt.week.forEach(e => {
              e.count = 0;
          });
 
          fs.writeFileSync(checkttDataPath + checkttFile, JSON.stringify(checktt, null, 4));
        })
      }
      global.client.sending_top = false;
    }
  }, 1000 * 10);
     /////////////////////////
    //========= Push all variable from database to environment =========//
    //////////////////////////////////////////////////////////////////////

    (async function () {

        try {
            logger(global.getText('listen', 'startLoadEnvironment'), '[ LOADING-DATABASE ]');
            let threads = await Threads.getAll(),
                users = await Users.getAll(['userID', 'name', 'data']),
                currencies = await Currencies.getAll(['userID']);
            for (const data of threads) {
                const idThread = String(data.threadID);
                global.data.allThreadID.push(idThread),
                    global.data.threadData.set(idThread, data['data'] || {}),
                    global.data.threadInfo.set(idThread, data.threadInfo || {});
                if (data['data'] && data['data']['banned'] == !![])
                    global.data.threadBanned.set(idThread,
                        {
                            'reason': data['data']['reason'] || '',
                            'dateAdded': data['data']['dateAdded'] || ''
                        });
                if (data['data'] && data['data']['commandBanned'] && data['data']['commandBanned']['length'] != 0)
                    global['data']['commandBanned']['set'](idThread, data['data']['commandBanned']);
                if (data['data'] && data['data']['NSFW']) global['data']['threadAllowNSFW']['push'](idThread);
            }
            logger.loader(global.getText('listen', 'loadedEnvironmentThread'));
            for (const dataU of users) {
                const idUsers = String(dataU['userID']);
                global.data['allUserID']['push'](idUsers);
                if (dataU.name && dataU.name['length'] != 0) global.data.userName['set'](idUsers, dataU.name);
                if (dataU.data && dataU.data.banned == 1) global.data['userBanned']['set'](idUsers, {
                    'reason': dataU['data']['reason'] || '',
                    'dateAdded': dataU['data']['dateAdded'] || ''
                });
                if (dataU['data'] && dataU.data['commandBanned'] && dataU['data']['commandBanned']['length'] != 0)
                    global['data']['commandBanned']['set'](idUsers, dataU['data']['commandBanned']);
            }
            for (const dataC of currencies) global.data.allCurrenciesID.push(String(dataC['userID']));
            logger.loader(global.getText('listen', 'loadedEnvironmentUser')), logger(global.getText('listen', 'successLoadEnvironment'), '[ Dữ liệu ]');
        } catch (error) {
            return logger.loader(global.getText('listen', 'failLoadEnvironment', error), 'error');
        }
    }());
    const admin = config.ADMINBOT; 
    logger("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓", "[ DONGDEV ]");
      for(let i = 0; i <= admin.length -1; i++){
        dem = i + 1
        logger(` ID ADMIN ${dem}: ${(!admin[i]) ? "Trống" : admin[i]}`, "[ DONGDEV ]");
      }
      logger(` ID BOT: ${api.getCurrentUserID()}`, "[ DONGDEV ]");
      logger(` PREFIX: ${global.config.PREFIX}`, "[ DONGDEV ]");
      logger(` NAME BOT: ${(!global.config.BOTNAME) ? "Mirai DongDev" : global.config.BOTNAME}`, "[ DONGDEV ]");
      logger("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛", "[ DONGDEV ]");
    ///////////////////////////////////////////////
    //========= Require all handle need =========//
    //////////////////////////////////////////////

    const handleCommand = require("./handle/handleCommand")({ api, models, Users, Threads, Currencies });
    const handleCommandEvent = require("./handle/handleCommandEvent")({ api, models, Users, Threads, Currencies });
    const handleReply = require("./handle/handleReply")({ api, models, Users, Threads, Currencies });
    const handleReaction = require("./handle/handleReaction")({ api, models, Users, Threads, Currencies });
  const handleRefresh = require("./handle/handleRefresh")({  api, Threads, Users, Currencies, models });
    const handleEvent = require("./handle/handleEvent")({ api, models, Users, Threads, Currencies });
    const handleCreateDatabase = require("./handle/handleCreateDatabase")({ api, Threads, Users, Currencies, models });
  const handleUnsend = require("./handle/handleUnsend")({ api });

    //DEFINE DATLICH PATH
    const datlichPath = __dirname + "/../modules/commands/cache/datlich.json";

    //FUNCTION HOẠT ĐỘNG NHƯ CÁI TÊN CỦA NÓ, CRE: DUNGUWU
    const monthToMSObj = {
        1: 31 * 24 * 60 * 60 * 1000,
        2: 28 * 24 * 60 * 60 * 1000,
        3: 31 * 24 * 60 * 60 * 1000,
        4: 30 * 24 * 60 * 60 * 1000,
        5: 31 * 24 * 60 * 60 * 1000,
        6: 30 * 24 * 60 * 60 * 1000,
        7: 31 * 24 * 60 * 60 * 1000,
        8: 31 * 24 * 60 * 60 * 1000,
        9: 30 * 24 * 60 * 60 * 1000,
        10: 31 * 24 * 60 * 60 * 1000,
        11: 30 * 24 * 60 * 60 * 1000,
        12: 31 * 24 * 60 * 60 * 1000
    };
    const checkTime = (time) => new Promise((resolve) => {
        time.forEach((e, i) => time[i] = parseInt(String(e).trim()));
        const getDayFromMonth = (month) => (month == 0) ? 0 : (month == 2) ? (time[2] % 4 == 0) ? 29 : 28 : ([1, 3, 5, 7, 8, 10, 12].includes(month)) ? 31 : 30;
        if (time[1] > 12 || time[1] < 1) resolve("Tháng của bạn có vẻ không hợp lệ");
        if (time[0] > getDayFromMonth(time[1]) || time[0] < 1) resolve("Ngày của bạn có vẻ không hợp lệ");
        if (time[2] < 2022) resolve("Bạn sống ở kỷ nguyên nào thế");
        if (time[3] > 23 || time[3] < 0) resolve("Giờ của bạn có vẻ không hợp lệ");
        if (time[4] > 59 || time[3] < 0) resolve("Phút của bạn có vẻ không hợp lệ");
        if (time[5] > 59 || time[3] < 0) resolve("Giây của bạn có vẻ không hợp lệ");
        yr = time[2] - 1970;
        yearToMS = (yr) * 365 * 24 * 60 * 60 * 1000;
        yearToMS += ((yr - 2) / 4).toFixed(0) * 24 * 60 * 60 * 1000;
        monthToMS = 0;
        for (let i = 1; i < time[1]; i++) monthToMS += monthToMSObj[i];
        if (time[2] % 4 == 0) monthToMS += 24 * 60 * 60 * 1000;
        dayToMS = time[0] * 24 * 60 * 60 * 1000;
        hourToMS = time[3] * 60 * 60 * 1000;
        minuteToMS = time[4] * 60 * 1000;
        secondToMS = time[5] * 1000;
        oneDayToMS = 24 * 60 * 60 * 1000;
        timeMs = yearToMS + monthToMS + dayToMS + hourToMS + minuteToMS + secondToMS - oneDayToMS;
        resolve(timeMs);
    });


    const tenMinutes = 10 * 60 * 1000;

    const checkAndExecuteEvent = async () => {

        /*smol check*/
        if (!fs.existsSync(datlichPath)) fs.writeFileSync(datlichPath, JSON.stringify({}, null, 4));
        var data = JSON.parse(fs.readFileSync(datlichPath));

        //GET CURRENT TIME
        var timeVN = moment().tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY_HH:mm:ss');
        timeVN = timeVN.split("_");
        timeVN = [...timeVN[0].split("/"), ...timeVN[1].split(":")];

        let temp = [];
        let vnMS = await checkTime(timeVN);
        const compareTime = e => new Promise(async (resolve) => {
            let getTimeMS = await checkTime(e.split("_"));
            if (getTimeMS < vnMS) {
                if (vnMS - getTimeMS < tenMinutes) {
                    data[boxID][e]["TID"] = boxID;
                    temp.push(data[boxID][e]); delete data[boxID][e];
                } else delete data[boxID][e];
                fs.writeFileSync(datlichPath, JSON.stringify(data, null, 4));
            };
            resolve();
        })

        await new Promise(async (resolve) => {
            for (boxID in data) {
                for (e of Object.keys(data[boxID])) await compareTime(e);
            }
            resolve();
        })
        for (el of temp) {
            try {
                var all = (await Threads.getInfo(el["TID"])).participantIDs;
                all.splice(all.indexOf(api.getCurrentUserID()), 1);
                var body = el.REASON || "🥰🥰🥰", mentions = [], index = 0;

                for (let i = 0; i < all.length; i++) {
                    if (i == body.length) body += " ‍ ";
                    mentions.push({
                        tag: body[i],
                        id: all[i],
                        fromIndex: i - 1
                    });
                }
            } catch (e) { return console.log(e); }
            var out = {
                body, mentions
            }
            if ("ATTACHMENT" in el) {
                out.attachment = [];
                for (a of el.ATTACHMENT) {
                    let getAttachment = (await axios.get(encodeURI(a.url), { responseType: "arraybuffer" })).data;
                    fs.writeFileSync(__dirname + `/../modules/commands/cache/${a.fileName}`, Buffer.from(getAttachment, 'utf-8'));
                    out.attachment.push(fs.createReadStream(__dirname + `/../modules/commands/cache/${a.fileName}`));
                }
            }
            console.log(out);
            if ("BOX" in el) await api.setTitle(el["BOX"], el["TID"]);
            api.sendMessage(out, el["TID"], () => ("ATTACHMENT" in el) ? el.ATTACHMENT.forEach(a => fs.unlinkSync(__dirname + `/../modules/commands/cache/${a.fileName}`)) : "");
        }

    }
    setInterval(checkAndExecuteEvent, tenMinutes / 10);
    //////////////////////////////////////////////////
    //========= Send event to handle need =========//
    /////////////////////////////////////////////////
return async (event) => {
        if (event.type == "change_thread_image") api.sendMessage( `🌸 ==== [ 𝐂𝐀̣̂𝐏 𝐍𝐇𝐀̣̂𝐓 𝐍𝐇𝐎́𝐌 ] ==== 🌸\n━━━━━━━━━[ 𝗞𝗶𝘇𝘇😻𝗞𝗶𝗻𝗻 ]━━━━━━━\n[🌟] → ${event.snippet}\n[⏳] → 𝗩𝗮̀𝗼 𝗹𝘂́𝗰 : ${tan} || ${thu}`, event.threadID, event.messageID);      
  let data = JSON.parse(fs.readFileSync(__dirname + "/../modules/commands/cache/approvedThreads.json"));
    let chuaduyet = __dirname + "/cache/chuaduyet.json";
    let threadInfo = await api.getThreadInfo(event.threadID);
        let threadName = threadInfo.threadName ? `${threadInfo.threadName}` : `${await Users.getNameUser(event.threadID)}`;
    var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY'); 
    const timeStart = Date.now();
    const { commands } = global.client; 
    let threadMem = threadInfo.participantIDs.length;
    const name = await Users.getNameUser(event.senderID)
    let uid = event.senderID;
	  let adminBot = global.config.ADMINBOT;
	  let ndhBot = global.config.NDH;
	  let pendingPath = __dirname + "/../modules/commands/cache/pendingdThreads.json";
	  if (!data.includes(event.threadID) && !adminBot.includes(event.senderID) &&!ndhBot.includes(event.senderID)) {
		
		//getPrefix
		  const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
        
		  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
      //check body
		if (event.body && event.body == `dongdev`) {
		  adminBot.forEach(e => {
			api.sendMessage(`🐧 ==== [ 𝗬𝗘̂𝗨 𝗖𝗔̂̀𝗨 𝗗𝗨𝗬𝗘̣̂𝗧 ] ==== 🐧
━━━━━━━━━━━━━━━━
[👤] → 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗚𝘂̛̉𝗶 : ${name}
[🌐] → 𝗟𝗶𝗻𝗸 𝗽𝗿𝗼𝗳𝗶𝗹𝗲: https://www.facebook.com/profile.php?id=${uid}
[👨‍👩‍👧‍👦] → 𝗡𝗵𝗼́𝗺: ${threadName}
━━━━━━━━━━━━━━━━
[🔰] → 𝗧𝗶𝗱 : ${event.threadID}
[🍉] → 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 : ${threadMem}
[⏰] → 𝗧𝗶𝗺𝗲 : ${time}
━━━━━━━━━━━━━━━━
[⚜️] → Đ𝗮̃ 𝗴𝘂̛̉𝗶 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 đ𝘂̛𝗼̛̣𝗰 𝗱𝘂𝘆𝗲̣̂𝘁 𝗯𝗼𝘅 đ𝗲̂́𝗻 𝗯𝗮̣𝗻`, e);
		  })
		   api.sendMessage(`🍇 ==== [ 𝗚𝘂̛̉𝗶 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂  ] ==== 🍇
━━━━━━━━━━━━━━━━
[🍠] → 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗗𝘂̀𝗻𝗴 : ${name}
[🌐] → 𝗟𝗶𝗻𝗸 𝗽𝗿𝗼𝗳𝗶𝗹𝗲 : https://www.facebook.com/profile.php?id=${uid}
[🔰] → 𝗜𝗗 𝗻𝗵𝗼́𝗺 : ${event.threadID}
[⚜️] → Đ𝗮̃ 𝗴𝘂̛̉𝗶 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 đ𝗲̂́𝗻 : ${global.config.ADMINBOT.length} 𝗮𝗱𝗺𝗶𝗻
━━━━━━━━━━━━━━━━
[🍉] → 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 : ${threadMem}
[🥞] → 𝗟𝘂̛𝘂 𝘆́ 𝗻𝗵𝗼́𝗺 𝗱𝘂̛𝗼̛́𝗶 𝟭𝟬 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘀𝗲̃ 𝗸𝗵𝗼̂𝗻𝗴 𝗱𝘂𝘆𝗲̣̂𝘁
[⏰] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : ${time}
━━━━━━━━━━━━━━━━
[💓] → 𝗰𝗼̀𝗻 đ𝘂̛𝗼̛̣𝗰 𝗱𝘂𝘆𝗲̣̂𝘁 𝗵𝗮𝘆 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗶̀ 𝗰𝗵𝗶̣𝘂`, event.threadID, () => {
			let pendingData = JSON.parse(fs.readFileSync(pendingPath));
			if (!pendingData.includes(event.threadID)) {
			  pendingData.push(event.threadID);
			fs.writeFileSync(pendingPath, JSON.stringify(pendingData));
			}
		  });
		}
      // if (event.threadID == 7349457131746039) console.log(prefix);
		if (event.body && event.body.startsWith(prefix)) return api.sendMessage( `❤▭▭▭▭ [ 𝗧𝗛𝗨𝗘̂ 𝗕𝗢𝗧 ] ▭▭▭▭❤
[🔰] 𝗧𝗶𝗱: ${event.threadID}
[👤] 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻: ${threadMem}
[🔰] 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: ${name}
━━━━━━━━━━━━━━━━━━━━
[💖] 𝗧𝗲̂𝗻 𝗕𝗼𝘁 : ${global.config.BOTNAME}
[🍒] 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́ : ${Date.now() - timeStart} 𝗴𝗶𝗮̂𝘆
[🔗] 𝗧𝗼̂̉𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 : ${commands.size}
[🏘] 𝗡𝗵𝗼́𝗺 : ${threadName}
[🌐] 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: 𝗡𝗵𝗼́𝗺 𝗯𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 đ𝘂̛𝗼̛̣𝗰 𝗮𝗱𝗺𝗶𝗻 𝗰𝗵𝗼 𝘁𝗵𝘂𝗲𝗯𝗼𝘁 , đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝘁𝗵𝘂𝗲𝗯𝗼𝘁 , 𝗱𝘂̀𝗻𝗴: dongdev 🌸
⏰️=『${time}』=⏰️`, event.threadID, event.messageID); 
		
	  };
        switch (event.type) {
            case "message":
            case "message_reply":
            case "message_unsend":
                handleCreateDatabase({ event });
                handleCommand({ event });
                handleReply({ event });
                handleCommandEvent({ event });

                break;
            case "change_thread_image":
            case "event": 
                handleEvent({ event });
                handleRefresh({ event });
                break;
            case "message_reaction":
        handleUnsend({ event });
		  handleReaction({ event });
        var { iconUnsend } = global.config
				if(iconUnsend.status && event.senderID == api.getCurrentUserID() && event.reaction == iconUnsend.icon) {
					api.unsendMessage(event.messageID)
				}
                handleReaction({ event });
                break;
            default:
                break;
        }
    };
};