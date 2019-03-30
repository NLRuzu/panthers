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
                title: "Hola bienvenido a la tripulación de La Venganza de Atenea marinero.",
                description: '**Para mejorar tu experiencia aquí puedes usar el comando +roles en la sala <#561300365304397835> y así asignarte tu expecialización dentro de la tripulación. ¡Ojo! solo podrás elegir 2 especializaciones una primaria y una secundaria.**', 
            }
    };
  
  welcomechannel.send(`**Bienvenido: Nuevo marinero ${member} a la tripulación**`, embed)

    member.send({
        embed: {
                color: 0x04ff00,
                title: "Hola bienvenido a la tripulación de La Venganza de Atenea marinero.",
                description: '**Para mejorar tu experiencia aquí puedes usar el comando +roles en la sala <#561300365304397835> y así asignarte tu expecialización dentro de la tripulación. ¡Ojo! solo podrás elegir 2 especializaciones una primaria y una secundaria.**', 
                
            }
        });
 });

// MENSAJE DE ABANDONO DE USUARIOS
bot.on("guildMemberRemove", async member => {
  console.log(`${member.nickname} ha abandonado la tripulación `);
 
  let welcomechannel = member.guild.channels.find(`name`, "📉-abandonos");
  welcomechannel.send({
               embed: {
                        color: 0xe52121,
                        title: "**HA ABANDONADO**",
		       	url: "http://gamedev.es/",
                        description: `${member} ha abandonado la tripulación`,
                    }
                });
});

// ROL DE ENTRADA AL SERVIDOR - NO VERIFICADO //
bot.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "Grumete");
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


	// REACCION EMOJI SALA CARTELERA //
if (message.channel.id == "561538721653063690" && message.author.bot) {
    message.react("561539430985236500");
    message.react("561539448836456448");
	}
	
	
 // REACCION EMOJI SALA SUGERENCIAS //
if (message.channel.id == "561540728422137866" && message.author.bot) {
                    message.react("561539430985236500");
                    message.react("561539448836456448");
                }	



if (message.channel.id == message.channel.id) { 				    // COMANDOS GENERALES

	
		 
	if (message.content.startsWith(ft + "rolprimariocarpintero")) {
        message.delete();
            if(message.member.roles.find("name", "Grumete")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Primario: Carpintero");
                let guild = bot.guilds.get("561212531058933771");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                bot.channels.get("561300365304397835").send({
                    embed: {
                        color: 0x00FFE0,
						title: "**ESTABLECIDA ESPECIALIZACIÓN PRIMARIA**",
						url: "http://gamedev.es/",
                        description: "**Tu expecialización Primaria como Carpintero asignado a **" + User + " **correctamente** ahora tu misión será impedir que se hunda el navío",
                    }
                });
            }
        }
	
	if (message.content.startsWith(ft + "rolprimarioasaltante")) {
        message.delete();
            if(message.member.roles.find("name", "Grumete")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Primario: Asaltante");
                let guild = bot.guilds.get("561212531058933771");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                 bot.channels.get("561300365304397835").send({
                    embed: {
                        color: 0x00FFE0,
						title: "**ESTABLECIDA ESPECIALIZACIÓN PRIMARIA**",
						url: "http://gamedev.es/",
                        description: "**Tu expecialización Primaria como Asaltante asignado a **" + User + " **correctamente** ahora tu misión será asaltar navíos enemigos e intentar aniquilarlos",
                    }
                });
            }
        }
	
	if (message.content.startsWith(ft + "rolprimarioartillero")) {
        message.delete();
            if(message.member.roles.find("name", "Grumete")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Primario: Artillero");
                let guild = bot.guilds.get("561212531058933771");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                 bot.channels.get("561300365304397835").send({
                    embed: {
                        color: 0x00FFE0,
						title: "**ESTABLECIDA ESPECIALIZACIÓN PRIMARIA**",
						url: "http://gamedev.es/",
                        description: "**Tu expecialización Primaria como Artillero asignado a **" + User + " **correctamente** ahora tu misión será hundir navíos usando los cañones del barco",
                    }
                });
            }
        }
	
	if (message.content.startsWith(ft + "rolprimariotimonel")) {
        message.delete();
            if(message.member.roles.find("name", "Grumete")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Primario: Timonel");
                let guild = bot.guilds.get("561212531058933771");
                miembro.addRole(role).catch(console.error);
                bot.channels.get("561300365304397835").send({
                    embed: {
                        color: 0x00FFE0,
						title: "**ESTABLECIDA ESPECIALIZACIÓN PRIMARIA**",
						url: "http://gamedev.es/",
                        description: "**Tu expecialización Primaria como Timonel asignado a **" + User + " **correctamente**",
                    }
                });
            }
        }
	
	if (message.content.startsWith(ft + "rolsecundariocarpintero")) {
        message.delete();
            if(message.member.roles.find("name", "Grumete")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Secundario: Carpintero");
                let guild = bot.guilds.get("561212531058933771");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                 bot.channels.get("561300365304397835").send({
                    embed: {
                        color: 0x00FFE0,
						title: "**ESTABLECIDA ESPECIALIZACIÓN SECUNDARIA**",
						url: "http://gamedev.es/",
                        description: "**Tu expecialización Secundaria como Carpintero asignado a **" + User + " **correctamente** ahora tu misión será impedir que se hunda el navío",
                    }
                });
            }
        }
	
	if (message.content.startsWith(ft + "rolsecundarioasaltante")) {
        message.delete();
            if(message.member.roles.find("name", "Grumete")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Secundario: Asaltante");
                let guild = bot.guilds.get("561212531058933771");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                 bot.channels.get("561300365304397835").send({
                    embed: {
                        color: 0x00FFE0,
						title: "**ESTABLECIDA ESPECIALIZACIÓN SECUNDARIA**",
						url: "http://gamedev.es/",
                        description: "**Tu expecialización Secundaria como Asaltante asignado a **" + User + " **correctamente** ahora tu misión será asaltar navíos enemigos e intentar aniquilarlos",
                    }
                });
            }
        }
	
	if (message.content.startsWith(ft + "rolsecundarioartillero")) {
        message.delete();
            if(message.member.roles.find("name", "Grumete")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Secundario: Artillero");
                let guild = bot.guilds.get("561212531058933771");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                 bot.channels.get("561300365304397835").send({
                    embed: {
                        color: 0x00FFE0,
						title: "**ESTABLECIDA ESPECIALIZACIÓN SECUNDARIA**",
						url: "http://gamedev.es/",
                        description: "**Tu expecialización Secundaria como Artillero asignado a **" + User + " **correctamente** ahora tu misión será hundir navíos usando los cañones del barco",
                    }
                });
            }
        }
	
	
	if (message.content.startsWith(ft + "rolprimariotimonel")) {
        message.delete();
            if(message.member.roles.find("name", "Grumete")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Primario: Timonel");
                let guild = bot.guilds.get("561212531058933771");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                 bot.channels.get("561300365304397835").send({
                    embed: {
                        color: 0x00FFE0,
						title: "**ESTABLECIDA ESPECIALIZACIÓN PRIMARIA**",
						url: "http://gamedev.es/",
                        description: "**Tu expecialización Primaria como Timonel asignado a **" + User + " **correctamente** ahora tu misión llevar por el buen rumbo el navío",
                    }
                });
            }
        }
0	
	
 
	
		
		
	if (message.content.startsWith(ft + "help")) {
	  let sicon = message.guild.iconURL;
	  let serverembed = new Discord.RichEmbed()
	  .setTitle("**GENERALES**")
	  .setColor("#00FFE0")
	  .setThumbnail(sicon)
	  .addField("**+sugerencia descripción**", "Añade una sugerencia")
	  .addField("**+roles**", "Comandos para asignarte tus especializaciones en la tripulación")
	  .addField("**+quedada \"Descripción\" \"Día y Hora\"**", "Mensaje de búsqueda de partida organizada. escribir en <#561300365304397835>")
	  .addField("**+busco descripción**", "Mensaje de búsqueda de marineros para navegar. Importante estar en una sala del Puerto y escribir en <#561300365304397835>");
	  bot.channels.get("561300365304397835").send(serverembed);
	  }	
	

	
	
		
	if (message.content.startsWith(ft + "sugerencia")) {
		var comunicado = message.content.replace("+sugerencia ", "");
		var embebido = {
                          "embed": {
                              color: 0x00FFE0 ,
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
			
	if (message.content.startsWith(ft + "quedada")) {  //  +quedada "Nick1" "Nick2"     = Participantes del torneo
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
				message.channel.send("+quedada \"Descripción\" \"Día y Hora\"");
				return;
			}

			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let disponible = args[2];
			var apuntarme = {
				"embed": {
					color: 0x00FFE0 ,
					title: "**NUEVA QUEDADA PROPUESTA**",
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


			let torneochannel = bot.channels.get("561538721653063690");
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			torneochannel.send(apuntarme);
		}
	
	
	if (message.content.startsWith(ft + "roles")) {
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**ELIGE TU ESPECIALIZACION**")
		  .setColor("#00FFE0")
		  .setThumbnail(sicon)
		  .addField("**+rolprimariocarpintero**", "Te añade como especialización primaria CARPINTERO, debido a tus dotes maestras en reparación del navío en situaciones de extrema urgencia y necesidad.")
		  .addField("**+rolprimarioasaltante**", "Te añade como especialización primaria ASALTANTE, debido a tus dotes maestras en asaltar navíos enemigos.")
		   .addField("**+rolprimarioartillero**", "Te añade como especialización primaria ARTILLERO, debido a tus dotes maestras en hundir navíos enemigos.")
		   .addField("**+rolprimariotimonel**", "Te añade como especialización primaria ASALTANTE, debido a tus dotes maestras dirigir por buen rumbo el navío.")
		    .addField("**+rolsecundariocarpintero**", "Te añade como especialización secundaria CARPINTERO, debido a tus dotes maestras en reparación del navío en situaciones de extrema urgencia y necesidad.")
		  .addField("**+rolsecundarioasaltante**", "Te añade como especialización secundaria ASALTANTE, debido a tus dotes maestras en asaltar navíos enemigos.")
		   .addField("**+rolsecundarioartillero**", "Te añade como especialización secundaria ARTILLERO, debido a tus dotes maestras en hundir navíos enemigos.")
		   .addField("**+rolsecundariotimonel**", "Te añade como especialización secundaria ASALTANTE, debido a tus dotes maestras dirigir por buen rumbo el navío.");
		  return message.channel.send(serverembed);
		  }
			  
} //FIN DE COMANDOS GENERALES
 
 
 if (message.content.startsWith(ft + "delrol")) {           //  +delrol @user     = Elimina un rol establecido en por ID
				let rUser = message.guild.member(message.mentions.users.first());
				let role = message.guild.roles.find("id", "458226959907028992");
				rUser.removeRole(role).catch(console.error);
				message.channel.send({
					embed: {
						color: 0xc500ff,
						description: "ROL eliminado a " + rUser + " correctamente",
					}
				});
				message.delete();
		}

	
				  

    if (message.content.startsWith(ft + "comunicar")) {        //  +comunicar mensaje  = Enviamos un comunicado en una sala concreta
		  if(message.member.roles.find("name", "Capitán") || message.member.roles.find("name", "Corsario")){
		  var comunicado = message.content.replace("+comunicar ", "");  
		  let adminRoleObject = message.guild.roles.find("name", "Grumete");
			var embebido = {
					  "embed": {
										"color":  0x00FFE0,
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

	

	

	
		


	if (message.content.startsWith(ft + "infonormas")) {       //  +infonormas   = Envía toda la información sobre las normas canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00FFE0,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACIÓN SOBRE LA NORMATIVA DE LA TRIPULACIÓN',
						url: "http://gamedev.es/",
                        description: '**A Continuación habrá una serie de reglas que todo usuario que se una a este Discord deberá seguir.**',
						fields: [
							{
							name: ":one:",
							value: `╚> No hacer spam de tu canal de Youtube/Twitch/Discord o cualquier web. También incluye spam de mensajes o emojis.`,
							},	
							{
							name: ":two:",
							value: `╚> No faltar el respeto o ser una persona tóxica hacia el resto los usuarios de la comunidad, si te calientas en una partida es mejor desconectar un rato y despejarse. r links de webs o contenido +18.`,
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
							value: `╚> Todos los comandos se escriben en la sala <#561300365304397835>.`,
							}
							
							
							
							
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
		}


	
	
	if(message.content.startsWith("+busco")) {
                if(message.member.voiceChannel != null || message.member.voiceChannel != undefined){
                    let desc = message.content.split("+busco ")[1];
                    if(desc != null){
                        let options = {
                            maxAge: 3600
                        }
                        let server = bot.guilds.get("561212531058933771");
                        let adminRoleObject = server.roles.find("name", "Grumete");
                        message.member.voiceChannel.createInvite(options)
                        .then(invite => {
                            let invitacion = invite.code.split("invite/")[0];
                            let users = message.member.voiceChannel.userLimit - message.member.voiceChannel.members.size;

								var mdb = {
							  "embed": {
								"title": "BUSCANDO TRIPULACIÓN",
								"url": "http://gamedev.es/",
								"description": "Busco **" + users + "** marineros para navegar en **" + message.member.voiceChannel.name + "**",
								"color": 0x00FFE0,
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
