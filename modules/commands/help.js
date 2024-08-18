module.exports.config = {
    name: "help",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "DC-Nam & mod by MDong",
    description: "Xem danh sách lệnh và info",
    commandCategory: "Tiện ích",
    usages: "[tên lệnh/all]",
    cooldowns: 5
};
module.exports.languages = {
    "vi": {},
    "en": {}
}
module.exports.run = async function({
    api,
    event,
    args,
  Currencies,
  __GLOBAL,
    Users
}) {
const { events } = global.client;
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
const axios = require("axios");
const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
      var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const ten = await Users.getNameUser(event.senderID)
let uid = event.senderID;
  const { commands } = global.client;
    const {
        threadID: tid,
        messageID: mid,
        senderID: sid
    } = event
    var type = !args[0] ? "" : args[0].toLowerCase()
    var msg = "",
        array = [],
        i = 1
    const cmds = global.client.commands
    const TIDdata = global.data.threadData.get(tid) || {}
    var prefix = TIDdata.PREFIX || global.config.PREFIX
  const namebot = config.BOTNAME;
    if (type == "all") {
        for (const cmd of cmds.values()) {
          msgg = `==『 𝗛𝗘𝗟𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 』==\n`
            msg += `${++i}. ${cmd.config.name}: ${cmd.config.description}\n`
        }
        return api.sendMessage({body: msgg + msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"](`https://obito.tiennguyen166.repl.co/images/loli`)).data.url,
method: "GET",
responseType: "stream"
})).data}, tid, mid)
    }
    if (type == "all") return
    if (type) {
        for (const cmd of cmds.values()) {
            array.push(cmd.config.name.toString())
        }
        if (!array.find(n => n == args[0].toLowerCase())) {
            const stringSimilarity = require('string-similarity')
            commandName = args.shift().toLowerCase() || ""
            var allCommandName = [];
            const commandValues = cmds['keys']()
           let i = 1;
            for (const cmd of commandValues) allCommandName.push(cmd)
            const checker = stringSimilarity.findBestMatch(commandName, allCommandName)
            if (checker.bestMatch.rating >= 0.5) command = client.commands.get(checker.bestMatch.target)
            msg = `Không tìm thấy lệnh '${type}' trong hệ thống.\n➝ Lệnh gần giống được tìm thấy '${checker.bestMatch.target}'`
            api.sendMessage(msg, tid, mid)
        }
        const cmd = cmds.get(type).config
        msg = `┏━━━━━━━━━━━━━━━━━━━┓\n┣➤ 𝗧𝗲̂𝗻 𝗹𝗲̣̂𝗻𝗵: ${cmd.name}\n┣➤ 𝗣𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻: ${cmd.version}\n┣➤ Quyền hạn: ${TextPr(cmd.hasPermssion)}\n┣➤ 𝗧𝗮́𝗰 𝗴𝗶𝗮̉: ${cmd.credits}\n┣➤ 𝗠𝗼̂ 𝘁𝗮̉: ${cmd.description}\n┣➤ 𝗧𝗵𝘂𝗼̣̂𝗰 𝗻𝗵𝗼́𝗺: ${cmd.commandCategory}\n┣➤ 𝗖𝗮́𝗰𝗵 𝗱𝘂̀𝗻𝗴: ${cmd.usages}\n┣➤ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗵𝗼̛̀: ${cmd.cooldowns}s\n┣➤ 𝗵𝗲𝗹𝗽 + 𝗮𝗹𝗹 để xem tất cả lệnh\n┗━━━━━━━━━━━━━━━━━━━┛`
        api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"](`https://apivip.nvt20011.repl.co/image/loli`)).data.url,
method: "GET",
responseType: "stream"
})).data}, tid, mid)
    } else {
        CmdCategory()
        array.sort(S("nameModule"))
        for (const cmd of array) {
          msg1 = `▭▭ [ 𝗛𝗘𝗟𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ] ▭▭\n━━━━━━━━━━━━━━━━━━\n`
            msg += `${i++}. 𝗧𝗵𝘂𝗼̣̂𝗰 𝗻𝗵𝗼́𝗺: ${cmd.cmdCategory.toUpperCase()}\n〖📝〗→⁠ 𝗧𝗼̂̉𝗻𝗴 𝗰𝗼́ ${cmd.nameModule.length} 𝗹𝗲̣̂𝗻𝗵\n「 ${cmd.nameModule} 」\n━━━━━━━━━━━━━━━━━━\n`
        }
var image = [], stt = ["2","3","4","5","6"], srd = stt[Math.floor(Math.random() * stt.length)]
for (i=0; i<srd; i++){
var stream = (await axios.get((await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`)).data.url,  {
                    responseType: 'stream'
                })).data
image.push(stream)
  }
        msg += `\n\n┏━━━━━━━━━━━━━━━━━━━┓\n┣➤ Người dùng lệnh: ${ten}\n┣➤ Tên bot: ${global.config.BOTNAME}\n┣➤ Phiên bản: ${global.config.version}\n┣➤ Tổng số admin bot: ${global.config.ADMINBOT.length}\n┣➤ Tổng số lệnh: ${commands.size}\n┣➤ Tổng lệnh sự kiện: ${events.size}\n┣➤ Hôm nay là: ${thu}\n┣➤ Time: ${timeNow}\n┣➤ Admin: Nguyễn Tấn Tiến\n┣➤ Link: https://www.facebook.com/tony.derby.773\n┣➤ ${prefix}help + tên lệnh để xem chi tiết\n┣➤ ${prefix}help + all để xem tất cả lệnh\n┗━━━━━━━━━━━━━━━━━━━┛`
        api.sendMessage({body: msg1 + msg, attachment: image }, event.threadID ,event.messageID);
    }

    function CmdCategory() {
        for (const cmd of cmds.values()) {
            const {
                commandCategory,
                hasPermssion,
                name: nameModule
            } = cmd.config
            if (!array.find(i => i.cmdCategory == commandCategory)) {
                array.push({
                    cmdCategory: commandCategory,
                    permission: hasPermssion,
                    nameModule: [nameModule]
                })
            } else {
                const find = array.find(i => i.cmdCategory == commandCategory)
                find.nameModule.push(nameModule)
            }
        }
    }
}

function S(k) {
    return function(a, b) {
        let i = 0;
        if (a[k].length > b[k].length) {
            i = 1
        } else if (a[k].length < b[k].length) {
            i = -1
        }
        return i * -1
    }
}

function TextPr(permission) {
    p = permission
    return p == 0 ? "Thành Viên" : p == 1 ? "Qtv Box" : p = 2 ? "Admin Bot" : "Người điều hành"
      }