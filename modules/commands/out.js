module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "manhG",
  description: "chỉ là rời nhóm theo ID thôi",
  commandCategory: "admin",
  usages: "[ID nhóm] [Nội dung]",
  cooldowns: 5,
  dependencies: "",

};

module.exports.run = async function ({ api, Users, Threads, event, args }) {
  var idbox = args[0];
  var reason = args.slice(1);
  if (!args[0]) return api.sendMessage(`${api.getCurrentUserID()}`, () =>
    api.sendMessage (`[❗] ⪼ Đã 𝐧𝐡ậ𝐧 𝐥ệ𝐧𝐡 𝐨𝐮𝐭 𝐧𝐡ó𝐦 𝐭ừ 𝐜ô 𝐜𝐡ủ!\n 𝐌ọ𝐢 𝐧𝐠ườ𝐢 ở 𝐥ạ𝐢 𝐯𝐮𝐢 𝐯ẻ🥰 `, event.threadID, () =>
      api.removeUserFromGroup(`${api.getCurrentUserID()}`, event.threadID)));
        api.sendMessage("Đã 𝐧𝐡ậ𝐧 𝐥ệ𝐧𝐡 𝐨𝐮𝐭 𝐧𝐡ó𝐦 𝐭ừ 𝐜ô 𝐜𝐡ủ, 𝐥ý 𝐝𝐨: " + reason.join(" "), idbox, () =>
          api.removeUserFromGroup(`${api.getCurrentUserID()}`, idbox, () =>
            api.sendMessage("Đã 𝐧𝐡ậ𝐧 𝐥ệ𝐧𝐡 𝐨𝐮𝐭 𝐧𝐡ó𝐦 𝐦𝐚𝐧𝐠 𝐢𝐝: " + idbox + " 𝐯ớ𝐢 𝐥ý 𝐝𝐨: " + reason.join(" "), event.threadID)))
}