let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0812-3877-2258]
│ •  [0813-3901-3587]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
