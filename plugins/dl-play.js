import yts from 'yt-search';

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `✳️ ${mssg.example} *${usedPrefix + command}* Lil Peep hate my life`;

    let res = await yts(text);
    let vid = res.videos[0];
    if (!vid) throw `✳️ Vídeo/Audio no encontrado`;

    let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid;
    
    m.react('🎧');

    let play = `
≡ *FG MUSIC*
┌──────────────
▢ 📌 *${mssg.title}:* ${title}
▢ 📆 *${mssg.aploud}:* ${ago}
▢ ⌚ *${mssg.duration}:* ${timestamp}
▢ 👀 *${mssg.views}:* ${views.toLocaleString()}
└──────────────`;

    await conn.sendButton2(
        m.chat,
        play,
        mssg.ig,
        thumbnail,
        [
            ['🎶 MP3', `${usedPrefix}fgmp3 ${url}`],
            ['🎥 MP4', `${usedPrefix}fgmp4 ${url}`]
        ],
        null,
        [['Canal', `${fgcanal}`]],
        m
    );
};

handler.help = ['play'];
handler.tags = ['dl'];
handler.command = ['play', 'playvid'];
handler.disabled = false;

export default handler;
