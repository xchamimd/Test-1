const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
// මෙතන ඔයාගේ අලුත් Image Link එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/xchamimd/Test-1/blob/ec318cdbe6371b689b7e8c867e7f8b358e09b73a/images/alive.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 xCHAMi MD Is Alive Now😍*",
BOT_OWNER: '94701771975', // ඔයාගේ නම්බර් එක මෙතන දාන්න
};
