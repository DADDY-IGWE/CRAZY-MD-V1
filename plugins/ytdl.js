// 𝐁𝐘 𝐂𝐑𝐀𝐙𝐘 𝐃𝐄𝐕 𝐆𝐈𝐕𝐄 𝐂𝐑𝐄𝐃𝐈𝐓:
//𝐖𝐀.𝐌𝐄/24165730123

const { cmd } = require("../command"); const yts = require("yt-search"); const axios = require("axios");
cmd({ pattern: "music", alias: ["audio", "song"], desc: "Search and download audio from YouTube", category: "media", react: "🎧", filename: __filename }, async (conn, mek, m, { from, args, q, reply }) => { try { if (!q) return reply("*𝐏ℓєα𝐬֟፝є 𝐏ʀ๏νιɖє 𝐀 𝐒๏ƞ͛g 𝐍αмє..*");

let videoUrl = q;
    if (!q.includes("youtube.com") && !q.includes("youtu.be")) {
        reply("\n┏•━•━•━ ◎ ━•━•━•┓\n*_🎐 Your song is downloading..._*\n┗•━•━•━ ◎ ━•━•━•┛\n\n𝚆𝙰𝙸𝚃 𝚈𝙾𝚄𝚁 𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶");
        const searchResults = await yts(q);
        if (!searchResults.videos.length) return reply("No results found for your query.");
        videoUrl = searchResults.videos[0].url;
    }
    
    const apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${videoUrl}`;
    const response = await axios.get(apiUrl);
    if (!response.data || !response.data.success || !response.data.result.downloadUrl) {
        return reply("Failed to fetch the audio. Try again later.");
    }
    
    await conn.sendMessage(from, {
        audio: { url: response.data.result.downloadUrl },
        mimetype: "audio/mpeg",
        ptt: false,
        caption: `🎵 *Title:* ${response.data.result.title}\n🔗 *Link:* ${videoUrl}`
    }, { quoted: mek });
    
} catch (e) {
    console.error("Error in play command:", e);
    reply("An error occurred while processing your request.");
}

});