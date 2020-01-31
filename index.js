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
    message.react("6727861279205621965");
    message.react("672786146006401044");
	}
	


	
	 



if (message.channel.id == message.channel.id) { 				    // COMANDOS SOLO STAFF


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

	if (message.content.startsWith(ft + "addrol")) {           //  +addrol @user      = A帽ade un rol establecido en por ID
	
				let rUser = message.guild.member(message.mentions.users.first());
				let role = message.guild.roles.find("id", "458226959907028992");
				let guild = bot.guilds.get("458220475957379074");
				rUser.addRole(role).catch(console.error);
				message.channel.send({
					embed: {
						color: 0xc500ff,
						description: "ROL a帽adido a " + rUser + " correctamente",
					}
				});
				message.delete();
		}
		
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

	// fin comunicar general
	
	if (message.content.startsWith(ft + "partidared")) {  //  +quedada "Nick1" "Nick2"     = Participantes del torneo
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
				message.channel.send("+partidared \"Descripci贸n\" \"D铆a y Hora\"");
				return;
			}
			let server = bot.guilds.get("597732937659842581");
			let adminRoleObject = message.guild.roles.find("name", "Red Dead");
			let NickParticipante1 = args[0];
			let NickParticipante2 = args[1];
			let disponible = args[2];
			var apuntarme = {
				"embed": {
					color: 0xafff00 ,
					title: "**NUEVA PARTIDA PROGRAMADA**",
					url: "http://gamedev.es/",				

					fields: [
						{
						name: "馃摐 Descripci贸n",
						value: NickParticipante1,
						},
						{
						name: "馃搯 D铆a y Hora",
						value: NickParticipante2,
						}
									 						
					]
				}
			};


			let torneochannel = bot.channels.get("649325138289885209").send(`[${adminRoleObject}]`, apuntarme);
			if(!torneochannel) return message.channel.send("No se encuentra la sala");


			message.delete().catch(O_o=>{});
			
		}
	
	



	// fin comunicar general
	

	if (message.content.startsWith(ft + "staff")) {            //  +staff   = Informaci贸n de todos los comandos de STAFF
		if(message.member.roles.find("name", "STAFF")){
		  let sicon = message.guild.iconURL;
		  let serverembed = new Discord.RichEmbed()
		  .setDescription("**COMANDOS STAFF**")
		  .setColor("#C6FF00")
		  .setThumbnail(sicon)
		  .addField("**+clear cantidad**", "Elimina X cantidad de mensajes de un canal de texto")
		  .addField("**+comunicar Desarrollo**", "Redactamos un comunicado, solo usar en sala <#561601089460371457>")
		  .addField("**+dm @user Mensaje**", "Le enviamos un DM a un usuario con un mensaje")
		  
		  return message.channel.send(serverembed);
		  }
		}
		

	
    } // FIN COMANDOS STAFF
	
	
if (message.channel.id == message.channel.id) { 	// COMANDOS DE MUSICA BOTS

if (message.content.startsWith(ft + "musica")) {         //  BOT MUSICAS
	 let adminRoleObject = message.guild.roles.find("name", "✅Verificado");	
			let embed1 = {
				"embed": {
				    "title": "LISTA DE COMANDOS BOT MÚSICA",
				    "color": 13041408,
				    "timestamp": "2019-04-29T12:14:55.011Z",
				    },
				    "thumbnail": {
				      "url": "https://i.imgur.com/scHLkXu.png"
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
							
	message.channel.send(`[${adminRoleObject}]`, embed1);
	
	
	
}

       
       // SISTEMA NOTIFICACIONES //
       if (message.content.startsWith(ft + "online")) {         //  ONLINE
	 let adminRoleObject = message.guild.roles.find("name", "✅Verificado");	
			let embed1 = {
				"embed": {
				    
				    "color": 13041408,
				    "timestamp": "2019-04-29T12:14:55.011Z",
				    },
				    "image": {
				      "url": "https://i.imgur.com/1jYU0Z9.jpg"
				    },
				    
				    
					}
				  };	
							
	message.channel.send(`[${adminRoleObject}]`, embed1);
		
	
	
	
	
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
