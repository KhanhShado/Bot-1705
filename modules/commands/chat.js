module.exports.config = {
  name: "chat",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "mindat",
  description: "Chat ẩn danh qua bot",
  commandCategory: "Room Chat",
  usages: "[random/id/check]",
  cooldowns: 0
}

const fs = require('fs-extra');
const axios = require('axios');
const rcp = require('path').resolve(__dirname, 'cache', 'rcp.json');
module.exports.onLoad = function () {
  if (!fs.existsSync(rcp)) fs.writeFileSync(rcp, '[]');
}

module.exports.run = async function ({ api, event, Users, args }) {
  const { messageID, threadID, isGroup } = event;
  const o = (m, c = () => { }, id = threadID) => api.sendMessage(m, id, c, messageID);
  const s = api.sendMessage;
  if (isGroup) return o("Chỉ có thể sử dụng được lệnh trong tin nhắn riêng.");
  var rc = {};
  rc.root = threadID;
  rc.head = null;
  rc.isWaiting = false;
  rc.isStarted = false;
  rc.isError = false;
  rc.rootIsIncognito = true;
  rc.headIsIncognito = true;
  rc.isRandom = false;

  switch (args[0]) {
    case 'random':
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) return o("Bạn đang chờ kết nối với 1 người khác. Không thể thực hiện yêu cầu này.");
      rc.isRandom = true;
      o("Bạn đã chọn chế độ tìm kiếm ngẫu nhiên.\nBạn có muốn ẩn giấu thân phận?\n\nReply với số 0 để ẩn, 1 để hiện", (_, i) => global.client.handleReply.push({ type: 'incognitoRootRandomHead', name: this.config.name, author: threadID, messageID: i.messageID, data: rc }));
      break;
    case 'tuchoi':
      var data = require(rcp);
      if (data.some(e => e.head == threadID && e.isWaiting)) {
        let rj = data.findIndex(e => e.head == threadID);
        o("Bạn đã từ chối kết nối với người liên hệ.", () => {
          s("Người liên hệ đã từ chối kết nối.", data[rj].root);
          data.splice(rj, 1);
          fs.writeFileSync(rcp, JSON.stringify(data, null, 4));
        });
      } else o("Không có người liên hệ nào đang chờ kết nối của bạn.");
      break;
    case 'chapnhan':
      var data = require(rcp);
      if (data.some(e => e.head == threadID && e.isWaiting)) {
        let ac = data.find(e => e.head == threadID && e.isWaiting);
        o("Bạn đã chấp nhận kết nối với người liên hệ.\nBạn có muốn ẩn giấu thân phận?\n\nReply với số 0 để ẩn, 1 để hiện", (_, i) => global.client.handleReply.push({ type: 'incognitoHead', name: this.config.name, author: threadID, messageID: i.messageID, data: ac }))
      }
      break;
    case 'end':
    case 'leave':
    case '-l':
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) {
        var end = data.findIndex(e => (e.root == threadID || e.head == threadID));
        var endData = data[end];
        var enderId = endData.root == threadID ? endData.root : endData.head;
        var remain = endData.root == threadID ? endData.head : endData.root;
        var enderIncognito = endData.root == threadID ? endData.rootIsIncognito : endData.headIsIncognito;
        o("Bạn đã kết thúc cuộc trò chuyện.", async (er) => {
          var enderName = await Users.getNameUser(enderId);
          var msg = enderIncognito == false ? `${enderName} đã rời khỏi cuộc trò chuyện.` : "Người liên hệ đã rời khỏi cuộc trò chuyện.";
          return s(msg, remain);
        });
        data.splice(end, 1);
        fs.writeFileSync(rcp, JSON.stringify(data, null, 4));
      } else o("Không có cuộc trò chuyện nào đang diễn ra.");
      break;
    case "data":
      var data = require(rcp);
      console.log(JSON.stringify(data));
      break;
    case "check":
    case "info":
    case "-i":
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) {
        var rcData = data.find(e => (e.root == threadID || e.head == threadID));
        var incognito = rcData.root == threadID ? rcData.headIsIncognito : rcData.rootIsIncognito;
        var msg = 'Information of RC:';
        msg += '\n\n- Your ID: ' + threadID;
        if (incognito == true) msg += '\n- Other: ID is hidden';
        else {
          var name = await Users.getNameUser((rcData.head == threadID ? rcData.root : rcData.head));
          msg += '\n- Other: ' + (rcData.head == threadID ? rcData.root : rcData.head) + ' - ' + name;
        }
        msg += '\n- Status: ' + (rcData.isWaiting ? 'Waiting for accept.' : rcData.isStarted ? 'Be chatting.' : '???');
        return o(msg);
      } else o("Không có cuộc trò chuyện nào đang diễn ra.");
    default:
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) return o("Bạn đang có 1 kết nối khác nên không thể thực hiện yêu cầu này.");
      if (!args[0] || isNaN(args[0])) return o("Vui lòng nhập ID người bạn muốn kết nối trò chuyện.");
      rc.head = args[0];
      if (data.some(e => (e.root == rc.head || e.head == rc.head))) return o('Người bạn muốn kết nối đang trong 1 kết nối khác, vui lòng thử lại sau.')
      o(`Bạn đã yêu cầu ${args[0]} kết nối trò chuyện.\nBạn có muốn ẩn giấu thân phận?\n\nReply với số 0 để ẩn, 1 để hiện`, (_, i) => global.client.handleReply.push({ type: 'incognitoRoot', name: this.config.name, author: threadID, messageID: i.messageID, data: rc }));
      break;
  }
}

module.exports.handleReply = async function ({ handleReply, api, event, Users }) {
  const { threadID, messageID, body } = event;
  const o = (m, c = () => { }, id = threadID) => api.sendMessage(m, id, c, messageID);
  const s = api.sendMessage;
  switch (handleReply.type) {
    case 'incognitoRootRandomHead':
      var rcData = require(rcp);
      var rc = handleReply.data;
      var headID;
      if (body == 0) {
        rc.rootIsIncognito = true;
        o("Bạn đã chọn ẩn giấu thân phận.");
      } else if (body == 1) {
        rc.rootIsIncognito = false;
        o("Bạn đã chọn hiện thân phận.");
      }
      const userID = global.data.allUserID;
      headID = userID[Math.floor(Math.random() * userID.length)];
      var rootName = await Users.getNameUser(rc.root);
      var fbUrl = 'https://facebook.com/' + rc.root;
      s((rc.rootIsIncognito ? "🕊=== [ 𝗕𝗼̂̀ 𝗖𝐚̂𝘂 Đ𝘂̛𝗮 𝗧𝗵𝘂̛ ] ===🕊\n━━━━━━━━━━━━━━━━━━\n💓𝗖𝗼́ 𝟭 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗮̂̉𝗻 𝗱𝗮𝗻𝗵 𝗺𝘂𝗼̂́𝗻 𝘁𝗿𝗼̀ 𝗰𝗵𝘂𝘆𝗲̣̂𝗻 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻" : `🕊=== [ 𝗕𝗼̂̀ 𝗖𝐚̂𝘂 Đ𝘂̛𝗮 𝗧𝗵𝘂̛ ] ===🕊\n━━━━━━━━━━━━━━━━━━\n👤𝗠𝗼̣̂𝘁 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗲̂𝗻 ${rootName} - ${fbUrl} 𝗺𝘂𝗼̂́𝗻 𝘁𝗿𝗼̀ 𝗰𝗵𝘂𝘆𝗲̣̂𝗻 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻.`) + `\n❤️‍🩹𝗡𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝘂̛̀ 𝗰𝗵𝗼̂́𝗶 𝗵𝗮̃𝘆 𝗻𝗵𝗮̣̂𝗽 𝗹𝗲̣̂𝗻𝗵: ${global.config.PREFIX}chatandanh tuchoi\n💞𝗡𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗰𝗵𝗮̂́𝗽 𝗻𝗵𝗮̣̂𝗻 𝗵𝗮̃𝘆 𝗻𝗵𝗮̣̂𝗽 𝗹𝗲̣̂𝗻𝗵:: ${global.config.PREFIX}chatandanh chapnhan`, headID, (er, i) => {
        if (er) o("Đã có lỗi xảy ra khi cố kết nối với người liên hệ.\nVui lòng thử lại sau.");
        else {
          o("Tìm kiếm thành công!\nĐang chờ lệnh kết nối từ phía bên kia!");
          rc.isWaiting = true;
          rc.head = headID;
          rcData.push(rc);
          fs.writeFileSync(rcp, JSON.stringify(rcData, null, 4));
        }
      });
      break;

    case 'incognitoHead':
      var rcData = require(rcp);
      var ac = handleReply.data;
      if (body == 1) {
        ac.headIsIncognito = true;
        o(`Bạn đã chọn ẩn giấu thân phận.\nĐể kết thúc cuộc trò chuyện hãy nhập lệnh: ${global.config.PREFIX}rc end`);
      } else if (body == 0) {
        ac.headIsIncognito = false;
        o(`Bạn đã chọn hiện thân phận.\nĐể kết thúc cuộc trò chuyện hãy nhập lệnh: ${global.config.PREFIX}rc end`);
      }
      ac.isWaiting = false;
      ac.isStarted = true;
      var nameHead = await Users.getNameUser(ac.head);
      var fbUrl = 'fb.com/' + ac.head;
      var msg = (ac.headIsIncognito ? "Người liên hệ ẩn danh" : `${nameHead} - ${fbUrl}`) + ` đã chấp nhận kết nối với bạn.\nĐể kết thúc cuộc trò chuyện hãy nhập lệnh: ${global.config.PREFIX}rc end`;
      await s(msg, ac.root);
      var prevData = rcData.find(e => e.root = ac.root);
      Object.keys(prevData).map((v) => prevData[v] = ac[v]);
      fs.writeFileSync(rcp, JSON.stringify(rcData, null, 4));
      break;

    case 'incognitoRoot':
      var rcData = require(rcp);
      var rc = handleReply.data;
      if (body == 1) {
        rc.rootIsIncognito = true;
        o("Bạn đã chọn ẩn giấu thân phận.");
      } else if (body == 0) {
        rc.rootIsIncognito = false;
        o("Bạn ��ã chọn hiện thân phận.");
      }
      var rootName = await Users.getNameUser(rc.root);
      var fbUrl = 'fb.com/' + rc.root;
      s((rc.rootIsIncognito ? "Có 1 người liên hệ ẩn danh muốn trò chuyện với bạn" : `Một người tên ${rootName} - ${fbUrl} muốn trò chuyện với bạn.`) + `\nNếu muốn từ chối hãy nhập lệnh: ${global.config.PREFIX}rc tuchoi\nNếu muốn chấp nhận hãy nhập lệnh: ${global.config.PREFIX}rc chapnhan`, rc.head, (er, i) => {
        if (er) o("Đã có lỗi xảy ra khi cố kết nối với người liên hệ.\nVui lòng thử lại sau.");
        else {
          o("Yêu cầu thành công!\nĐang chờ lệnh kết nối từ phía bên kia!");
          rc.isWaiting = true;
          rcData.push(rc);
          fs.writeFileSync(rcp, JSON.stringify(rcData));
        }
      });
      break;
  }
}

module.exports.handleEvent = async function ({ event, api, Users }) {
  var { threadID, isGroup, body } = event;
  var tiny = async function (url) {
    const { data } = await axios.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url));
    return data;
  }
  if (isGroup == false) {
    if (body.startsWith(global.config.PREFIX)) return;
    const rcData = require(rcp);
    const o = (msg, id) => api.sendMessage(msg, id || threadID);
    if (rcData.some(e => (e.head == threadID || e.root == threadID))) {
      var data = rcData.find(e => (e.head == threadID || e.root == threadID));
      if (data.isStarted == true) {
        var sender = data.root == threadID ? data.root : data.head;
        var receiver = data.root == threadID ? data.head : data.root;
        var senderIncognito = data.root == threadID ? data.rootIsIncognito : data.headIsIncognito;
        if (senderIncognito == false) {
          var name = await Users.getNameUser(sender);
          body = `${name} đã trả lời:\n` + body;
        } else body = "Người liên hệ đã trả lời:\n" + body;
        if (event.attachments.length != 0) {
          body += '\nTệp đính kèm:'
          for (var e of event.attachments) {
            var u = await tiny(e.url);
            body += '\n- ' + u;
          }
        }
        return o(body, receiver);
      }
    }
  }
                                                                                                                       }