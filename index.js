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
                title: "Hola bienvenido a Ga-Meth",
                description: '**Toda la información referente al servidor. Ve a la sala <#672782884473536522>**', 
                
            }
    };
  
  welcomechannel.send(`**Bienvenido: Nuevo usuario ${member} a Ga-Meth**`, embed)

    member.send({
        embed: {
                color: 0xc6ff00,
                title: "Hola bienvenido a Ga-Meth",
                description: '**Toda la información referente al servidor. Ve a la sala <#672782884473536522>**',   
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
    let role = member.guild.roles.find("name", "✅Verificado");
    member.addRole(role).catch(console.error);
	
});

// LISTA DE COMANDOS
bot.on("message", (message) => {


	// REACCION EMOJI SUGERENCIAS//
if (message.channel.id == "672785811888013321" && message.author.bot) {
    message.react("672786146006401044");
    message.react("672786127920562196");
	}
	


	
	 



if (message.channel.id == message.channel.id) { 				    // COMANDOS SOLO STAFF

		
	if (message.content.startsWith(ft + "serverinfo")) {       //  +serverinfo  = Muestra la informaci贸nd del servidor
			  let sicon = message.guild.iconURL;
			  let serverembed = new Discord.RichEmbed()
			  .setDescription("**Informaci贸n del Servidor**")
			  .setColor("#c6ff00")
			  .setThumbnail(sicon)
			  .addField("**Nombre del Servidor**", message.guild.name)
			  .addField("**Miembros Totales**", message.guild.memberCount);
			  
			  return message.channel.send(serverembed);
			  }			  
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

	
	
	

	if (message.content.startsWith(ft + "staff")) {            //  +staff   = Informaci贸n de todos los comandos de STAFF
		if(message.member.roles.find("name", "STAFF")){
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**COMANDOS STAFF**")
		  .setColor("#C6FF00")
		  .setThumbnail(sicon)
		  .addField("**+clear cantidad**", "Elimina X cantidad de mensajes de un canal de texto")
		  .addField("**+comunicar Desarrollo**", "Redactamos un comunicado, solo usar en sala <#672783077700796430>")
		  .addField("**+online**", "Publicamos un anuncio de ONLINE")
		  .addField("**+offline**", "Publicamos un anuncio de OFFLINE")
		  .addField("**+restart**", "Publicamos un anuncio de RESTART servidor")
		  .addField("**+dm @user Mensaje**", "Le enviamos un DM a un usuario con un mensaje")
		  
		  return message.channel.send(serverembed);
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
	
	
	// crear clan
	if (message.content.startsWith(ft + "crearclan")) {  //  +quedada "Nick1" "Nick2"     = Participantes del torneo
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
				message.channel.send("+crearclan \"NombredelClan\" \"Líder\" \"Miembros\" \"Facción\"");
				return;
			}
			let server = bot.guilds.get("597732937659842581");
			let adminRoleObject = message.guild.roles.find("name", "STAFF");
			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let NickParticipante3 = args[2];
			let NickParticipante4 = args[3];
			let disponible = args[2];
			var apuntarme = {
				"embed": {
					color: 0xafff00 ,
					title: "**NUEVA SOLICITUD DE CREACIÓN DE CLAN**",
					url: "http://gamedev.es/",				

					fields: [
						{
						name: "📜 Nombre del Clan",
						value: NickParticipante1,
						},
						{
						name: "📜 Líder",
						value: NickParticipante2,
						},
						{
						name: "📜 Miembros",
						value: NickParticipante3,
						},
						{
						name: "📜 Facción",
						value: NickParticipante4,
						}
									 						
					]
				}
			};


			let torneochannel = bot.channels.get("672894817650606130").send(`[${adminRoleObject}]`, apuntarme);
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			
		}
	
	// fin crear clan
	
	
	
	
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
     				"icon_url": "https://i.imgur.com/PqFyBdO.png",
				"text": "GAMETH"
  				  },
				"image": {
      				"url": "https://i.imgur.com/9ffNkhz.png"
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
     				"icon_url": "https://i.imgur.com/PqFyBdO.png",
				"text": "GAMETH"
  				  },
				"image": {
      				"url": "https://i.imgur.com/p54Ljo1.png"
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
     				"icon_url": "https://i.imgur.com/PqFyBdO.png",
				"text": "GAMETH"
  				  },
	   		 	"image": {
      				"url": "https://i.imgur.com/J9UQgr9.png"
    				},

				    "fields": [
				 ]
				  }
				}
				  	
							
	bot.channels.get("672783077700796430").send(`[${adminRoleObject}]`, embebido);
	
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
                              title: "**NUEVA SUGERENCIA**",
              url: "http://gamedev.es/",

              description: comunicado,
              timestamp: message.createdAt,
                          }
                  };

              bot.channels.get("672785811888013321").send(`[${adminRoleObject}]`, embebido);
              message.delete().catch(O_o=>{});
      }	
	/// FIN SUGERENCIA ///
	
	// +solicitar //
if(message.content.toUpperCase().startsWith("+SOLICITAR")){
let adminRoleObject = message.guild.roles.find("name", "STAFF");	
  var comunicado = message.content.replace("+solicitar ", "");
    var embebido = {
                          "embed": {
                              color: 0xc6ff00,
                              author: {
                                  name: message.author.tag,
                                  icon_url: message.author.avatarURL
                              },
                              title: "**NUEVA SOLICITUD BANDERA BLANCA**",
              url: "http://gamedev.es/",

              description: comunicado,
              timestamp: message.createdAt,
                          }
                  };

              bot.channels.get("672800388184801310").send(`[${adminRoleObject}]`, embebido);
              message.delete().catch(O_o=>{});
      }	
	/// FIN SUGERENCIA ///
	

   
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
