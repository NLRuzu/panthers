const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const botconfig = require("./botconfig.json");
let ft = "+";


// COMMANDS // 
fs.readdir("./commands/", (err, files) => {
 
  if(err) console.log(err);
 
  let jsfile = files.filter(f => f.split(".").pop() == "js")
  if(jsfile.length <= 0){
    console.log("No se encuentra el comando");
    return
  }
 
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} cargado`);
    bot.commands.set(props.help.name, props);
  });
 
});
 
// MENSAJE DE BIENVENIDA NUEVOS USUARIOS //
bot.on("guildMemberAdd", async member => {
	

  console.log(`${member.id} ha entrado al server `);
            
  let welcomechannel = member.guild.channels.find(`name`, "📈-entradas");
    let embed = { embed: {
                color: 0x04ff00,
                title: "Hola bienvenido a la Hermandad BloodBrothers.",
                description: '**Antes de nada tienes que verificar tu cuenta, para ello tendrás que ir a la sala <#589084546054619166> y escribir +solicitar. \nTendrás que esperar a que un STAFF te verifique y tengas acceso a todas las salas. \nPara mejorar tu experiencia aquí puedes usar el comando +help en la sala <#588369336226283520> y ver que puedes hacer.**', 
            }
    };
  
  welcomechannel.send(`**Bienvenido: Nuevo miembro ${member} a la hermandad**`, embed)

    member.send({
        embed: {
                color: 0x04ff00,
               title: "Hola bienvenido a la Hermandad BloodBrothers.",
                description: '**Antes de nada tienes que verificar tu cuenta, para ello tendrás que ir a la sala <#589084546054619166> y escribir +solicitar. \nTendrás que esperar a que un STAFF te verifique y tengas acceso a todas las salas. \nPara mejorar tu experiencia aquí puedes usar el comando +help en la sala <#588369336226283520> y ver que puedes hacer.**',  
                
            }
        });
 });

// MENSAJE DE ABANDONO DE USUARIOS
bot.on("guildMemberRemove", async member => {
  console.log(`${member.nickname} ha abandonado la hermandad `);
 
  let welcomechannel = member.guild.channels.find(`name`, "📉-abandonos");
  welcomechannel.send({
               embed: {
                        color: 0xe52121,
                        title: "**HA ABANDONADO**",
		       	url: "http://gamedev.es/",
                        description: `${member} ha abandonado la hermandad`,
                    }
                });
});

// ROL DE ENTRADA AL SERVIDOR - NO VERIFICADO //
bot.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "❎ NO VERIFICADO");
    member.addRole(role).catch(console.error);
});







// LISTA DE COMANDOS
bot.on("message", (message) => {



// +RESTART // SOLO OWNER
if (message.author.id == "298029791708315649") { 	// CREATOR COMMANDS

		if (message.content.startsWith(ft + "restart")) {			// 	[FUNCIONANDO] 		&restart					= Reinicia el proceso el bot por completo (Precaucion)
				message.channel.send(":robot: Reiniciando el bot");
				setTimeout(function(){
					child.kill();
				},1000);
			}

	} // END CREATOR COMMANDS
	
// REACCION EMOJI SALA PROPUESTAS //


	// REACCION EMOJI SALA MITICAS //
if (message.channel.id == "561538721653063690" && message.author.bot) {
    message.react("588995914258186240");
    message.react("588995906817228841");
    message.react("588995898067910668");
	}
	
	// REACCION EMOJI SALA RAID //
if (message.channel.id == "588370763409784842" && message.author.bot) {
   message.react("588995914258186240");
    message.react("588995906817228841");
    message.react("588995898067910668");
	}
	
	
 // REACCION EMOJI SALA SUGERENCIAS //
if (message.channel.id == "561540728422137866" && message.author.bot) {
                    message.react("561539430985236500");
                    message.react("561539448836456448");
                }	

if (message.content.startsWith(ft + "help")) {
	  let sicon = message.guild.iconURL;
	  let serverembed = new Discord.RichEmbed()
	  .setTitle("**GENERALES**")
	  .setColor("#ff0025") 
	  .setThumbnail(sicon)
	  .addField("**+sugerencia descripción**", "Añade una sugerencia")
	  .addField("**+musica**", "Comandos de uso de los bot musicales")
	  .addField("**+afijos**", "Nos muestra los afijos de míticas+ activos esta semana")
	  .addField("**+mitica \"Descripción\" \"Día y Hora\"**", "Mensaje de búsqueda de mítica organizada. escribir en <#561300365304397835>")
	  .addField("**+raid \"Descripción\" \"Día y Hora\"**", "Mensaje de búsqueda de raid organizada. escribir en <#588370763409784842>")
	  .addField("**+busco descripción**", "Mensaje de búsqueda personal para jugar. Importante estar en una sala de voz y escribir en <#561532607108743229>");
	  
	bot.channels.get("588369336226283520").send(serverembed);
	  }

if (message.channel.id == message.channel.id) { 				    // COMANDOS GENERALES

	
	
	

		
	if (message.content.startsWith(ft + "sugerencia")) {
		var comunicado = message.content.replace("+sugerencia ", "");
		var embebido = {
                          "embed": {
                              color: 0xff0025 ,
                              author: {
                                  name: message.author.tag,
                                  icon_url: message.author.avatarURL
                              },
                              title: "**NUEVA SUGERENCIA**",
              url: "http://gamedev.es/",

              description: comunicado,
              timestamp: message.createdAt,
                          }
                  };
			 
			  bot.channels.get("561540728422137866").send(embebido);
              message.delete().catch(O_o=>{});
      }	
			
	if (message.content.startsWith(ft + "mitica")) {  //  +quedada "Nick1" "Nick2"     = Participantes del torneo
			var args = [];
			var texto = message.content;
			try{
				while(texto.includes("\"")){
					texto = texto.substr(texto.indexOf("\"")+1);
					args.push(texto.substring(0,texto.indexOf("\"")));
					texto = texto.substr(texto.indexOf("\"")+1);
				}
			}
			catch(err){
				message.channel.send("+mitica \"Descripción\" \"Día y Hora\"");
				return;
			}
			let server = bot.guilds.get("561212531058933771");
			let adminRoleObject = server.roles.find("name", "BLOODBROTHERS");
			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let disponible = args[2];
			var apuntarme = {
				"embed": {
					color: 0xff0025 ,
					"image": {
				     		 "url": "https://i.imgur.com/HhMGvPL.png"
				   			 },
					title: "**NUEVA MÍTICA PROPUESTA**",
					url: "http://gamedev.es/",				

					fields: [
						{
						name: "📜 Descripción",
						value: NickParticipante1,
						},
						{
						name: "📆 Día y Hora",
						value: NickParticipante2,
						}
									 						
					]
				}
			};


			let torneochannel = bot.channels.get("561538721653063690").send(`[${adminRoleObject}]`, apuntarme);
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			
		}
	
	if (message.content.startsWith(ft + "raid")) {  //  +quedada "Nick1" "Nick2"     = Participantes del torneo
			var args = [];
			var texto = message.content;
			try{
				while(texto.includes("\"")){
					texto = texto.substr(texto.indexOf("\"")+1);
					args.push(texto.substring(0,texto.indexOf("\"")));
					texto = texto.substr(texto.indexOf("\"")+1);
				}
			}
			catch(err){
				message.channel.send("+raid \"Descripción\" \"Día y Hora\"");
				return;
			}
			let server = bot.guilds.get("561212531058933771");
			let adminRoleObject = server.roles.find("name", "BLOODBROTHERS");
			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let disponible = args[2];
			var apuntarme = {
				"embed": {
					color: 0xff0025 ,
					"image": {
				     		 "url": "https://i.imgur.com/dNWATTa.png"
				   			 },
					title: "**NUEVA RAID PROGRAMADA**",
					url: "http://gamedev.es/",				

					fields: [
						{
						name: "📜 Descripción",
						value: NickParticipante1,
						},
						{
						name: "📆 Día y Hora",
						value: NickParticipante2,
						}
									 						
					]
				}
			};


			let torneochannel = bot.channels.get("588370763409784842").send(`[${adminRoleObject}]`, apuntarme);
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			
		}
	
	
			  
} //FIN DE COMANDOS GENERALES
 
 
 

	
				  

    if (message.content.startsWith(ft + "comunicar")) {        //  +comunicar mensaje  = Enviamos un comunicado en una sala concreta
		  if(message.member.roles.find("name", "ADMIN") || message.member.roles.find("name", "GM")){
		  var comunicado = message.content.replace("+comunicar ", "");  
		  let adminRoleObject = message.guild.roles.find("name", "BLOODBROTHERS");
			var embebido = {
					  "embed": {
										"color":  0xff0025,
						  "image": {
				     		 "url": "https://i.imgur.com/Tc5nDFH.png"
				   			 },
										author: {
											name: message.author.tag,
											icon_url: message.author.avatarURL
										},
										title: "**NUEVO COMUNICADO**",
										url: "http://gamedev.es/",				
										footer: {
											  text: message.guild.name
											},
										description: comunicado,
										timestamp: message.createdAt,								
									}
									};
			
			

			message.delete().catch(O_o=>{});
			bot.channels.get("561253163097653278").send(`[${adminRoleObject}]`, embebido);

			}
		}

	if (message.content.startsWith(ft + "verificar")) {        //  +verificar @user   = Verificamos a un usuario
            message.delete();
      if(message.member.roles.find("name", "ADMIN") || message.member.roles.find("name", "GM") || message.member.roles.find("name", "CO-GM") || message.member.roles.find("name", "OFICIAL")){
                let rUser = message.guild.member(message.mentions.users.first()).catch(console.error);
                let role = message.guild.roles.find("name", "BLOODBROTHERS").catch(console.error);
                let role2 = message.guild.roles.find("name", "❎ NO VERIFICADO").catch(console.error);
                let guild = bot.guilds.get("559319996162113537").catch(console.error);
                message.member.addRole(role).catch(console.error);
                message.member.removeRole(role2).catch(console.error);
                User.send({
                    embed: {
                        color: 0x04ff00,
                        title: "**HAS SIDO VERIFICADO**",
			                  url: "http://gamedev.es/",
                        description: "**¡Enhorabuena! has sido verificado, ahora puedes ver todo el contenido del servidor. \n\nPara más información accede al canal de texto <#561212531868303379>.**",
                    }
                });
				
			
                bot.channels.get("589083868674392065").send({
                    embed: {
						author: {
							name: message.author.tag,
							icon_url: message.author.avatarURL
						},
                        color: 0x04ff00,
                        description: "**Ha verificado a **" + User + " **correctamente**",
                    }

                })

            }
      }
	

	

	
		


	if (message.content.startsWith(ft + "infonormas")) {       //  +infonormas   = Envía toda la información sobre las normas canal INFO
			let embed = {
			"embed": {
						
                        color:  0xff0025,
						footer: {
									  "text": message.guild.name
									},
						"image": {
				     		 "url": "https://i.imgur.com/ETieOPR.png"
				   			 },
						title: 'INFORMACIÓN SOBRE LA NORMATIVA DE LA HERMANDAD',
						url: "http://gamedev.es/",
                        description: '**A Continuación habrá una serie de reglas que todo usuario que se una a este Discord deberá seguir.**',
						fields: [
							{
							name: ":one:",
							value: `╚> No hacer spam de tu canal de Youtube/Twitch/Discord o cualquier web. También incluye spam de mensajes o emojis.`,
							},	
							{
							name: ":two:",
							value: `╚> No faltar el respeto o ser una persona tóxica hacia el resto los usuarios de la comunidad, si te calientas en una partida es mejor desconectar un rato y despejarse.`,
							},
							{
							name: ":three:",
							value: `╚> No se permite el flood o spam en ningún canal.s de advertencia.`,
							},
							{
							name: ":four:",
							value: `╚> No se permite poner links de webs o contenido +18.`,
							},
							{
							name: ":five:",
							value: `╚> No utilizar chetos.`,
							},
							{
							name: ":six:",
							value: `╚> No discriminar a nadie en base a su raza, origen étnico, nacionalidad, género o posición económica. y mucho menos nivel de juego. Todos empezamos alguna vez, recuérdalo.`,
							},
							{
							name: ":seven:",
							value: `╚> Todos los comandos se escriben en la sala <#588369336226283520>.`,
							}
							
							
							
							
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
		}
	
	
	
	


if (message.content.startsWith(ft + "solicitar")) {
  let rUser = message.guild.member;
  if(!rUser) return message.channel.send("formato incorrecto +solicitar");

  let reportEmbed = new Discord.RichEmbed()
  .setTitle("NUEVA PETICIÓN DE ACCESO")
  .setColor("#52a255")
  .addField("Solicitante:", `${message.author}`)
  .addField("Fecha:", message.createdAt)

  let reportschannel = message.guild.channels.find(`name`, "❎-solicitar");
  if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
  }  
	
	
	if (message.channel.id == message.channel.id) { 	// COMANDOS DE MUSICA BOTS

if (message.content.startsWith(ft + "musica")) {         //  BOT MUSICAS
	 let adminRoleObject = message.guild.roles.find("name", "BLOODBROTHERS");	
			let embed1 = {
				"embed": {
				    "title": "LISTA DE COMANDOS BOT MÚSICA",
				    "color": 13041408,
				    "timestamp": "2019-04-29T12:14:55.011Z",
				    "footer": {
				      "icon_url": "https://i.imgur.com/7mJTWso.png",
				      "text": "Hermandad BloodBrothers"
				    },
				    "thumbnail": {
				      "url": "https://i.imgur.com/7mJTWso.png"
				    },
				    "image": {
				      "url": "https://i.imgur.com/l6jZidP.png"
				    },
				    "fields": [
				      {
					"name": "!play nombre de la canción o link",
					"value": "Reproduce una canción y si ponemos muchas seguidas se añaden a una lista de reproducción"
				      },
				      {
					"name": "!pause y !stop",
					"value": "Para una canción o la deja en pause"
				      },
				      {
					"name": "!loop",
					"value": "Ponemos en reprodución en ciclo la lista de reproducción"
				      },
				      {
					 "name": "!leave y !skip",
					"value": "El primero hace que se marche el bot de nuestra sala y el segundo hace pasar a la siguiente canción"  
				      }

				    ]
					}
				  };	
				let embed2 = {
				"embed": {
				    "title": "LISTA DE COMANDOS BOT MÚSICA 2",
				    "color": 13041408,
				    "timestamp": "2019-04-29T12:14:55.011Z",
				    "footer": {
				      "icon_url": "https://i.imgur.com/7mJTWso.png",
				      "text": "Hermandad BloodBrothers"
				    },
				    "thumbnail": {
				      "url": "https://i.imgur.com/7mJTWso.png"
				    },
				    "image": {
				      "url": "https://i.imgur.com/BTi6Es7.png"
				    },
				    "fields": [
				      {
					"name": "-play nombre de la canción o link",
					"value": "Reproduce una canción y si ponemos muchas seguidas se añaden a una lista de reproducción"
				      },
				      {
					"name": "-pause y -stop",
					"value": "Para una canción o la deja en pause"
				      },
				      {
					"name": "-loop",
					"value": "Ponemos en reprodución en ciclo la lista de reproducción"
				      },
				      {
					 "name": "-leave y -next",
					"value": "El primero hace que se marche el bot de nuestra sala y el segundo hace pasar a la siguiente canción"  
				      }

				    ]
					}
				  };	
				
	message.channel.send(`[${adminRoleObject}]`, embed1);
	message.channel.send(embed2);
	
	
	
}
}
if (message.content.startsWith(ft + "afijos")) {       //  afijos semanales
	let server = bot.guilds.get("561212531058933771");
	let adminRoleObject = server.roles.find("name", "BLOODBROTHERS");	
	let embed = {
			"embed": {
						
                        color:  0xff0025,
						
						title: 'AFIJOS DE ESTA SEMANA',
						url: "http://gamedev.es/",
						fields: [
        { name: " 💥Estos son los afijos esta semana💥", value: "Reforzada\nPotenciante\nInquieta\nSegadora", inline: true},
 	
      ]
                    }
			};	
  
	 message.delete().catch(O_o=>{});
	bot.channels.get("589072830021238793").send(`[${adminRoleObject}]`, embed);
  
		}
	
	

	
	
	if(message.content.startsWith("+busco")) {
                if(message.member.voiceChannel != null || message.member.voiceChannel != undefined){
                    let desc = message.content.split("+busco ")[1];
                    if(desc != null){
                        let options = {
                            maxAge: 3600
                        }
                        let server = bot.guilds.get("561212531058933771");
                        let adminRoleObject = server.roles.find("name", "BLOODBROTHERS");
                        message.member.voiceChannel.createInvite(options)
                        .then(invite => {
                            let invitacion = invite.code.split("invite/")[0];
                            let users = message.member.voiceChannel.userLimit - message.member.voiceChannel.members.size;

								var mdb = {
							  "embed": {
								"title": "BUSCANDO GENTE",
								"url": "http://gamedev.es/",
								  "image": {
				     				 "url": "https://i.imgur.com/A32ry64.png"
				   			 		},
								"description": "Busco **" + users + "** Gentusos para hacer algo en **" + message.member.voiceChannel.name + "**",
								"color": 0xff0025,
								"timestamp": message.createdAt,
								"author": {
								"name": message.author.tag,
								"icon_url": message.author.avatarURL
								},
								"fields": [
								  {
									"name": "Descripción",
									"value": "*" + desc + "*",
								  },
								  {
									"name": "Únete a mi sala",
									"value": "[Haz click para unirte](https://discord.gg/"+ invitacion +")"
								  }
								]
							  }
							}



	message.delete().catch(O_o=>{});
	bot.channels.get("561532607108743229").send(`[${adminRoleObject}]`, mdb);
        
						
                           
                        })
                        .catch(console.error);
                    }
                }
            }
	
	
	

	
 
	
   

    

			

			


   
// CONFIG BOT 
if(message.channel.type === "dm") return;
		if(message.author.bot) return;
		let prefix = botconfig.prefix;
		let messageArray = message.content.split(" ");
		let cmd = messageArray[0];
		let argsx = messageArray.slice(1);
		let commandfile = bot.commands.get(cmd.slice(prefix.length));
		if(commandfile) commandfile.run(bot,message,argsx);

});


		 

 // ACTIVIDAD DEL BOT (JUGANDO A +HELP) //
bot.on("ready", async () => {
	console.log(`${bot.user.username} estÃ¡ online`);
	bot.user.setActivity("+help");
});

bot.login(process.env.BOT_TOKEN);
