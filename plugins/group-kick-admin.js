let handler = async (m, { conn, args }) => {
let fs = require('fs')
let stc = fs.readFileSync('./media/Mintakick.webp')
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
  conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Nanti nangid*', 'status@broadcast')
}
handler.help = ['kick'].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(kick|\-)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler

