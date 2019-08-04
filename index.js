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
                title: "Hola bienvenido a la Hermandad ArtiK.",
                description: '**Para mejorar tu experiencia aquí puedes usar el comando +help en la sala <#588369336226283520> y ver que puedes hacer.**', 
            }
    };
  
  welcomechannel.send(`**Bienvenido: Nuevo miembro ${member} a la hermandad**`, embed)

    member.send({
        embed: {
                color: 0x04ff00,
               title: "Hola bienvenido a la Hermandad ArtiK.",
                description: '**Para mejorar tu experiencia aquí puedes usar el comando +help en la sala <#588369336226283520> y ver que puedes hacer.**',  
                
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
    let role = member.guild.roles.find("name", "INICIADO");
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


	
	// REACCION EMOJI SALA RAID //
if (message.channel.id == "597727542694117396" && message.author.bot) {
   message.react("607518140557033483");
    message.react("607518140468953099");
    message.react("607518140376678435");
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
	  .addField("**+musica**", "Comandos de uso de los bot musicales")
	  .addField("**+raid \"Descripción\" \"Día y Hora\"**", "Mensaje de búsqueda de raid organizada. escribir en <#597727542694117396>")
	  
	bot.channels.get("607520977215160330").send(serverembed);
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
			let adminRoleObject = server.roles.find("name", "ArtiK");
			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let disponible = args[2];
			var apuntarme = {
				"embed": {
					color: 0xff0025 ,
					"image": {
				     		 "url": "https://i.imgur.com/2DjZCws.png"
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


			let torneochannel = bot.channels.get("597727542694117396").send(`[${adminRoleObject}]`, apuntarme);
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			
		}
	
	
	if (message.content.startsWith(ft + "tarea")) {  //  +quedada "Nick1" 
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
				message.channel.send("+tarea \"Descripción\"");
				return;
			}
			let server = bot.guilds.get("561212531058933771");
			let adminRoleObject = server.roles.find("name", "GM");
			let NickParticipante1 = args[0];
			let disponible = args[1];
			var apuntarme = {
				"embed": {
					color: 0xff0025 ,
					title: "**NUEVA TAREA PENDIENTE**",
					url: "http://gamedev.es/",				

					fields: [
						{
						name: "📜 Descripción",
						value: NickParticipante1,
						}
						
									 						
					]
				}
			};


			let torneochannel = bot.channels.get("597723057418797071").send(`[${adminRoleObject}]`, apuntarme);
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			
		}
	
	
	
			  
} //FIN DE COMANDOS GENERALES
 
 
 

	
				  

    if (message.content.startsWith(ft + "comunicar")) {        //  +comunicar mensaje  = Enviamos un comunicado en una sala concreta
		  if(message.member.roles.find("name", "GM") || message.member.roles.find("name", "CO-GM")){
		  var comunicado = message.content.replace("+comunicar ", "");  
		  let adminRoleObject = message.guild.roles.find("name", "ArtiK");
			var embebido = {
					  "embed": {
										"color":  0xff0025,
						  "image": {
				     		 "url": "https://i.imgur.com/tlFyDCk.png"
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
			bot.channels.get("597722035447136256").send(`[${adminRoleObject}]`, embebido);

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
				     		 "url": "https://i.imgur.com/MXRlPE5.png"
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
							value: `╚> Todos los comandos se escriben en la sala <#607520977215160330>.`,
							}
							
							
							
							
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
		}
	
	

	if (message.channel.id == message.channel.id) { 	// COMANDOS DE MUSICA BOTS

if (message.content.startsWith(ft + "musica")) {         //  BOT MUSICAS
	 let adminRoleObject = message.guild.roles.find("name", "ArtiK");	
			let embed1 = {
				"embed": {
				    "title": "LISTA DE COMANDOS BOT MÚSICA",
				    "color": 13041408,
				    "timestamp": "2019-04-29T12:14:55.011Z",
				    "footer": {
				      "icon_url": "https://i.imgur.com/7uSvMbb.png",
				      "text": "Hermandad ArtiK"
				    },
				    "thumbnail": {
				      "url": "https://i.imgur.com/7uSvMbb.png"
				    },
				    "image": {
				      "url": "https://i.imgur.com/GpYJjFM.png"
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
				      "icon_url": "https://i.imgur.com/7uSvMbb.png",
				      "text": "Hermandad ArtiK"
				    },
				    "thumbnail": {
				      "url": "https://i.imgur.com/7uSvMbb.png"
				    },
				    "image": {
				      "url": "https://i.imgur.com/kgtxWQZ.png"
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
