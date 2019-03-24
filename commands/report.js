const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
    var report = {
		"embed": {
			color: 0xff0000 ,
			title: "**COMANDOS DE FUNCIONAMIENTO DE TOQUES**",
			url: "http://gamedev.es/",				
			fields: [
				{
				name: "**+report1 @usuario razón**",
				value: "Damos el primer toque de atención"
				},
				{
				name: "**+report2 @usuario razón**",
				value: "Damos el segundo toque de atención"
				},
				{
				name: "**+report3 @usuario razón**",
				value: "Damos el tercer toque de atención"
				}
			]
		}
	};

	message.delete().catch(O_o=>{});
     message.channel.send(report);
    
}

module.exports.help = {
  name: "report"
}
