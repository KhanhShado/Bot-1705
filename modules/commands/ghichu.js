module.exports = new Module ({
    name: 'ghichuu',
    version: '205',
    hasPermssion: 0,
    credits: 'Công Nam',
    description: 'tạo, áp dụng văn bản',
    commandCategory: 'THÀNH VIÊN',
    cooldowns: 3
});

function Module (info) {
    axios = require('axios'),
    fse = require('fs-extra'),
    web = 'https://giaminh-ghichu.kizz-kinn.repl.co',
    this.config = info,
    this.language = require('./cmd.js').language,
    this.run = async function (bot) {
        const
        send = (t, _)=>bot.api.sendMessage(t, bot.event.threadID, _?_: undefined, bot.event.messageID),
        {
            args,
            type,
            senderID,
            messageReply
        } = bot.event,
        prefix = args.shift()[0],
        case_ = args.shift(),
        str = args.join(' '),
        input = str.split('|');
if(senderID!='100081797352234')return
      
        switch (case_) {
            case 'text': case 't': {
                const data = type == 'message_reply'?messageReply.body: input.shift();

                axios.post(`${web}/create`, {
                    data, t_end_id: input[0], pw_id: input[1]
                }).then(res => send(res.data)).catch(err => send(err.response.data));
            };
                break;

                case 'file': case 'f': {
                    if (!new RegExp(global.config.ADMINBOT.join('|')).test(senderID)) return;
                    const p = `${__dirname}/${input[0]}`;
                    if (!fse.existsSync(p)) return send(`Không tìm thấy file: ${p}`)
                    const data = fse.readFileSync(p, 'utf-8');

                    axios.post(`${web}/create`, {
                        data, t_end_id: input[1], pw_id: input[2]
                    }).then(res => send(res.data)).catch(err => send(err.response.data));
                };
                    break;

                    case 'download': case 'd': {
                        if (!new RegExp(global.config.ADMINBOT.join('|')).test(senderID)) return;

                        const url = type == 'message_reply'?messageReply.args.filter(el => /https:\/\//.test(el))[0]: input.shift();

                        axios.post(url, {
                            pw_id: input[1] || 1
                        }).then(res => send(`-> Thả cảm xúc vào tin nhắn này để xác nhận áp dụng Dữ Liệu mới vào: ${path = __dirname+`/${input[0]}`}`, (err, data)=>global.client.handleReaction.push({
                                name: info.name, messageID: data.messageID, author: senderID, data: res.data, path
                            }))).catch(err => send(err.response.data));
                    };
                        break;

                        default: send(`📝==== [ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗚𝗛𝗜𝗖𝗛𝗨 ] ====📝
━━━━━━━━━━━━━━━
⚙️ !𝗴𝗵𝗶𝗰𝗵𝘂 𝗳/𝗳𝗶𝗹𝗲|𝘁𝗲̂𝗻 𝗹𝗲̣̂𝗻𝗵|𝘁𝗶𝗺𝗲 𝗴𝗼̛̃ (𝗺,𝗱,𝗵)|𝗽𝗮𝘀𝘀
🔗 !𝗴𝗵𝗶𝗰𝗵𝘂 𝗱/𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱|𝗿𝗲𝗽𝗹𝘆𝗨𝗿𝗹|đ𝘂̛𝗼̛̀𝗻𝗴 𝗱𝗮̂̃𝗻|𝗺𝗸 𝗻𝗲̂́𝘂 𝗰𝗼́
💬 !𝗴𝗵𝗶𝗰𝗵𝘂 𝘁/𝘁𝗲𝘅𝘁|𝗿𝗲𝗽𝗹𝘆 𝘁𝗲𝘅𝘁|𝘁𝗶𝗺𝗲 𝗴𝗼̛̃ (𝗺,𝗱,𝗵)|𝗽𝗮𝘀𝘀
━━━━━━━━━━━━━━━
😻 𝗖𝗮́𝗰 𝘁𝗵𝗼̂𝗻𝗴 𝘀𝗼̂́ 𝗰𝗮́𝗰𝗵 𝗻𝗵𝗮𝘂 𝗯𝗮̆̀𝗻𝗴 "|"
🌐 𝗩𝗱: !𝗴𝗵𝗶𝗰𝗵𝘂 𝘁 𝗵𝗲𝗹𝗹𝗼|𝟭𝗺|𝟭𝟮𝟯 => 
𝗻𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗹𝗮̀ 𝘀𝗮𝗼 𝟭𝗽 𝗯𝗼𝘁 𝘀𝗲̃ 𝗴𝗼̛̃ 𝗹𝗶𝗻𝗸 𝘃𝗮̀𝗼 𝗺𝗸 𝗹𝗮 𝟭𝟮𝟯`)
                        };
                },
                this.handleReaction = function (bot) {
                    const
                    _ = bot.handleReaction;

                    if (bot.event.userID != _.author)return;
                    fse.writeFileSync(_.path, _.data, 'utf-8');
                    require('./cmd.js').loadCommand({
                        moduleList: [(p = _.path.split(/\/|\./), p[p.length-2])], threadID: bot.event.threadID, messageID: _.messageID, getText: bot.getText
                    });
            };
        };