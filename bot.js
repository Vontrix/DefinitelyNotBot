client.on('ready', () => {
    console.log('The bot is successfully running, great job! :)');

});

// Event to listen to messages sent to the server where the bot is located
client.on('message', message => {
	// So the bot doesn't reply to iteself
	if (message.author.bot) return;
	
	// Check if the message starts with the `!` trigger
	if (message.content.indexOf('~') === 0) {
		// Get the user's message excluding the `!`
		var text = message.content.substring(1);
		
		// Reverse the message
		var reversed = '';
		var i = text.length;
		
		while (i > 0) {
			reversed += text.substring(i - 1, i);
			i--;
		}
		
		// Reply to the user's message
		message.reply(reversed);
	  }
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
