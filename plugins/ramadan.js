cmd({
    pattern: "ramadan",
    alias: ["ramadanmubarak", "ramadan-kareem"],
    desc: "Souhaite un bon ramadan aux utilisateurs",
    react: "🌙",
    category: "info",
    filename: __filename,
}, async (m, { sock }) => {
    const message = `
🌙 *Ramadan Mubarak* 🌙


May this holy month bring you peace, light, forgiveness, and infinite blessings. 🕌
Enjoy every moment, strengthen your faith, and share love with those around you.

🤲 Happy fasting, and may God accept your prayers.

> CRAZY MD supports you in this youth month ✨❤️  
  `;
    sock.sendMessage(m.chat, { text: message }, { quoted: m });
});