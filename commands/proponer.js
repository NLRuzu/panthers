const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("formato incorrecto +proponer @usuario razón de la propuesta");
    let rreason = args.join(" ").slice(22);

    var proponer = {
							"embed": {
                                color: 0xffef52 ,
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.avatarURL
                                },
                                title: "**NUEVA PROPUESTA**",
								url: "http://gamedev.es/",				
								
						fields: [{
								name: "Usuario propuesto",
								value: `${rUser}`,
						},
						{
								name: "Fecha:",
								value: message.createdAt,
						},
						{
								name: "Razón de la propuesta:",
								value: rreason,
						}
						]

				
				
                            }
					};
let partidaschannel = message.guild.channels.find(`name`, "❓-propuestas");
       if(!partidaschannel) return message.channel.send("Introduce bien el comando");


      message.delete().catch(O_o=>{});
partidaschannel.send(proponer);

		}	

module.exports.help = {
  name: "proponer"
}
