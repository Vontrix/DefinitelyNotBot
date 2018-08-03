const Discord = require('discord.js');
const client = new Discord.Client();

    static void UpdatePresence()
    {
        DiscordRichPresence discordPresence;
        memset(&discordPresence, 0, sizeof(discordPresence));
        discordPresence.details = "Currently running on Vontrix | Hacking";
        discordPresence.largeImageText = "Numbani";
        discordPresence.smallImageText = "Numbani";
        Discord_UpdatePresence(&discordPresence);
    }

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
