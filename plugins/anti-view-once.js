//𝚌𝚛𝚊𝚣𝚢 𝚟𝚟
const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

const fs = require("fs");

cmd({
    pattern: "vv",
    react: "👀",
    alias: ["reveler", "viewonce"],
    desc: "Fetch and resend a ViewOnce message content (image/video/voice).",
    category: "misc",
    use: "<query>",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        if (!m.quoted) return reply("𝙷𝙸 𝙿𝚁𝙾𝚅𝙸𝙳𝙴 𝚃𝙾 𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝙿𝙻𝙴𝙰𝚂𝙴.");

        const mime = m.quoted.type;
        let ext, mediaType;
        
        if (mime === "imageMessage") {
            ext = "jpg";
            mediaType = "image";
        } else if (mime === "videoMessage") {
            ext = "mp4";
            mediaType = "video";
        } else if (mime === "audioMessage") {
            ext = "mp3";
            mediaType = "audio";
        } else {
            return reply("Unsupported media type. Please reply to an image, video, or audio message.");
        }

        var buffer = await m.quoted.download();
        var filePath = `${Date.now()}.${ext}`;

        fs.writeFileSync(filePath, buffer); 

        let mediaObj = {};
        mediaObj[mediaType] = fs.readFileSync(filePath);

        await conn.sendMessage(m.chat, mediaObj);

        fs.unlinkSync(filePath);

    } catch (e) {
        console.log("Error:", e);
        reply("An error occurred while fetching the ViewOnce message.", e);
    }
});
