const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async (danuwa, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup,
    sender, senderNumber, botNumber2, botNumber, pushname,
    isMe, isOwner, groupMetadata, groupName, participants,
    groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        // කාලය සහ දිනය සැකසීම
        const currentDate = new Date();
        const date = currentDate.toLocaleDateString('en-GB'); // දිනය DD/MM/YYYY ආකෘතියෙන්
        const time = currentDate.toLocaleTimeString();

        // System විස්තර ලබා ගැනීම (Memory & Uptime)
        const uptime = runtime(process.uptime());
        const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
        const usedMemory = Math.round(process.memoryUsage().heapUsed / 1024 / 1024);
        const platform = os.platform();
        const hostname = os.hostname();

        // Alive Message එක සැකසීම (Screenshot එකේ විදියට)
        const aliveMsg = `👋 *HI, ${pushname}*
*I'AM ALIVE NOW* 👾

╭┏  *DATE INFORMATION* ┓
┃ 📅 Date: ${date}
┃ ⏰ Time: ${time}
╰━━━━━━━━━━━━━━━

╭┏ *STATUS DETAILS* ┓
┃ 👤 User: ${pushname}
┃ 🖊️ Prefix: .
┃ 🧬 Version: 1.0.0
┃ 🎈 Platform: ${platform}
┃ 📡 Host: ${hostname}
┃ 📟 Uptime: ${uptime}
┃ 📁 Memory: ${usedMemory}MB / ${totalMemory}MB
╰━━━━━━━━━━━━━━━

*xCHAMi MD V1* 👨‍💻`;

        // පින්තූරය සහ මැසේජ් එක යැවීම
        return await danuwa.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: aliveMsg
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
