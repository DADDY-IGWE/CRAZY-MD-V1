/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674
YT: KermHackTools
Github: Kgtech-cmr
*/

const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
    pattern: "animegirl",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "👧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *𝙲𝚁𝙰𝚉𝚈 𝚅2 𝚁𝙰𝙽𝙳𝙾𝙼𝙴𝚂 𝙰𝙽𝙸𝙼𝙴𝚂 𝙶𝙸𝚁𝙻𝚂* 👸\n\n\n *©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝚁𝙰𝚉𝚈 𝙳𝙴𝚅💤*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl1",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "👧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *𝙲𝚁𝙰𝚉𝚈 𝚅2 𝚁𝙰𝙽𝙳𝙾𝙼𝙴𝚂 𝙰𝙽𝙸𝙼𝙴𝚂 𝙶𝙸𝚁𝙻𝚂* 👸\n\n\n *©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝚁𝙰𝚉𝚈 𝙳𝙴𝚅💤*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl2",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "👧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *𝙲𝚁𝙰𝚉𝚈 𝚅2 𝚁𝙰𝙽𝙳𝙾𝙼𝙴𝚂 𝙰𝙽𝙸𝙼𝙴𝚂 𝙶𝙸𝚁𝙻𝚂* 👸\n\n\n *©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝚁𝙰𝚉𝚈 𝙳𝙴𝚅💤*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl3",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "👧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *𝙲𝚁𝙰𝚉𝚈 𝚅2 𝚁𝙰𝙽𝙳𝙾𝙼𝙴𝚂 𝙰𝙽𝙸𝙼𝙴𝚂 𝙶𝙸𝚁𝙻𝚂* 👸\n\n\n *©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝚁𝙰𝚉𝚈 𝙳𝙴𝚅💤*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl4",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "👧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *𝙲𝚁𝙰𝚉𝚈 𝚅2 𝚁𝙰𝙽𝙳𝙾𝙼𝙴𝚂 𝙰𝙽𝙸𝙼𝙴𝚂 𝙶𝙸𝚁𝙻𝚂* 👸\n\n\n *©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝚁𝙰𝚉𝚈 𝙳𝙴𝚅💤*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl5",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "👧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *𝙲𝚁𝙰𝚉𝚈 𝚅2 𝚁𝙰𝙽𝙳𝙾𝙼𝙴𝚂 𝙰𝙽𝙸𝙼𝙴𝚂 𝙶𝙸𝚁𝙻𝚂* 👸\n\n\n *©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝚁𝙰𝚉𝚈 𝙳𝙴𝚅💤*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "loli",
    alias: ["lolii"],
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🐱",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *𝙲𝚁𝙰𝚉𝚈 𝚅2 𝚁𝙰𝙽𝙳𝙾𝙼𝙴𝚂 𝙻𝙾𝙻𝙸𝚂 𝙶𝙸𝚁𝙻𝚂* 👸\n\n\n *©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝚁𝙰𝚉𝚈 𝙳𝙴𝚅💤*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});
