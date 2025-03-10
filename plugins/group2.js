


const { cmd } = require('../command');
let antideleteStatus = {}; // Tracks the ON/OFF status for each chat


cmd({
    pattern: "channel",
    desc: "Get the link to the official WhatsApp channel.",
    react: "👒",
    category: "utility",
    use: ".channel",
    filename: __filename,
}, async (conn, mek, m, { reply }) => {
    try {
        // Define the channel link inside the command
        const channelLink = "https://whatsapp.com/channel/0029Vb4QhPj4NVipeOtyo02n";

        // Send the channel link to the user
        reply(`𝙷𝙸 𝙳𝙴𝙰𝚁 𝙷𝙴𝚁𝙴 𝙸𝚂 𝚃𝙷𝙴 𝚂𝚄𝙿𝙿𝙾𝚁𝚃 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 :\n\n${channelLink}\n\n> 𝙹𝙾𝙸𝙽 𝙰𝙽𝙳 𝚁𝙴𝙰𝙲𝚃 𝙵𝙾𝚁 𝙼𝙾𝚁𝙴 𝚄𝙿𝙳𝙰𝚃𝙴 𝙰𝙽𝙳 𝚃𝚁𝙸𝙲𝙺𝚂🍒.`);
    } catch (error) {
        // Log and notify about any errors
        console.error("Error sending channel link:", error.message);
        reply("❌ Sorry, an error occurred while trying to send the channel link.");
    }
});
// Command for sending the support group or page link
cmd({
    pattern: "support",
    desc: "Get the link to the support group or page.",
    react: "🎐",
    category: "utility",
    use: ".support",
    filename: __filename,
}, async (conn, mek, m, { reply }) => {
    try {
        // Define the support link inside the command
        const supportLink = "https://chat.whatsapp.com/HykIu0wMudvAxVnPXqrYE2";

        // Send the support link to the user
        reply(`𝙷𝙸 𝙳𝙴𝙰𝚁 𝙷𝙴𝚁𝙴 𝙸𝚂 𝚃𝙷𝙴 𝚂𝚄𝙿𝙿𝙾𝚁𝚃 𝙶𝚁𝙾𝚄𝙿 𝙻𝙸𝙽𝙺 :\n\n${supportLink}\n\n> 𝙲𝙷𝙰𝚃 𝙰𝙽𝙳 𝙴𝙽𝙹𝙾𝚈 𝚃𝙾 𝙲𝚁𝙰𝚉𝚈 𝙼𝙳 𝚄𝙿𝙳𝙰𝚃𝙴🍓 .`);
    } catch (error) {
        // Log and notify about any errors
        console.error("Error sending support link:", error.message);
        reply("❌ Sorry, an error occurred while trying to send the support link.");
    }
});