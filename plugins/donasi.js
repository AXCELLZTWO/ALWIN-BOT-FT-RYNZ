let handler = async m => m.reply(`
╭─「 Donasi 」
│ • FOLLOW www.instagram.com//axcellz_
│ •Selebih nya chat owner wa.me/6282327386917
│   •Mau buat bot sendiri? chat owner
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
