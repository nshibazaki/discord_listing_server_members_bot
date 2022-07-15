
//https://scrapbox.io/discordjs-japan/Gateway_Intents_%E3%82%92%E6%8C%87%E5%AE%9A%E3%81%99%E3%82%8B%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB
const { Intents, Client } = require("discord.js");
const { prefix, token } = require('./config.json');
const options = {
    ws: {
      intents: Intents.FLAGS.GUILDS | Intents.FLAGS.GUILD_MESSAGES | Intents.FLAGS.GUILD_PRESENCES,
    },
  };
const client = new Client(options);

client.once('ready', () => {
	console.log('Ready!');
});

// client.on('message', message => {
// 	if (message.content.startsWith(`${prefix}ping`)) {
// 		message.channel.send('Pong.');
// 	} else if (message.content.startsWith(`${prefix}beep`)) {
// 		message.channel.send('Boop.');
// 	}
// });

client.on('message', message => {
  if (message.content.startsWith(`${prefix}member_list`)) {
      // console.log(message.guild)
      // console.log(message.guild.members)
      // console.log(message.guild.members.cache)

      console.log('"表示名","username","userid","bot?"')
      message.guild.members.cache.forEach(member =>{
        console.log(`"${member.displayName}","${member.user.username}#${member.user.discriminator}","${member.id}","${member.user.bot}"`)
      })
      // message.channel.send(`${message.guild.name}サーバのメンバーリストをボットが起動中のマシンに出力しました`);
	} 
});

client.login(token)
