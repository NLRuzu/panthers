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
if (message.channel.id == "472138215042842626" && message.author.bot) {
    message.react("472146792339734565");
    message.react("472147160423727105");
	}
  
// REACCION EMOJI SALA VOTACION DE SANCIÓN //
if (message.channel.id == "480414475904745507" && message.author.bot) {
    message.react("472146792339734565");
    message.react("472147160423727105");
	}

	// REACCION EMOJI SALA CARTELERA //
if (message.channel.id == "499629460916797441" && message.author.bot) {
    message.react("472146792339734565");
    message.react("472147160423727105");
	}
	
	// REACCION EMOJI SALA VOTACION //
if (message.channel.id == "499632058881146880" && message.author.bot) {
    message.react("472146792339734565");
    message.react("472147160423727105");
	}
	
 // REACCION EMOJI SALA SUGERENCIAS //
if (message.channel.id == "475267748868390912" && message.author.bot) {
                    message.react("472146792339734565");
                    message.react("472147160423727105");
                }	let ed1 = {
                    embed: {
                        color: 0x04ff00,
                        title: "**:warning: LO SENTIMOS**",
                        description: "Tu rol actual no dispone de suficientes privilegios, debes de participar e interactuar más con el clan para ascender a un rol superior. \n\n Para mas información ir al canal: <#485759738164936719> y sección **BENEFICIOS**",
                    }
                };



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
                let guild = bot.guilds.get("559319996162113537");
                
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
	
	if (message.content.startsWith(ft + "rolsecundariotimonel")) {
        message.delete();
            if(message.member.roles.find("name", "Grumete")){
                let User = message.member;
                let role = message.guild.roles.find("name", "Secundario: Timonel");
                let guild = bot.guilds.get("561212531058933771");
                let miembro = guild.member(User);
                miembro.addRole(role).catch(console.error);
                 bot.channels.get("561300365304397835").send({
                    embed: {
                        color: 0x00FFE0,
						title: "**ESTABLECIDA ESPECIALIZACIÓN SECUNDARIA**",
						url: "http://gamedev.es/",
                        description: "**Tu expecialización Secundaria como Timonel asignado a **" + User + " **correctamente** ahora tu misión llevar por el buen rumbo el navío",
                    }
                });
            }
        }
	
	
 
	
		
		
	if (message.content.startsWith(ft + "help")) {
	  let sicon = message.guild.iconURL;
	  let serverembed = new Discord.RichEmbed()
	  .setTitle("**GENERALES**")
	  .setColor("#FE2E2E")
	  .setThumbnail(sicon)
	  .addField("**+musica**", "Comandos de uso del bot musical")
	  .addField("**+roles**", "Comandos para asignarte tus especializaciones en la tripulación")
	  .addField("**+infoespecializaciones**", "Información de todas las especializaciones");
	  bot.channels.get("481525340083191809").send(serverembed);
	  }	
	
	if (message.content.startsWith(ft + "musica")) {
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**MÚSICA**")
		  .setColor("#FE2E2E")
		  .setThumbnail(sicon)
		  .addField("**!play link o nombre**", "Comando para buscar canción.")
		  .addField("**!stop**", "Comando para parar la música")
		  .addField("**!skip**", "Pasar canción")
		  .addField("**!loop**", "Hacer bucle")
		  .addField("**!pause**", "Pausar música")
		  .addField("**!resume**", "volver poner música después de pausa");
		  
		  bot.channels.get("481525340083191809").send(serverembed);
		  }
	
	
		
	if (message.content.startsWith(ft + "sugerencia")) {
		var comunicado = message.content.replace("+sugerencia ", "");
		var embebido = {
                          "embed": {
                              color: 0x84ff80 ,
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
			 
			  bot.channels.get("475267748868390912").send(embebido);
              message.delete().catch(O_o=>{});
      }	
			
	if (message.content.startsWith(ft + "cartelera")) {  //  +participantes "Nick1" "Nick2"     = Participantes del torneo
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
				message.channel.send("+cartelera \"Nombre de la película\" \"Día\"");
				return;
			}

			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let disponible = args[2];
			var apuntarme = {
				"embed": {
					color: 0x7608AA ,
					title: "**NUEVA PELÍCULA ELEGIDA**",
					url: "http://gamedev.es/",				

					fields: [
						{
						name: "🎬 Película",
						value: NickParticipante1,
						},
						{
						name: "📆 Día",
						value: NickParticipante2,
						}
									 						
					]
				}
			};


			let torneochannel = bot.channels.get("499629460916797441");
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
		  if(message.member.roles.find("name", "Capitán") || (message.member.roles.find("name", "Corsario")){
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

	

	

	if (message.content.startsWith(ft + "staff")) {            //  +staff   = Información de todos los comandos de STAFF
		if(message.member.roles.find("name", "🌟 STAFF MÁSTER") || message.member.roles.find("name", "🌟 STAFF NIVEL 2") || message.member.roles.find("name", "🌟 STAFF NIVEL 1") || message.member.roles.find("name", "🌟 STAFF EN PRUEBAS")){
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**COMANDOS STAFF**")
		  .setColor("#00dcff")
		  .setThumbnail(sicon)
		  .addField("**+report**", "Abrimos la lista de comandos para los toques")
		  .addField("**+verificar @User**", "Asigna rol Verificado para acceder al contenido del discord")
		  .addField("**+clear cantidad**", "Elimina X cantidad de mensajes de un canal de texto")
		  .addField("**+proponer @User Razón**", "Propone a un usuario ascenso de rango por x motivo")
		  .addField("**+comunicar Desarrollo**", "Redactamos un comunicado, solo usar en sala #📋-comunicados")
		  .addField("**+dm @user Mensaje**", "Le enviamos un DM a un usuario con un mensaje")
		  
		  
		  
		  
		  return message.channel.send(serverembed);
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

	if (message.content.startsWith(ft + "inforoles")) {        //  +inforoles   = Envía toda la información sobre roles canal INFO
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACIÓN SOBRE ROLES',
						url: "http://gamedev.es/",
                        description: '**A Continuación se explican el uso y descripción de cada rol del servidor.**',
						fields: [
							{
							name: "❎ No verificado",
							value: `╚> Gente que entra por primera vez al servidor, y no ha realizado o esta a la espera de verificación por parte del STAFF.`,
							},	
							{
							name: "✅Verificado",
							value: `╚> Gente que su cuenta ha sido verificada por el STAFF.`,
							},
							{
							name: "⚜️[NL] Novato",
							value: `╚> Gente que tras llevar un periodo de días, se examina su actividad, participación, nivel de involucración en el clan y actitud en él. **Se consigue por medio de votación del STAFF a modo de propuesta**.`,
							},
							{
							name: "⚜️[NL] Miembro",
							value: `╚> Gente que es algo mas de confianza y lleva un tiempo indeterminado con nosotros donde se examina su actividad, participacion, nivel de involucracion en el clan y actitud en el. **Se consigue por medio de votación del STAFF a modo de propuesta**.`,
							},
							{	
							name: "⚜️[NL] Veterano",
							value: `╚> Gente que se ha ganado estar aquí, a base de actividad, involucrarse, participar, jugar y mucha confianza. **Este rol tiene beneficios y consigue por medio de votacion del STAFF a modo de propuesta**.`,
							},
							{
							name: "💔 Colaborador",
							value: `╚> Gente que se ha ganado estar aquí, a base de actividad, involucrarse, participar, jugar y mucha confianza. **Este rol tiene beneficios y consigue por medio de votacion del STAFF a modo de propuesta** .Si tienes este rol y necesitas cualquier cosa relacionada con diseño gráfico, streaming, etc... se te hará un presupuesto muy económico.`,
							}
							]							
							}
							}
							message.channel.send(embed);	 
							message.delete();
							};	
	
	
	if (message.content.startsWith(ft + "infoimportante")) {   //  +infoimportante   = Envía toda la información IMPORTANTE canal IMPORTANTE
			let embed = {
			"embed": {
						
                        color:  0x00dcff,
						footer: {
									  "text": message.guild.name
									},
						title: 'INFORMACIÓN IMPORTANTE',
						url: "http://gamedev.es/",
						fields: [
							{
							name: "Guía de acceso:",
							value: `:one: Revisa tus Mensajes Privados y mira uno de P A N T H E R S. \n\n:two: Entra al canal <#485759738164936719> leete todas y cada una de las normas. \n\n:three: Solo tendrás que esperar a que un STAFF te verifique y te de accesos para ver todo el contenido. \n\n:four: Ve al canal <#486981605831999489> y preséntate sin miedo. \n\n:five: Una vez tengas los permisos ve al canal <#481525340083191809> y escribe **+roles** , asígnate los roles de los juegos que quieras recibir notificaciones.`,	
							}
						]
                    }
			};	
  
	 message.channel.send(embed);	 
     message.delete();
  
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
