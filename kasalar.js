const Discord = require('discord.js');
const db = require('quick.db')
const kasalar = require('.././kasalar');

exports.run = async (client, message, args) => {
  
  const kasalarfilter = kasalar.filter(x => x.kasaid).map(x => `Kasa İsmi: **${x.isim}** Kasa fiyatı: **${x.fiyat}** İD: **${x.kasaid}**`).join('\n ')
  const revengecode = new Discord.MessageEmbed()
  .addField(`Kasa Listesi **Bot İsmi**`, `${kasalarfilter}`)
  .setFooter(`Bir kasa hakkında bilgi almak için: ${prefix}kasa-bilgi <kasaid>`)
  .setColor("RANDOM")
  message.channel.send(revengecode)
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'kasalar',
    description: 'Kasaları listeler.',
    usage: 'kasalar'
}
