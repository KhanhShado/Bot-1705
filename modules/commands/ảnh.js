module.exports.config = {
	name: "ảnh",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "vnhhoang",
	description: "Xem ảnh reply",
	commandCategory: "Tiện ích",
	cooldowns: 5,
	dependencies: { 
		axios: ""
	}
  };
  module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "nhoang.jpg")) request("https://i.imgur.com/yHbWIjz.jpg").pipe(fs.createWriteStream(dirMaterial + "nhoang.jpg"));
}, module.exports.run = async function({
	event: e,
	api: a,
	args: n
}) {
    const fs = require("fs");
	if (!n[0]) return a.sendMessage({body:"=== [ 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗔̉𝗡𝗛 ] ===\n━━━━━━━━━━━━━━━━━━\n𝟭. 𝗔̉𝗻𝗵 𝗚𝗮́𝗶 💞 \n𝟮. 𝗔̉𝗻𝗵 𝗧𝗿𝗮𝗶 💕\n𝟯. 𝗔̉𝗻𝗵 𝗠𝗼̂𝗻𝗴 🍑\n𝟰. 𝗔̉𝗻𝗵 𝟲 𝗠𝘂́𝗶 😽\n𝟱. 𝗔̉𝗻𝗵 𝗡𝘂𝗱𝗲 🌚\n𝟲. 𝗔̉𝗻𝗵 𝗖𝗼𝘀𝗽𝗹𝗮𝘆 😻\n𝟳. 𝗔̉𝗻𝗵 𝗦𝗲𝘅𝘆 🔥\n━━━━━━━━━━━━━━━━━━\n𝟴. 𝗔̉𝗻𝗵 𝗞𝗮𝗻𝗮 🌸\n𝟵. 𝗔̉𝗻𝗵 𝗗𝘂́ 🎀\n𝟭𝟬. 𝗔̉𝗻𝗵 𝗛𝗲𝗻𝘁𝗮𝗶 💸\n𝟭𝟭. 𝗔̉𝗻𝗵 𝗛𝗮𝗻𝗮💊\n𝟭𝟮. 𝗔̉𝗻𝗵 𝗺𝗲𝗺𝗲 🌸\n𝟭𝟯. 𝗔̉𝗻𝗵 𝗟𝗼𝗹𝗶 📌\n𝟭𝟰. 𝗔̉𝗻𝗵 𝗣𝗵𝗼𝗻𝗴 𝗖𝗮̉𝗻𝗵 🌻\n𝟭𝟱. 𝗔̉𝗻𝗵 𝗔𝗜 𝘃𝗲̃ 🎇\n━━━━━━━━━━━━━━━━━━\n=== [ 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗩𝗜𝗗𝗘𝗢 ] ===\n━━━━━━━━━━━━━━━━━━\n𝟭𝟲. 𝗩𝗶𝗱𝗲𝗼 𝗔𝗻𝗶𝗺𝗲 📺\n𝟭𝟳. 𝗩𝗶𝗱𝗲𝗼 𝗚𝗮́𝗶 🐰\n𝟭𝟴. 𝗩𝗶𝗱𝗲𝗼 𝗖𝗵𝗶𝗹𝗹 🎊\n𝟭𝟵. 𝗠𝗩 𝗺𝗽𝟯 🎆\n𝟮𝟬. 𝗩𝗶𝗱𝗲𝗼 𝘀𝗰𝗶𝗲𝗻𝗰𝗲 🧸\n𝟮𝟭. 𝗩𝗶𝗱𝗲𝗼 𝗖𝗼𝘀𝗽𝗹𝗮𝘆 🌟\n𝟮𝟮. 𝗩𝗶𝗱𝗲𝗼 𝘁𝐚̂𝗺 𝘁𝗿𝗮̣𝗻𝗴 💓\n𝟮𝟯. 𝗠𝗩 𝗖𝗵𝗶𝗹𝗹 𝗗𝗮̣𝗻𝗴 𝗧𝗵𝗲̉ 🥀\n━━━━━━━━━━━━━━━━━━\n→ 𝗥𝗲𝗽𝗹𝘆 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 𝗩𝗮̀ 𝗖𝗵𝗼̣𝗻 𝗧𝗵𝗲𝗼 𝗦𝗧𝗧 𝗔̉𝗻𝗵 𝗛𝗼𝗮̣̆𝗰 𝗩𝗶𝗱𝗲𝗼 𝗕𝗮̣𝗻 𝗠𝘂𝗼̂́𝗻 𝗫𝗲𝗺 𝗡𝗵𝗲́ 🐧",attachment: (await axios.get((await axios.get(`https://api.api-official.repl.co/gai`)).data.data, {
                    responseType: 'stream'
                })).data}, e.threadID, ((a, n) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: n.messageID,
			author: e.senderID,
			type: "create"
		})
	}), e.messageID)
}, module.exports.handleReply = async ({
	api: e,
	event: a,
	client: n,
	handleReply: t,
	Currencies: s,
	Users: i,
	Threads: o
}) => {
	var { p, h } = linkanh();

	if ("create" === t.type) {
		const n = (await p.get(h)).data.url;
		let t = (await p.get(n, {
			responseType: "stream"
		})).data;
		return e.sendMessage({
			body: "[ 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴 ] →  𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗲̀ 🐧️",
			attachment: t
		}, a.threadID, a.messageID)
	}

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://api.api-official.repl.co/gai";
        else if ("2" == a.body)
         var   h = "https://api.api-official.repl.co/trai";
        else if ("3" == a.body)
         var   h = "https://api.api-official.repl.coo/mong";
        else if ("4" == a.body)
          var  h = "https://TPKTAO.last-namename.repl.co/image/saumui";
        else if ("5" == a.body)
          var  h = "https://TPKTAO.last-namename.repl.co/image/nude";
        else if ("6" == a.body)
          var  h = "https://TPKTAO.last-namename.repl.co/image/cosplay";
        else if ("7" == a.body)
          var  h = "https://TPKTAO.last-namename.repl.co/image/sexy";
        else if ("8" == a.body)
         var   h = "https://api.api-official.repl.co/kana";
        else if ("9" == a.body)
         var  h = "https://api.api-official.repl.co/du";
        else if ("10" == a.body)
          var  h = "https://api.api-official.repl.co/hentai";
        else if ("11" == a.body)
          var  h = "https://api.api-official.repl.co/hana";
        else if ("12" == a.body)
         var   h = "https://api.api-official.repl.co//meme";
        else if ("13" == a.body)
          var  h = "https://TPKTAO.last-namename.repl.co/image/loli";
        else if ("14" == a.body)
          var  h = "https://api.api-official.repl.co/phongcanh";
        else if ("15" == a.body)
         var   h = "https://api.api-like.repl.co/imageAI";
        else if ("16" == a.body)
          var  h = "https://api.api-like.repl.co/vdanime";
        else if ("17" == a.body)
         var   h = "https://api.api-official.repl.co/vdgai";
        else if ("18" == a.body)
         var   h = "https://tpktao.last-namename.repl.co/image/vdmschil";
        else if ("19" == a.body)
         var   h = "https://api.api-official.repl.co/mp3";
        else if ("20" == a.body)
         var   h = "https://api.api-official.repl.co/science";
        else if ("21" == a.body)
         var   h = "https://api.api-official.repl.co/vdcosplay";
       else if ("22" == a.body)
         var   h = "https://api.api-official.repl.co/vdchill";
      else if ("23" == a.body)
         var   h = "https://api.api-official.repl.co/vdmusic";
        return { p, h };
    }
};