const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-";
const moment = 'moment';
const { getInfoFromName } = require('myanimelists');
 client.on("message", message => {
if (message.content === `${prefix}help`) {

  const embed = new Discord.RichEmbed()
      .setColor("#36393e")
      .addField(`↬ | ${prefix}public`, `**Public commands**`)

      .addField(`↬ | ${prefix}status`, `**Statistics commands**`)

      .addField(`↬ | ${prefix}admin`, `**Admin command**`)
      
       .addField(`↬ | ${prefix}settings`, `**Settings command**`)
message.channel.send({embed});
}
});
 client.on("message", message => {
if (message.content === `${prefix}public`) {

  const embed = new Discord.RichEmbed()
      .setColor("#36393e")
      .addField(`↬ | ${prefix}avatar`, `**Give the profile picture of the mentioned user**`)
      .addField(`↬ | ${prefix}serverinfo`, `**Gives general server info**`)
      .addField(`↬ | ${prefix}bot`,`**Gives general bot info**`)
      .addField(`↬ | ${prefix}ascii`,`**Write any word with symbols**`)
      .addField(`↬ | ${prefix}ping`, `**Gives the bot ping**`)
      .addField(`↬ | ${prefix}afk`, `**To go in the AFK mode**`)
      .addField(`↬ | ${prefix}embed`, `**Ex. #embed RED Test**`)
      .addField(`↬ | ${prefix}whois`, `**Gives general info about you**`) 
message.channel.send({embed});
}
});

const afk = require('./afk.json');
      client.on('message',async rebel => {
            if(rebel.author.bot) return;
        if (afk[rebel.author.id]) {
          delete afk[rebel.author.id];
          if (rebel.member.nickname === null) {
            msg.channel.send("Welcome Back , <@"+rebel.author.id+"> Im **trying** to remove your AFK.");     } else {
            rebel.member.setNickname(rebel.member.nickname.replace(/(\[AFK\])/,''));
            rebel.channel.send("Welcome Back , <@"+rebel.author.id+"> Your AFK was removed.");
          }
          fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});
      } else {
          if (rebel.content.startsWith(prefix + 'afk ')||rebel.content === prefix + 'afk') {
            rebel.member.setNickname("[AFK] " + rebel.member.displayName);
            let args1 = rebel.content.split(' ').slice(1);
            if (args1.length === 0) {
              afk[rebel.author.id] = {"reason": true};
              rebel.reply("** Your now in afk mode **")
            } else {
              afk[rebel.author.id] = {"reason": args1.join(" ")}; // with reason
              rebel.reply("I put you in afk for "+ args1.join(" ") + ".")
            }
            fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});
        }
      }
               var mentionned = rebel.mentions.users.first();
      if(rebel.mentions.users.size > 0) return ;
      if (afk[rebel.mentions.users.first().id]) {
      if (afk[rebel.mentions.users.first().id].reason === true) {
      rebel.channel.send(`**<@!${mentionned.id}> Is AFK** `);
      }else{
      rebel.channel.send(`**<@!${mentionned.username}> AFK reason , AFK \n ${afk[rebel.mentions.users.first().id].reason}**`);
      }
      }
      });
﻿client.on("message", message => {
  if(message.content.startsWith(prefix + "avatar")){
  if(message.author.bot || message.channel.type == "dm") return;
  var avtmnt = message.mentions.users.first();
  var avt = avtmnt || message.author;
  var args = message.content.split(" ")[1];
  if(args == "server"){
  let avts = new Discord.RichEmbed()
  .setColor("#36393e")
  .setAuthor(`Server Avatar`, message.author.avatarURL)
  .setImage(message.guild.iconURL)
  .setFooter(`Animoo Bot.`, message.client.user.avatarURL);
  message.channel.send(avts);
  } else {
  let avtm = new Discord.RichEmbed()
  .setColor("#36393e")
  .setAuthor(`${avt.username}`, message.author.avatarURL)
  .setImage(avt.avatarURL)
  .setFooter(`Animoo Bot.`, message.client.user.avatarURL);
  message.channel.send(avtm);
  }
  }
  });


  client.on('message', message => {
    if(message.content === prefix + "whois"){
      var embed = new Discord.RichEmbed()
      .setTitle(message.author.tag, message.author.avatarURL)
      .addField(`User`, message.author.username)
      .addField(`Discrim`,`#`+ message.author.discriminator)
      .addField(`Game`,message.author.presence.game ||"Idel.")
      .addField(`Status`,message.author.presence.status)
      message.channel.send(embed);
    }
  });
client.on('message', message => {
   if(message.content.startsWith(prefix + "serverinfo")){
    message.channel.send({
	    embed: new Discord.RichEmbed()
	    .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
	    .setColor('RANDOM')
            .addField('Owner',`${message.guild.owner}`)
	    .addField('Region',`${message.guild.region}`)
            .addField('Text Channels',` ${message.guild.channels.filter(chan => chan.type === 'text').size}`)
            .addField('Voice Channels',`${message.guild.channels.filter(chan => chan.type ==='voice').size}`)
            .addField('Members',`${message.guild.memberCount}`)
            .addField('Humans',`${message.guild.memberCount}`, true)
	    .addField('Bots',`${message.guild.members.filter(m => m.user.bot).size}`)
	    .addField('Roles',`${message.guild.roles.size}`)
    })
}
});

client.on('message', message => {
	if (message.content === `${prefix}bot`) {
		if(!message.channel.guild) return;
		let embed = new Discord.RichEmbed()
		.setColor("#36393e")
		.addField("**↬ | Bot Ping**", `» ${client.ping}ms`)
		.addField("**↬ | Bot Users**", `» ${client.users.size}`)
		.addField("**↬ | Bot Maker**", '» <@350947930670104577>')
		.addField("**↬ | Bot Owner**", '» <@458397671816691713>')
	message.channel.sendEmbed(embed);
	}
});

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }
 });
 client.on('message', message => {
        if (message.content === "-inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)
        .setTitle(`Invite Link `)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=573953513135013888&permissions=8&scope=bot`)
        .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")
     message.channel.sendEmbed(embed);
       }
   });
client.on("message", message => {
  if(message.content.startsWith(prefix + "embed")) {


var color = message.content.split(" ")[1];
  var text = message.content.split(" ").slice(2);
    var tt = text.join(" ")
  if(!color) return message.reply("You should write the embed color");
    if(!tt) return message.reply("You should write the message");
  let embed = new Discord.RichEmbed()
  .setColor(color)
  .setDescription(tt)
  .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
  message.delete();
  message.channel.send(embed).catch(Omar =>{console.log('`Error`: ' + Omar);
message.channel.send("`Error`:" + Omar)
    })
  }
  });

var figlet = require('figlet');
client.on('message', edward => {
    if(!prefix) var prefix = '-';
    var commandedward = "ascii";
    if (edward.content.startsWith(prefix + commandedward)) {
    if (!edward.channel.guild) return;
    var argsedward = edward.content.split(" ").slice(1).join(" ");
    if (!argsedward) return edward.channel.send(`**Hey There , Type SomeThing to ASCII** 🌦.`);
figlet(argsedward, function(err, dataed) {
    if (err) {
        edward.channel.send(`\`\`\`apache\nErr; ${err}\`\`\``);
        }
    var edwardhere = "";
    var edwardem = new Discord.RichEmbed()
    .setColor(edward.member.displayHexColor || "36393e")
    .setAuthor(`${commandedward} Service;`,edward.author.avatarURL || edward.author.defaultAvatarURL)
    .setDescription(`Animoo Bot\`\`\`fix\n${dataed} ${edwardhere}\`\`\``)
    .setThumbnail(edward.guild.iconURL || edward.author.displayAvatarURL)
    .setTimestamp()
    .setFooter(client.user.username,client.user.avatarURL || client.user.defaultAvatarURL);
if (argsedward.length <= 6){
    edward.channel.send(edwardem);
        }
if (argsedward.length >= 7){
    edward.channel.send(`\`\`\`fix\n${dataed}\`\`\``);
     }

})}});
client.on("message", message => {
if (message.content === `${prefix}admin`) {
  const embed = new Discord.RichEmbed()
      .setColor("#36393e")
      .addField(`# | ${prefix}kick`,`**Kick the mentioned member from the server**`)
      .addField(`# | ${prefix}ban`, `**Ban the mentioned member from the server**`)
      .addField(`# | ${prefix}open/close`, `**Open or close the chat**`)
      .addField(`# | ${prefix}setnick`, `**To set a nickname for a member**`)
      .addField(`# | ${prefix}vmute`, `**To server mute a user in a vc**`)
      .addField(`# | ${prefix}vunmute`, `**To server unmute a use in a vc**`)
      .addField(`# | ${prefix}rolehelp`, `**Show you the role help list**`)
      .addField(`# | ${prefix}clear 1-100`, `**Clear the amount of messages that you want**`)
message.channel.send({embed});
}
});

﻿client.on("message", message => {
if(message.content.startsWith(prefix + "setnick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`**• | Usage:** ${prefix}setnick \`\`@Name\`\` nickname`);
if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`⛔ | I cant change **${user.user.username}**'s nickname because his role highest than my role!`);
message.guild.member(user.user).setNickname(`${nick}`).then(() => {
message.channel.send(`Successfully changed **${user.user.username}** nickname to **${nick}**`)
}).catch(console.error);
}
});


  var adminprefix = '-'
  const developers = ["350947930670104577","458397671816691713"];

  client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + 'game')) {
    client.user.setGame(argresult);
      message.channel.send(`**Game Set : ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'watch')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Watching : ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'listen')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Listening : ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'stream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/HypixelStudio");
      message.channel.send(`Streaming is available now`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
  } else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
  }
  });


client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**Mention the user**");
  if(!reason) return message.reply ("**Write the ban reason**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I cant ban a member who is higher than me **");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});



      client.on("message", message => {
        if(message.content.startsWith(prefix + "vmute")) {
        var mnt = message.mentions.members.first();
        if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
        if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}vmute \`\`@Name\`\``);
        if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
        mnt.setMute(true).then(() => {
        message.channel.send(`Successfully Muted ${mnt} :+1:`)
        }).catch(console.error);
        }
        if(message.content.startsWith(prefix + "vunmute")) {
        var mnt = message.mentions.members.first();
        if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
        if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}unvmute \`\`@Name\`\``);
        if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
        mnt.setMute(false).then(() => {
        message.channel.send(`Successfully Unmuted ${mnt} :+1:`)
        }).catch(console.error);
        }
        });

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention the user**");
  if(!reason) return message.reply ("**Write the kick reason**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I cant kick a member who is higher than me**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
client.on('message', message => {
	if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) {
	if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!');
		if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || The messages number should be less than 100**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __Number of deleted messages __ `).then(messages => messages.delete(5000));
  }
  });
  client.on('message', message => {
	if (message.author.bot) return;
if (message.content.startsWith(prefix + 'close')) {
        if (!message.channel.guild) return message.reply('** This command only for servers**');

        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__You Dont Have Perms__**');
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false


        }).then(() => {
            message.reply("**__Closed The Chat Successfully__ :white_check_mark: **")
        })
        }
    });
client.on('message', message => {
	if (message.author.bot) return;
if (message.content.startsWith(prefix + 'open')) {
        if (!message.channel.guild) return message.reply('** This command only for servers**');

        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__You Dont Have Perms__**');
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

        }).then(() => {
            message.reply("**__Opened The Chat Successfully__:white_check_mark:**")

          })
        }
    });

client.on('message', message => {
if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("To use this command do : -move [USER]")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`:white_check_mark: <@${usermentioned}> Moved. `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``I cant move "+ message.mentions.members.first() +" `This member isn't in a vc`")
}
} else {
 message.channel.send("**``The user that you want to move should be in a vc``**")
}
} else {
message.react("❌")
 }}});
 client.on("message", message => {
if (message.content === `${prefix}rolehelp`) {

  const embed = new Discord.RichEmbed()
      .setColor("#36393e")
      .addField(`# | ${prefix}role all [Role]`, `Roles everything with a specific role`)
      .addField(`# | ${prefix}role humans [Role]`, `Roles the users with a specific role`)
      .addField(`# | ${prefix}role bots [Role]`,`Roles the bots with a specific role`)
      .addField(`# | ${prefix}role @user [Role]`, `Roles a specific member with a specific role`)
message.channel.send({embed});
}
});

client.on("message", message => {
	var prefix = "-";
	var args = message.content.split(' ').slice(1);
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__You dont have permissions__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: Please mention the member**' );
		if( !args[1] ) return message.reply( '**:x: Please mention the role**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase();
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
		if( !role1 ) return message.reply( '**:x: Please mention the role**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: Role : [ '+role1.name+' ] was removed from [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] was removed from everyonr**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] was removed from the bots**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] was removed from the users**');
		}
	} else {
		if( !args[0] ) return message.reply( '**:x: Please mention the member**' );
		if( !args[1] ) return message.reply( '**:x: Please mention the role**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase();
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
		if( !role1 ) return message.reply( '**:x: Please mention the member**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: Role : [ '+role1.name+' ] was given for [ '+args[0]+' ] **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] was given for everyone**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] was given for the bots**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] was given for the users**');
		}
	}
});

client.on("message", message => {
if (message.content === `${prefix}status`) {

  const embed = new Discord.RichEmbed()
      .setColor("#36393e")
      .addField(`↬ | ${prefix}animeinfo`,`**Gives general info about any anime**`) 
      .addField(`↬ | ${prefix}fortnite`, `**Gives general fortnite player info**`)
      .addField(`↬ | ${prefix}skin`,`**Show any minecraft player's skin**`)
      .addField(`↬ | ${prefix}apex`,`**Gives general apexlegends player info**`)
      .addField(`↬ | ${prefix}movie`, `**Gives general movie info**`)
message.channel.send({embed});
}
});
const apex = require('apexlegends')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', async msg => {
  const args = msg.content.slice(prefix.length).split(/ +/g);
  const cmd = args.shift();
  if (cmd === `apex`) {
    let [name, platform, ...rest] = args;
    let page = 0;
    const apexy = async (playerName, playerPlatform) =>{
      if(!["pc", "psn", "xbox"].includes(playerPlatform)) return msg.reply("I cant find this platform\n Available Platforms:\n`pc`\n`psn`\n`xbox`");
      const data = await apex('06c17ca1-f06a-4d6d-b3e3-c1aad509076f', playerPlatform, playerName);
      if(data === undefined) return msg.reply("I cant find this player");
      const embed = new Discord.RichEmbed()
        .setAuthor(`Player: ${data.metadata.platformUserHandle}`)
        .addField(`Level:`, `\`${data.stats.filter(stat=> stat.metadata.key === "Level")[0].displayValue}\``, true)
      if(data.stats.map(stat=> stat.metadata.key === "Kills").includes(true)) embed.addField(`Overall Kills:`, `\`${data.stats.filter(stat=> stat.metadata.key === "Kills")[0].displayValue}\``, true)
      if(data.stats.map(stat=> stat.metadata.key === "Damage").includes(true)) embed.addField(`Damage:`, `\`${data.stats.filter(stat=> stat.metadata.key === "Damage")[0].displayValue}\``, true)
      if(data.stats.map(stat=> stat.metadata.key === "MatchesPlayed").includes(true)) embed.addField(`Matches Played:`, `\`${data.stats.filter(stat=> stat.metadata.key === "MatchesPlayed")[0].displayValue}\``, true)
      if(data.stats.map(stat=> stat.metadata.key === "KillsPerMatch").includes(true)) embed.addField(`Kills Per Match:`, `\`${data.stats.filter(stat=> stat.metadata.key === "KillsPerMatch")[0].displayValue}\``, true)
      if(data.stats.map(stat=> stat.metadata.key === "DamagePerMatch").includes(true)) embed.addField(`Damage Per Match:`, `\`${data.stats.filter(stat=> stat.metadata.key === "DamagePerMatch")[0].displayValue}\``, true)
      if(data.stats.map(stat=> stat.metadata.key === "Kills" && stat.displayRank !== "").includes(true)) embed.addField(`Overall Kills Rank:`, `\`${data.stats.filter(stat=> stat.metadata.key === "Kills")[0].displayRank}\``, true)
      if(data.stats.map(stat=> stat.metadata.key === "Damage" && stat.displayRank !== "").includes(true)) embed.addField(`Damage Rank:`, `\`${data.stats.filter(stat=> stat.metadata.key === "Damage")[0].displayRank}\``, true)
      if(data.stats.map(stat=> stat.metadata.key === "MatchesPlayed" && stat.displayRank !== "").includes(true)) embed.addField(`Matches Played Rank:`, `\`${data.stats.filter(stat=> stat.metadata.key === "MatchesPlayed")[0].displayRank}\``, true)
      if(data.stats.map(stat=> stat.metadata.key === "KillsPerMatch" && stat.displayRank !== "").includes(true)) embed.addField(`Kills Per Match Rank:`, `\`${data.stats.filter(stat=> stat.metadata.key === "KillsPerMatch")[0].displayRank}\``, true)
      if(data.stats.map(stat=> stat.metadata.key === "DamagePerMatch" && stat.displayRank !== "").includes(true)) embed.addField(`Damage Per Match Rank:`, `\`${data.stats.filter(stat=> stat.metadata.key === "DamagePerMatch")[0].displayRank}\``, true)
      if(embed.fields.length / 3 % 2) embed.addBlankField(true);
      let pages = [embed];
      for(key in data.children){
        let legend = data.children[key];
        const legend_embed = new Discord.RichEmbed()
          .setAuthor(`${legend.metadata.legend_name}'s Stats`)
        if(legend.stats.map(stat=> stat.metadata.key === "Kills").includes(true) || (legend.stats.metadata && legend.stats.metadata.key === "Kills")) legend_embed.addField(`Overall Kills:`, `\`${legend.stats.filter(stat=> stat.metadata.key === "Kills")[0].displayValue}\``, true)
        if(legend.stats.map(stat=> stat.metadata.key === "Damage").includes(true) || (legend.stats.metadata && legend.stats.metadata.key === "Damage")) legend_embed.addField(`Damage:`, `\`${legend.stats.filter(stat=> stat.metadata.key === "Damage")[0].displayValue}\``, true)
        if(legend.stats.map(stat=> stat.metadata.key === "MatchesPlayed").includes(true) || (legend.stats.metadata && legend.stats.metadata.key === "MatchesPlayed")) legend_embed.addField(`Matches Played:`, `\`${legend.stats.filter(stat=> stat.metadata.key === "MatchesPlayed")[0].displayValue}\``, true)
        if(legend.stats.map(stat=> stat.metadata.key === "KillsPerMatch").includes(true) || (legend.stats.metadata && legend.stats.metadata.key === "KillsPerMatch")) legend_embed.addField(`Kills Per Match:`, `\`${legend.stats.filter(stat=> stat.metadata.key === "KillsPerMatch")[0].displayValue}\``, true)
        if(legend.stats.map(stat=> stat.metadata.key === "DamagePerMatch").includes(true) || (legend.stats.metadata && legend.stats.metadata.key === "DamagePerMatch")) legend_embed.addField(`Damage Per Match:`, `\`${legend.stats.filter(stat=> stat.metadata.key === "DamagePerMatch")[0].displayValue}\``, true)  
        if(legend.stats.map(stat=> stat.metadata.key === "Headshots").includes(true) || (legend.stats.metadata && legend.stats.metadata.key === "Headshots")) legend_embed.addField(`Headshots:`, `\`${legend.stats.filter(stat=> stat.metadata.key === "Headshots")[0].displayValue}\``, true)  
        pages.push(legend_embed);
      };
      pages[page].setFooter(`Page ${page+1} of ${pages.length}`);
			msg.channel.send(pages[page]).then(async page0=>{
				await page0.react(`◀`);
        await page0.react(`▶`);
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === msg.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === msg.author.id;
        const backwards = page0.createReactionCollector(backwardsFilter, {time: 120000});
        const forwards = page0.createReactionCollector(forwardsFilter, {time: 120000});
        backwards.on("collect", r=>{
          r.remove(msg.author);
          if(page <= 0) return;
          page--;
          let newPage = pages[page];
          newPage.setFooter(`Page ${page+1} of ${pages.length}`);
          newPage.author ? newPage.setImage(data.children[data.children.map(legend => legend.metadata.legend_name === newPage.author.name.split("'")[0]).indexOf(true)].metadata.icon) : null;
          page0.edit(newPage);
        })
        forwards.on("collect", r=>{
          r.remove(msg.author);
          if(page+1 === pages.length) return;
          page++;
          let newPage = pages[page];
          newPage.setFooter(`Page ${page+1} of ${pages.length}`);
          newPage.author ? newPage.setImage(data.children[data.children.map(legend => legend.metadata.legend_name === newPage.author.name.split("'")[0]).indexOf(true)].metadata.icon) : null;
          page0.edit(newPage);
        });
      });

    };
    if(name && platform) apexy(name, platform);
    else return msg.reply(`Please provide the name of the player with thid command:\n${prefix}apex {Platform} {Player Name}`)
  };
});


client.on("message", message => {
    const Client = require('fortnite') //npm i fortnite 
    const fortnite = new Client("dfd2877d-2ebf-4629-8ecf-2e93d5b12886")
    let msg = message;
    if (message.content.startsWith(prefix + "fortnite")) {
        message.delete();
        message.channel.send(`${msg.author}, What's the player's name?`).then(msgs => {
            const filter = response => response.author.id === msg.author.id;
            msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
                .then(collected1 => {
                    msgs.edit(`${msg.author}, What platform`)
                    const filter = response => response.author.id === msg.author.id;
                    let username = collected1.first()
                    collected1.first().delete();
                    msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
                        .then(collected2 => {
                            const platform = collected2.first()
                            if (platform != 'pc' && platform !== 'xbox' && platform !== 'ps4') return message.channel.send('Platform name wrote with small letters, please try again.')
                            collected2.first().delete();
                            msgs.delete();
                            let data = fortnite.user(`${username}`, `${platform}`).then(data => {
                                let lifetime = data.stats.lifetime;
                                let wins = lifetime.wins
                                let kills = lifetime.kills
                                let kd = lifetime.kd
                                let matchesplayed = lifetime.matches
                                let embed = new Discord.RichEmbed()
                                    .addField('Name', data.username, true)
                                    .addField('Platform', data.platform, true)
                                    .addField('Wins', wins, true)
                                    .addField('Kills', kills, true)
                                    .addField('Matches Played', matchesplayed, true)
                                    .addField('K/D', kd, true)
                                    .setColor('#FFFFFF')
                                message.channel.send(embed)
                            })
                        })
                })
        })
    }
});
client.on('message', message => {
  const aa = message.content.split(" ").slice(1).join(" ");
  if(message.content.startsWith(prefix + "skin")){
    if(!aa) return message.reply(`:x:  -  **${prefix}skin <name>**`);
    var ss = new Discord.RichEmbed()
    .setTitle(`${aa}'s Skin!`)
    .setURL(`https://minotar.net/armor/body/${aa}/100.png`)
    .setThumbnail(`https://minotar.net/avatar/${aa}`)
    .setImage(`https://minotar.net/armor/body/${aa}/100.png`)
    .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(ss);
  }
});
var movie = require('movie-info')
client.on("message", async (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    var args = message.content.slice(prefix.length).split(" ");
    var command = args[0];
    switch (command) {
        case "movie":
            if (!args[1]) return message.reply(`** ${prefix}movie <movie name> **`);
            movie(args.slice(1).join(" "), async (error, res) => {
                if (error) {
                    message.reply("** Cannot find this movie **");
                    return undefined;
                }
                var movieEmbed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle(res.title)
                .setAuthor(client.user.username, client.user.avatarURL)
                .addField("Popularity", res.popularity, true)
                .addField("Vote average", res.vote_average, true)
                .addField("Vote count", res.vote_count, true)
                .addField("Release date", res.release_date, true)
                .addField("ID", res.id, true)
                .addField("Adult only", res.adult ? "Yup" : "Nope", true)
                .setThumbnail(`${res.imageBase}/${res.poster_path}`)
                .setFooter(`By request of ${message.author.tag}`, message.author.displayAvatarURL);
                message.channel.send({
                    embed: movieEmbed
                });
            });
        break;
    }
});
client.on('message', message => {
            let anime = message.content.split(" ").slice(1).join(" ")
            if(message.content.startsWith(prefix + 'animeinfo')) {
                if(!anime) return message.channel.send('Please Write The Anime Name Example: -anime dragon ball')
            getInfoFromName(anime)
                .then(result => {
                    let embed = new Discord.RichEmbed()
                .setTitle(result.title)
                .addField('Trailer:', `${result.trailer}` || `Unknown`)
                .addField('Episodes:', `${result.episodes}` || `Unknown`)
                .addField('Status:', `${result.status}` || `Unknown`)
                .addField('Studios:', `${result.studios}` || `Unknown`)
                .addField('Genres:', `${result.genres}` || `Unknown`)
                .addField('Ranked:', `${result.ranked}` || `Unknown`)
                .addField('Favorites', `${result.favorites}` || `Unknown`)
                .addField('Rating:', `${result.rating}` || `Unknown`)
                .addField('Premiered:', `${result.premiered}` || `Unknown`)
                .addField('Duration:', `${result.duration}` || `Unknown`)
                .addField('Score:', `${result.score}` || `Unknown`)
                .addField('Scored By:', `${result.scoreStats} ` || `Unknown`)
                .setDescription(`${result.synopsis || 'Unknown'}`)
                .setImage(result.picture)
                .setColor('#0a0000')
                message.channel.sendEmbed(embed)
                })
                .catch(error => console.log(error));
            }})
client.on("message", message => {
if (message.content === `${prefix}settings`) {

  const embed = new Discord.RichEmbed()
      .setColor("#36393e")
      .addField(`↬ | Soon`, `**Soon**`)
 
message.channel.send({embed});
}
});


    client.login("process.inv.TOKEN");
    
