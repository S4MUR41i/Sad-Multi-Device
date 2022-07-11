import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 Perkenalan 』*', `Hallo,aku adalah bot whatsapp yang dikembangkan oleh *Asrori Amin*,\nNama : Asrori Amin\nHobby : Nonton Anime,Belajar,Membaca,Menari\nKesukaan :Loli,Senang²,Chitoge🥰/nKelahiran : 18-10-2006\n\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://chat.whatsapp.com/ID36jYZjlYz7E4zus4SBed', 'Grub', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\nAku Sebenarnya Suka Sama Asrori Amin`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler