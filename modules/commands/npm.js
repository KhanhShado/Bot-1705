const https = require('https');
class NpmCommand {
    static config = {
        name: "npm",
        version: "1.0.0",
        hasPermssion: 3,
        credits: "Thiệu Trung Kiên",
        description: "Xem thông tin package trên npm",
        commandCategory: "Admin",
        usages: "[package]",
        cooldowns: 5,
        dependencies: {
            "https": ""
        }
    };

    static async run({ api, event, args }) {
        const [packageName, page = 1] = args;
        const limit = 5;
        const offset = (Number(page) - 1) * limit;

        if (!packageName) {
            return api.sendMessage("𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗻𝗵𝗮̣̂𝗽 𝘁𝗲̂𝗻 𝗽𝗮𝗰𝗸𝗮𝗴𝗲 𝗰𝗮̂̀𝗻 𝘁𝗶̀𝗺 🌸", event.threadID, event.messageID);
        }

        try {
            const response = await NpmCommand.getPackage(packageName);
            const packages = response.data.objects.slice(offset, offset + limit);

            if (!packages.length) {
                return api.sendMessage("𝗞𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗸𝗲̂́𝘁 𝗾𝘂𝗮̉ 𝗻𝗮̀𝗼 𝘁𝗿𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝘁𝘂̛̀ 𝗸𝗵𝗼𝗮́ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 😭", event.threadID, event.messageID);
            }
            else if (packages.length == 1) {
                const { name, version, keywords, description, links, author: {name: authorName}, date, publisher } = packages[0].package;
                const { homepage } = links;
                const { username, email } = publisher
                return api.sendMessage(`𝗧𝗲̂𝗻: ${name}\n𝗣𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻: ${version}\n𝗠𝗼̂ 𝘁𝗮̉: ${description}\n𝗡𝗴𝗮̀𝘆 𝘁𝗮̣𝗼: ${date}\n𝗧𝗮́𝗰 𝗴𝗶𝗮̉: ${authorName}\n𝗧𝗿𝗮𝗻𝗴 𝗰𝗵𝘂̉: ${homepage}\n𝗧𝘂̛̀ 𝗸𝗵𝗼𝗮́: ${keywords}\n𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂𝘆 𝘁𝗿𝗶̀: ${username}\n𝗘𝗺𝗮𝗶𝗹: ${email}\n𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "❤️" 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗰𝗮̀𝗶 𝗽𝗮𝗰𝗸𝗮𝗴𝗲\n𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👎" 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗵𝘂𝘆̉`, event.threadID, ((error, info) => {
                    global.client.handleReaction.push({
                        name: NpmCommand.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "confirm",
                        package: packages[0]
                    })
                }), event.messageID);

            }

            const msg = Array.from({ length: packages.length }, (_, index) => {
                const { name, version, keywords, description, links, author: {name: authorName}, date, publisher } = packages[index].package;
                const { homepage } = links;
                const { username, email } = publisher
                return `${index + 1}. 𝗧𝗲̂𝗻: ${name}\n𝗣𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻: ${version}\n𝗠𝗼̂ 𝘁𝗮̉: ${description}\n𝗡𝗴𝗮̀𝘆 𝘁𝗮̣𝗼: ${date}\n𝗧𝗮́𝗰 𝗴𝗶𝗮̉: ${authorName}\n𝗧𝗿𝗮𝗻𝗴 𝗰𝗵𝘂̉: ${homepage}\n𝗧𝘂̛̀ 𝗸𝗵𝗼𝗮́: ${keywords}\n𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂𝘆 𝘁𝗿𝗶̀: ${username}\n𝗘𝗺𝗮𝗶𝗹: ${email}\n━━━━━━━━━━━━━\n`;
            });


            api.sendMessage(`${msg.join('')}👉 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗺𝘂𝗼̂́𝗻 𝗰𝗮̀𝗶 𝗽𝗮𝗰𝗸𝗮𝗴𝗲\n-------- 𝗧𝗿𝗮𝗻𝗴 ${page}/${Math.ceil(response.data.objects.length / limit)} --------`, event.threadID, async (error, info) => {
                global.client.handleReply.push({
                    name: NpmCommand.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "package",
                    package: packages
                });
            }, event.messageID);
        } catch (error) {
            console.error(`Error: ${error.message}`);
            api.sendMessage(`𝗖𝗼́ 𝗹𝗼̂̃𝗶 𝘅𝗮̉𝘆 𝗿𝗮 𝗸𝗵𝗶 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗽𝗮𝗰𝗸𝗮𝗴𝗲 ${packageName} 😿`, event.threadID);
        }
    }
    static async handleReply({ api, event, handleReply }) {
        const { author, type, package: packages } = handleReply;
        if (event.senderID !== author || type !== "package") return;
        const packageIndex = parseInt(event.body, 10);
        if (!isNaN(packageIndex) && packageIndex >= 1 && packageIndex <= packages.length) {
            const packageName = packages[packageIndex - 1]?.package?.name;
            api.sendMessage(`𝗕𝗮̣𝗻 𝗰𝗼́ 𝗰𝗵𝗮̆́𝗰 𝗺𝘂𝗼̂́𝗻 𝗰𝗮̀𝗶 𝗽𝗮𝗰𝗸𝗮𝗴𝗲 ${packageName} 𝗸𝗵𝗼̂𝗻𝗴 ?\n𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "❤️" 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗰𝗮̀𝗶`, event.threadID, ((error, info) => {
                global.client.handleReaction.push({
                    name: NpmCommand.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "confirm",
                    package: packages[packageIndex - 1]
                })
            }), event.messageID);
        } else {
            api.sendMessage("𝗦𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗸𝗵𝗼̂𝗻𝗴 𝗵𝗼̛̣𝗽 𝗹𝗲̣̂", event.threadID, event.messageID);
        }
    }
    static async handleReaction({ api, event, handleReaction }) {
        const { userID: eventUserId, reaction: eventReaction, threadID: eventThreadID, } = event;

        const {
            author: handleReactionAuthor,
            type: handleReactionType,
            messageID: handleReactionMessageID,
            package: { package: { name: packageName } },
        } = handleReaction;

        if (eventUserId !== handleReactionAuthor) {
            return;
        }

        const SUCCESS_MESSAGE = `𝗧𝗵𝘂̛̣𝗰 𝗵𝗶𝗲̣̂𝗻 𝗰𝗮̀𝗶 𝗽𝗮𝗰𝗸𝗮𝗴𝗲 ${packageName} 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 🌸`;
        const ERROR_MESSAGE = `𝗖𝗼́ 𝗹𝗼̂̃𝗶 𝘅𝗮̉𝘆 𝗿𝗮 𝗸𝗵𝗶 𝗰𝗮̀𝗶 𝗽𝗮𝗰𝗸𝗮𝗴𝗲 ${packageName} ❗`;

        if (handleReactionType === "confirm" && eventReaction === "❤") {
            try {
                api.unsendMessage(handleReactionMessageID);
                api.sendMessage(`𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝗯𝗼𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗿𝗼𝗻𝗴 𝗾𝘂𝗮́ 𝘁𝗿𝗶̀𝗻𝗵 𝗰𝗮̀𝗶 𝗽𝗮𝗰𝗸𝗮𝗴𝗲 ${packageName}...`, eventThreadID);
                const { stdout } = await NpmCommand.runCommand(`npm i ${packageName}`);
                console.log(stdout);
                api.sendMessage(SUCCESS_MESSAGE, eventThreadID);
            } catch (error) {
                console.error(`Error: ${error.message}`);
                api.sendMessage(ERROR_MESSAGE, eventThreadID);
            }
        } else if (handleReactionType === "confirm" && eventReaction === "👎") {
            api.unsendMessage(handleReactionMessageID);
            api.sendMessage("𝗛𝘂𝘆̉ 𝗰𝗮̀𝗶 𝗽𝗮𝗰𝗸𝗮𝗴𝗲 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴", eventThreadID);
        }
    }

    static getPackage(packageName) {
        return new Promise((resolve, reject) => {
            https.get(`https://registry.npmjs.org/-/v1/search?text=${packageName}`, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    const response = JSON.parse(data);
                    resolve({ data: response });
                });
            }).on('error', reject);
        });
    }

    static runCommand(command) {
        const { promisify } = require('util');
        const exec = promisify(require('child_process').exec);
        return exec(command);
    }
}

module.exports = NpmCommand;