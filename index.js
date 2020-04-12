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
                color: 0xc6ff00,
                title: "Hola bienvenido a RevengeR Roleplay",
                description: '**Para informarte de como acceder al servidor. Ve a la sala <#682945921503199274>.**', 
                
            }
    };
  
  welcomechannel.send(`**Bienvenido: Nuevo usuario ${member} a RevengeR Roleplay**`, embed)

    member.send({
        embed: {
                color: 0xc6ff00,
                title: "Hola bienvenido a RevengeR Roleplay",
                description: '**Para informarte de como acceder al servidor. Ve a la sala <#682945921503199274>.**',   
            }
        });
 });

// MENSAJE DE ABANDONO DE USUARIOS
bot.on("guildMemberRemove", async member => {
  console.log(`${member.nickname} ha abandonado el server `);
 
  let welcomechannel = member.guild.channels.find(`name`, "📉-abandonos");
  welcomechannel.send({
               embed: {
                        color: 0xc6ff00,
                        title: "**HA ABANDONADO**",
		       	url: "http://gamedev.es/",
                        description: `${member} ha abandonado la comunidad`,
                    }
                });
});

// ROL DE ENTRADA AL SERVIDOR - NO VERIFICADO //
bot.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "No Whitelist");
    member.addRole(role).catch(console.error);
	
});


// LISTA DE COMANDOS
bot.on("message", (message) => {


	// REACCION EMOJI SUGERENCIAS//
if (message.channel.id == "697411368369913856" && message.author.bot) {
    message.react("697411723858018324");
    message.react("697411738559184956");
	}
	


	
	 



if (message.channel.id == message.channel.id) { 				    // COMANDOS SOLO STAFF

		
	  
// comunicar general
    if (message.content.startsWith(ft + "comunicar")) {        //  +comunicar mensaje  = Enviamos un comunicado en una sala concreta
		  if(message.member.roles.find("name", "STAFF")){
		  var comunicado = message.content.replace("+comunicar ", "");  
		  let adminRoleObject = message.guild.roles.find("name", "Whitelist✅");
			var embebido = {
					  "embed": {
										"color":  0xc6ff00,
										author: {
											name: message.author.tag,
											icon_url: message.author.avatarURL
										},
										"image": {
									
										},
										footer: {
											  text: message.guild.name
											},
										description: comunicado,
										timestamp: message.createdAt,								
									}
									};
			
			

			message.delete().catch(O_o=>{});
			bot.channels.get("694894695838384158").send(`[${adminRoleObject}]`, embebido);

			}
		}
	
	
	// actualizacion
    if (message.content.startsWith(ft + "actualizacion")) {        //  +actualizacion mensaje  = Enviamos un comunicado en una sala concreta
		  if(message.member.roles.find("name", "STAFF")){
		  var comunicado = message.content.replace("+actualizacion ", "");  
		  let adminRoleObject = message.guild.roles.find("name", "Whitelist✅");
			var embebido = {
					  "embed": {
										"color":  0xc6ff00,
										author: {
											name: message.author.tag,
											icon_url: message.author.avatarURL
										},
										"image": {
									
										},
										footer: {
											  text: message.guild.name
											},
										description: comunicado,
										timestamp: message.createdAt,								
									}
									};
			
			

			message.delete().catch(O_o=>{});
			bot.channels.get("691057461146288128").send(`[${adminRoleObject}]`, embebido);

			}
		}


	
	

	
		if (message.content.startsWith(ft + "ayuda")) {            //  +staff   = Informaci贸n de todos los comandos de STAFF
		if(message.member.roles.find("name", "Whitelist✅")){
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**COMANDOS BANDOLEROSRP**")
		  .setColor("#C6FF00")
		  .setThumbnail(sicon)
		  .addField("**+sugerencia texto**", "Redactamos una sugerencia para el servidor, solo usar en sala <#697409367565271060>")
		  .addField("**+twt texto**", "Redactamos un tweet **IC**, solo usar en sala <#697409367565271060>")
		  .addField("**+hype**", "lazaremos un hype al chat ooc. Usar en <#697409367565271060>")
		  .addField("**+anuncio texto**", "Redactamos un anuncio **IC**, ahora ya podréis poner vuestros anuncios. Solo usar en sala <#697409367565271060>")
		  .addField("**+badu texto**", "Redactamos un nuevo anuncio **IC**, solo usar en sala <#697409367565271060> **Solo podrán usarlo @Jefatura Badulake🛒**")
		  .addField("**+bug texto**", "Redactamos un nuevo reporte de BUG para el servidor, solo usar en sala <#697409367565271060>")
		  
		  return message.channel.send(serverembed);
		  }
		}
		

	
    } // FIN COMANDOS STAFF
	

	
	
  // SISTEMA NOTIFICACIONES //
        if (message.content.startsWith(ft + "online")) {         //  ONLINE
	       if(message.member.roles.find("name", "STAFF")){
	   let adminRoleObject = message.guild.roles.find("name", "Whitelist✅");	
			var embebido = {
				"embed": {
 
				"color": 13041408,
    				"timestamp": "2020-01-31T15:11:42.980Z",
				"title": "VOLVEMOS A ESTAR ONLINE",
		"description": "El servidor vuelve a estar ONLINE de nuevo, disculpen las molestias y gracias por la paciencia.",
    				"footer": {
     				"icon_url": "https://i.imgur.com/8dGnJ8c.png",
				"text": "BandolerosRP"
  				  },
				"image": {
      				"url": "https://i.imgur.com/3Zhppty.png"
    				},
     				
   				"fields": [
      				]
  				}
				}
				  	
							
	bot.channels.get("690912685474185282").send(`[${adminRoleObject}]`, embebido);
		        message.delete().catch(O_o=>{});
		   }
	};
	
	
	 if (message.content.startsWith(ft + "programada")) {         //  ACTUALIZACIÓN PROGRAMADA
	       if(message.member.roles.find("name", "STAFF")){
	   let adminRoleObject = message.guild.roles.find("name", "Whitelist✅");	
			var embebido = {
				"embed": {
 
				"color": 13041408,
    				"timestamp": "2020-01-31T15:11:42.980Z",
				"title": "NUEVA ACTUALIZACIÓN PROGRAMADA",
		"description": "Se vieneee ¡paree!.",
    				"footer": {
     				"icon_url": "https://i.imgur.com/8dGnJ8c.png",
				"text": "BandolerosRP"
  				  },
				"image": {
      				"url": "https://i.imgur.com/N4nchKD.png"
    				},
     				
   				"fields": [
      				]
  				}
				}
				  	
							
	bot.channels.get("690912685474185282").send(`[${adminRoleObject}]`, embebido);
		        message.delete().catch(O_o=>{});
		   }
	};
	
	
	 if (message.content.startsWith(ft + "hype")) {         //  ACTUALIZACIÓN PROGRAMADA
	       if(message.member.roles.find("name", "Whitelist✅")){
	   let adminRoleObject = message.guild.roles.find("name", "Whitelist✅");	
			var embebido = {
				"embed": {
 
				"color": 13041408,
    				"timestamp": "2020-01-31T15:11:42.980Z",
				"title": "HYPE",
		"description": "Se vieneee ¡paree!.",
    				"footer": {
     				"icon_url": "https://i.imgur.com/8dGnJ8c.png",
				"text": "BandolerosRP"
  				  },
				"image": {
      				"url": "https://i.imgur.com/cAqqDY4.png"
    				},
     				
   				"fields": [
      				]
  				}
				}
				  	
							
	bot.channels.get("690912685474185282").send(`[${adminRoleObject}]`, embebido);
		        message.delete().catch(O_o=>{});
		   }
	};
	

	
	 if (message.content.startsWith(ft + "restart")) {         //  RESTART
		  if(message.member.roles.find("name", "STAFF")){
	   let adminRoleObject = message.guild.roles.find("name", "Whitelist✅");	
			var embebido = {
				"embed": {
 
				"color": 13041408,
    				"timestamp": "2020-01-31T15:11:42.980Z",
				"title": "REINICIANDO SERVIDOR",
		"description": "El servidor será reiniciado, en breves podras volver a entrar y disfrutar de él. Disculpen las molestias",
    				"footer": {
     				"icon_url": "https://i.imgur.com/8dGnJ8c.png",
				"text": "BandolerosRP"
  				  },
				"image": {
      				"url": "https://i.imgur.com/BhZGxZp.png"
    				},
   				"fields": [
      				]
  				}
				}
				  	
							
	bot.channels.get("690912685474185282").send(`[${adminRoleObject}]`, embebido);
			   message.delete().catch(O_o=>{});
		  }
	};
	
	
	 if (message.content.startsWith(ft + "offline")) {         //  ONLINE
		  if(message.member.roles.find("name", "STAFF")){
	   let adminRoleObject = message.guild.roles.find("name", "Whitelist✅");	
			var embebido = {
				"embed": {
 
    				"color": 13041408,
    				"timestamp": "2020-01-31T15:11:42.980Z",
				"title": "ESTAMOS EN MANTENIMIENTO",
				"description": "El servidor en este momento se encuentra OFFLINE, disculpen las molestias y gracias por la paciencia.",
    				"footer": {
     				"icon_url": "https://i.imgur.com/8dGnJ8c.png",
				"text": "BandolerosRP"
  				  },
	   		 	"image": {
      				"url": "https://i.imgur.com/DTuySYB.png"
    				},

				    "fields": [
				 ]
				  }
				}
				  	
							
	bot.channels.get("690912685474185282").send(`[${adminRoleObject}]`, embebido);
			   message.delete().catch(O_o=>{});
		  }
	};
	
	if (message.content.startsWith(ft + "actu")) {         //  actu
		  if(message.member.roles.find("name", "STAFF")){
	   let adminRoleObject = message.guild.roles.find("name", "Whitelist✅");	
			var embebido = {
				"embed": {
 
    				"color": 13041408,
    				"timestamp": "2020-01-31T15:11:42.980Z",
				"title": "NUEVA ACTUALIZACIÓN LANZADA",
				"description": "Toda la información referente al contenido de la misma podréis encontrarla en <#691057461146288128>.",
    				"footer": {
     				"icon_url": "https://i.imgur.com/8dGnJ8c.png",
				"text": "BandolerosRP"
  				  },
	   		 	"image": {
      				"url": "https://i.imgur.com/Z9US30c.png"
    				},

				    "fields": [
				 ]
				  }
				}
				  	
							
	bot.channels.get("690912685474185282").send(`[${adminRoleObject}]`, embebido);
			   message.delete().catch(O_o=>{});
		  }
	};
	
	
	// conectar
	
	 if (message.content.startsWith(ft + "conectar")) {         //  ONLINE
		if(message.member.roles.find("name", "STAFF")){
	   let adminRoleObject = message.guild.roles.find("name", "Whitelist✅");	
			var embebido = {
				
  
				 "embed": {
		    		
				"description": "[HAZ CLIC AQUÍ PARA CONECTAR AL SERVIDOR](steam://connect/31.214.205.59:27016)",
		    		"color": 13041408,
    				
    			"fields": [
      
    			]
  			}
			}
				  	
							
	bot.channels.get("675694171062796348").send(`[${adminRoleObject}]`, embebido);
		}
	};
	
// +SUGERENCIA //
if(message.content.toUpperCase().startsWith("+SUGERENCIA")){
  var comunicado = message.content.replace("+sugerencia ", "");
    var embebido = {
                          "embed": {
                              color: 0x3EFF7B,
                              author: {
                                  name: message.author.tag,
                                  icon_url: message.author.avatarURL
                              },
                              title: "** 💎 NUEVA SUGERENCIA 💎 **",
              url: "http://gamedev.es/",

              description: comunicado,
              timestamp: message.createdAt,
                          }
                  };

              bot.channels.get("697411368369913856").send(embebido);
              message.delete().catch(O_o=>{});
      }	
	/// FIN SUGERENCIA ///
	
// +BUG //
if(message.content.toUpperCase().startsWith("+BUG")){
let adminRoleObject = message.guild.roles.find("name", "Programador👨‍💻");	
  var comunicado = message.content.replace("+bug ", "");
    var embebido = {
                          "embed": {
                              color: 0xFF0000,
                              author: {
                                  name: message.author.tag,
                                  icon_url: message.author.avatarURL
                              },
                              title: "**  🧩  NUEVA REPORTE DE BUG  🧩  **",
              url: "http://gamedev.es/",

              description: comunicado,
              timestamp: message.createdAt,
                          }
                  };

              bot.channels.get("697411968096665610").send(`[${adminRoleObject}]`, embebido);
              message.delete().catch(O_o=>{});
      }	
	/// FIN BUG ///	
	
	
	// +TWT //
if(message.content.toUpperCase().startsWith("+TWT")){

  var comunicado = message.content.replace("+twt ", "");
    var embebido = {
                          "embed": {
                              color: 0x33F6FF,
                              author: {
                                  name: message.author.tag,
                                  icon_url: message.author.avatarURL
                              },
                              title: "** 🐤 NUEVO TWEET 🐤**",
              url: "http://gamedev.es/",

              description: comunicado,
              timestamp: message.createdAt,
                          }
                  };

              bot.channels.get("697538823571374200").send(embebido);
              message.delete().catch(O_o=>{});
      }	
	/// FIN TWITTER ///
	
	
	// +BADU //
if(message.content.toUpperCase().startsWith("+BADU")){
 if(message.member.roles.find("name", "Jefatura Badulake🛒")){
  var comunicado = message.content.replace("+badu ", "");
    var embebido = {
                          "embed": {
                              color: 0x33F6FF,
                              author: {
                                  name: message.author.tag,
                                  icon_url: message.author.avatarURL
                              },
                              title: "**  🛒 NUEVO ANUNCIO: BADULAKE 🛒 **",
             			 image: {
      				url: "https://i.imgur.com/o08gtvS.png"
    				},

              description: comunicado,
              timestamp: message.createdAt,
                          }
                  };

              bot.channels.get("690912688498278501").send(embebido);
              message.delete().catch(O_o=>{});
		 }
		};
	/// FIN BADU ///
	
	// +ANUNCIO //
if(message.content.toUpperCase().startsWith("+ANUNCIO")){

  var comunicado = message.content.replace("+anuncio ", "");
    var embebido = {
                          "embed": {
                              color: 0x33F6FF,
                              author: {
                                  name: message.author.tag,
                                  icon_url: message.author.avatarURL
                              },
             			 image: {
      				url: "https://i.imgur.com/GZ7Jc6y.png"
    				},

              description: comunicado,
              timestamp: message.createdAt,
                          }
                  };

              bot.channels.get("690912688498278501").send(embebido);
              message.delete().catch(O_o=>{});
		
		}
	/// FIN BADU ///
	

   
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
	console.log(`${bot.user.username} está online`);
	bot.user.setActivity("+ayuda");
});

bot.login(process.env.BOT_TOKEN);
