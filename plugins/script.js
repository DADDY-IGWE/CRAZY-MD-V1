// 𝐁𝐘 𝐂𝐑𝐀𝐙𝐘 𝐃𝐄𝐕 𝐆𝐈𝐕𝐄 𝐂𝐑𝐄𝐃𝐈𝐓:
//𝐖𝐀.𝐌𝐄/24165730123

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch information about a GitHub repository.",
    react: "🍒",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/LORD-IGWE/CRAZY-MD-V1';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `*𝐡𝐢 𝐛𝐨𝐬𝐬 𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐂𝐑𝐀𝐙𝐘 𝐌𝐃 𝐫𝐞𝐩𝐨𝐬𝐢𝐭𝐨𝐫𝐲🥇*\n\n𝐜𝐡𝐮𝐝𝐝𝐲 𝐛𝐮𝐝𝐝𝐲 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐛𝐨𝐭 𝐦𝐚𝐤𝐞 𝐟𝐨𝐫 𝐞𝐝𝐲𝐜𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐩𝐮𝐫𝐩𝐨𝐬𝐞🌺

*Thanks for using crazy md🫶* 

> Don't forget to star & fork the repo🌟🍴

──────────────────
\`REPO:\`
> https://github.com/LORD-IGWE/CRAZY-MD-V1
${readMore}
\`BOT NAME:\`❄️
> ${repoData.name}

\`OWNER NAME:\`👨‍💻
> ${repoData.owner.login}

\`STARS:\`🌟
> ${repoData.stargazers_count}

\`FORKS:\`🍴
> ${repoData.forks_count}

\`DESCRIPTION:\`📃
> ${repoData.description || 'No description'}\n
──────────────────
\n> *© POWERED BY CRAZY MD* 🎐`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://i.imgur.com/XUf6AAS.jpeg` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363411838274335@newsletter',
                    newsletterName: '𝐂𝐑𝐀𝐙𝐘 𝐌𝐃 𝐑𝐄𝐏𝐎',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/d8qqch.mp3' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363411838274335@newsletter',
                    newsletterName: '𝐂𝐑𝐀𝐙𝐘 𝐌𝐃',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});