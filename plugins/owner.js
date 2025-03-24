// 𝐁𝐘 𝐂𝐑𝐀𝐙𝐘 𝐃𝐄𝐕 𝐆𝐈𝐕𝐄 𝐂𝐑𝐄𝐃𝐈𝐓:
//𝐖𝐀.𝐌𝐄/24165730123

const { cmd } = require('../command');

cmd({
    pattern: "owner",
    react: "👨‍🏫", // Reaction emoji when the command is triggered
    alias: ["kerm"],
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        // Owner's contact info
        const ownerNumber = '+24165730123'; // Replace this with the actual owner number
        const ownerName = '×᷼×𝐂𝐑𝐀𝐙𝐘 𝐃𝐄𝐕×᷼×'; // Replace this with the owner's name
        const organization = '𝐂𝐑𝐀𝐙𝐘 𝐂𝐇𝐍𝐋'; // Optional: replace with the owner's organization

        // Create a vCard (contact card) for the owner
        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  // Full Name
                      `ORG:${organization};\n` +  // Organization (Optional)
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` +  // WhatsApp ID and number
                      'END:VCARD';

        // Send the vCard first
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send a reply message that references the vCard
        await conn.sendMessage(from, {
            text: `THIS IS MY OWNER CONTACT : ${ownerName}`,
            contextInfo: {
                mentionedJid: [ownerNumber.replace('+24165730123') + '+24165730123@s.whatsapp.net'], // Mention the owner
                quotedMessageId: sentVCard.key.id // Reference the vCard message
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { text: 'Sorry, there was an error fetching the owner contact.' }, { quoted: mek });
    }
});
/*const { cmd } = require('../command');

cmd({
    pattern: "owner",
    react: "👑", // Reaction emoji when the command is triggered
    alias: ["kerm"],
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        // Owners' contact info
        const owners = [
            { number: '+237656520674', name: '༒𝐋𝐎𝐑𝐃 𝐊𝐄𝐑𝐌༒', organization: 'UD TEAM' },
            { number: '+237650564445', name: 'ᵏᵍᶠ┘𝙏𝞖⧠𝙂𝞘𝙁𝙁𝞓𝞒𝞢𝞜𝞗└', organization: 'UD TEAM' }
        ];

        let contacts = [];

        for (const owner of owners) {
            const vcard = `BEGIN:VCARD\n` +
                          `VERSION:3.0\n` +
                          `FN:${owner.name}\n` +  // Full Name
                          `ORG:${owner.organization};\n` +  // Organization (Optional)
                          `TEL;type=CELL;type=VOICE;waid=${owner.number.replace('+', '')}:${owner.number}\n` +  // WhatsApp ID and number
                          `END:VCARD`;

            contacts.push({ vcard });
        }

        // Send the vCards
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: "Owners",
                contacts
            }
        });

        // Mention both owners
        const mentionedJid = owners.map(owner => owner.number.replace('+', '') + '@s.whatsapp.net');

        // Send a reply message that references the vCards
        await conn.sendMessage(from, {
            text: `Here are the owner contacts:\n\n${owners.map(o => `📌 ${o.name}: ${o.number}`).join('\n')}`,
            contextInfo: {
                mentionedJid,
                quotedMessageId: sentVCard.key.id // Reference the vCard message
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { text: 'Sorry, there was an error fetching the owner contacts.' }, { quoted: mek });
    }
});*/
