const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first());
    if(!rUser) return message.channel.send("formato incorrecto +dm @usuario mensaje");
     let mensaje = args.slice(1).join(" ");
	message.mentions.users.map(async user => {
		const member = message.guild.member(user);
		try { await user.send({
			embed: {
			color: 0xff0061 ,
      title: "**MENSAJE DE UN STAFF DE NEXT LEVEL**",
								url: "http://gamedev.es/",				
								
						fields: [{
								name: "Mensaje",
								value: mensaje,
						},            
          ]
			}
			});
		}
		catch (err) { console.log('error'); }
	});

	message.delete().catch(O_o=>{});
	
				
}	
       
module.exports.help = {
  name: "dm"
}
