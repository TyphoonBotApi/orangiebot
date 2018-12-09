const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!info') {
    	message.reply('Orangie 1.0 Made by Typhoon!');
  	}
});
    

client.on('message', message => {
   if (message.content.startsWith("why")) {
      message.channel.send('Becuase your mom gay');
   }
});

client.on('message', message => {
   if (message.content.startsWith("run node.js")) {
      message.channel.send('**Orangie 1.0 start up run branch?');
   }
});

client.on('message', message => {
   if (message.content.startsWith("master,web==off,worker==on")) {
      message.channel.send('Confirm Branch "master"?');
   }
});

client.on('message', message => {
   if (message.content.startsWith("confirm")) {
      message.channel.send('Repo boot up');
   }
});


client.on('message', message => {
   if (message.content.startsWith("Why")) {
      message.channel.send('Becuase your mom gay');
   }
});

 
 client.on('message', message => {
    if (message.content === '!channel') {
    	message.reply('https://www.youtube.com/channel/UCdWjwKFQo3cbsc4HYkqyWTA');
  	}
}); 

client.on('message', message => {
    if (message.content === 'Captain Midnight') {
    	message.reply('Gg,you found a Easter egg,Now what?Is there more to this?');
  	}
});


client.on('message', message => {
    if (message.content === 'What time is it?') {
    	message.channel.send('Tis be time for a crusade');
  	}
});
    	

client.on('message', message => { if (message.content.includes("fuck")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Fuck")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("bitch")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });
 
 client.on('message', message => { if (message.content.includes("Bitch")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("cunt")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Cunt")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("slut")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Slut")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("dick")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Dick")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });


client.on('message', message => { if (message.content.includes("pussy")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });


client.on('message', message => { if (message.content.includes("Pussy")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("retard")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Retard")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("nigga")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Nigga")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });
 
 client.on('message', message => { if (message.content.includes("nigger")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Nigger")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });
 


client.login(process.env.BOT_TOKEN);
