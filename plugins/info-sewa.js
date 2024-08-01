let handler = async (m, {
    conn,
    text,
    args,
    command,
    usedPrefix 
}) => {
const list = `⋄ sᴇᴡᴀ galaxy4ʏᴏᴜ ᴍᴅ ⋄

[ 1 ] 8k / Minggu 
[ 2 ] 10k / bulan 
[ 3 ]  25k / 2bulan
[ 4 ]  35k /2 bulan + premium (30 hari)

 Via Dana: 083195893959
 Qris: minta owner
 
 Owner: wa.me/6283849469400
  
 *Note*: chat owner untuk sewa Bot
                   Bot selalu Ter Up To Date

 anda membeli = setuju 😃
`

conn.sendFile(m.chat, 'https://telegra.ph/file/cf1c9bce36f1890e1d458.jpg', '', list, m)
}
handler.help = handler.command = ['sewa','sewabot']
handler.tags = ['main']
export default handler