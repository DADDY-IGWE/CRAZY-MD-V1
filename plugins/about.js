// 𝐁𝐘 𝐂𝐑𝐀𝐙𝐘 𝐃𝐄𝐕 𝐆𝐈𝐕𝐄 𝐂𝐑𝐄𝐃𝐈𝐓:
//𝐖𝐀.𝐌𝐄/24165730123

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*𝐇𝐈 ${pushname}* 
𝐓𝐇𝐈𝐒 𝐈𝐒 𝐌𝐘 𝐃𝐄𝐕 𝐈𝐍𝐅𝐎

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ↬ 𝐝𝐚𝐯𝐢𝐝.*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ↬ 𝐜𝐫𝐚𝐳𝐲 𝐃𝐞𝐯*
*│  ◦* *ᴀɢᴇ↬ ❌*
*│  ◦* *ᴄɪᴛʏ↬ 𝐠𝐚𝐛𝐨𝐧*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ 𝖿𝗎𝗅𝗌𝗍𝖺𝗄 ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
  *[ 𝐁𝐈𝐆 𝐓𝐇𝐀𝐍𝐂𝐊𝐒 𝐓𝐎 ]*
*╭┈───────────────•*
*│  ◦* ⚚𝐊𝐈𝐍𝐆 𝐉𝐔𝐈𝐂𝐄
*│  ◦* ⚚𝐋𝐎𝐑𝐃 𝐊𝐄𝐑𝐌
*╰┈───────────────•*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
