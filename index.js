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
 

// LISTA DE COMANDOS
bot.on("message", (message) => {


	// REACCION EMOJI SUGERENCIAS//
if (message.channel.id == "672785811888013321" && message.author.bot) {
    message.react("672786146006401044");
    message.react("672786127920562196");
	}
	


	
	 



if (message.channel.id == message.channel.id) { 				    // COMANDOS SOLO STAFF

		
	  
// comunicar general
    if (message.content.startsWith(ft + "comunicar")) {        //  +comunicar mensaje  = Enviamos un comunicado en una sala concreta
		  if(message.member.roles.find("name", "STAFF")){
		  var comunicado = message.content.replace("+comunicar ", "");  
		  let adminRoleObject = message.guild.roles.find("name", "✅Verificado");
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
			bot.channels.get("672783077700796430").send(`[${adminRoleObject}]`, embebido);

			}
		}

	
	

	
	if (message.content.startsWith(ft + "ayuda")) {            //  +staff   = Informaci贸n de todos los comandos de STAFF
		if(message.member.roles.find("name", "✅Verificado")){
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**COMANDOS GA-METH**")
		  .setColor("#C6FF00")
		  .setThumbnail(sicon)
		  .addField("**+crearclan \"NombredelClan\" \"Líder\" \"Miembros separados por coma\" \"Facción\"**", "Escribir esto en la sala <#672784602674364416> para crear vuestro clan.")
		  .addField("**+sugerencia texto**", "Redactamos una sugerencia para el servidor, solo usar en sala <#672785811888013321>")
		  .addField("**+banderablanca nombre del clan**", "Solicitamos una bandera blanca para nuestro clan o estructuras, solo usar en sala <#672784602674364416>")
		  .addField("**+perfil**", "Nos muestra el perfil. Solo usar en la sala <#672784602674364416>")
		  
		  return message.channel.send(serverembed);
		  }
		}
		

	
    } // FIN COMANDOS STAFF
	

	
	
  // SISTEMA NOTIFICACIONES //
       if (message.content.startsWith(ft + "online")) {         //  ONLINE
	   let adminRoleObject = message.guild.roles.find("name", "✅Verificado");	
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
				  	
							
	bot.channels.get("672783077700796430").send(`[${adminRoleObject}]`, embebido);
	
	};
	
	
	 if (message.content.startsWith(ft + "restart")) {         //  RESTART
	   let adminRoleObject = message.guild.roles.find("name", "✅Verificado");	
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
				  	
							
	bot.channels.get("672783077700796430").send(`[${adminRoleObject}]`, embebido);
	
	};
	
	
	 if (message.content.startsWith(ft + "offline")) {         //  ONLINE
	   let adminRoleObject = message.guild.roles.find("name", "✅Verificado");	
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
				  	
							
	bot.channels.get("672783077700796430").send(`[${adminRoleObject}]`, embebido);
	
	};
	
	
	
	// conectar
	
	 if (message.content.startsWith(ft + "conectar")) {         //  ONLINE
	   let adminRoleObject = message.guild.roles.find("name", "✅Verificado");	
			var embebido = {
				
  
				 "embed": {
		    		
				"description": "[HAZ CLIC AQUÍ PARA CONECTAR AL SERVIDOR](steam://connect/31.214.205.59:27016)",
		    		"color": 13041408,
    				
    			"fields": [
      
    			]
  			}
			}
				  	
							
	bot.channels.get("675694171062796348").send(`[${adminRoleObject}]`, embebido);
	
	};
	
// +SUGERENCIA //
if(message.content.toUpperCase().startsWith("+SUGERENCIA")){
let adminRoleObject = message.guild.roles.find("name", "STAFF");	
  var comunicado = message.content.replace("+sugerencia ", "");
    var embebido = {
                          "embed": {
                              color: 0xc6ff00,
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

              bot.channels.get("672785811888013321").send(`[${adminRoleObject}]`, embebido);
              message.delete().catch(O_o=>{});
      }	
	/// FIN SUGERENCIA ///
	
// +BUG //
if(message.content.toUpperCase().startsWith("+BUG")){
let adminRoleObject = message.guild.roles.find("name", "STAFF");	
  var comunicado = message.content.replace("+bug ", "");
    var embebido = {
                          "embed": {
                              color: 0xc6ff00,
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

              bot.channels.get("672785811888013321").send(`[${adminRoleObject}]`, embebido);
              message.delete().catch(O_o=>{});
      }	
	/// FIN BUG ///	
	

   
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
