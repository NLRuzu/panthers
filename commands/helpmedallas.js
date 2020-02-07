const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let guildMember;

  if (message.mentions.members.first()) {
    guildMember = message.mentions.members.first();
  } else {
    guildMember = message.member;
  }

  // We need the User object aswell for different properties
  const user = guildMember.user;
  var comunidad = ["633653927715274772"];
  var strComunidad =""; 
    
    for(let i=0; i<comunidad.length; i++){
    if(guildMember.roles.has(comunidad[i])){
        strComunidad = strComunidad + message.guild.roles.get(comunidad[i]) + " \n";
    }
}

var reddead = ["648991811494477843"];
  var strReddead =""; 
    
    for(let i=0; i<reddead.length; i++){
    if(guildMember.roles.has(reddead[i])){
        strReddead = strReddead + message.guild.roles.get(reddead[i]) + " \n";
    }
}
	

var fortnite = ["633653848434671616", "633653772660244491", "641189390793703435"];
 var strFortnite =""; 
    
    for(let i=0; i<fortnite.length; i++){
    if(guildMember.roles.has(fortnite[i])){
        strFortnite = strFortnite + message.guild.roles.get(fortnite[i]) + " \n";
    }
}
	
	
if (!strComunidad) {
strComunidad = "Ninguna";
}
	
if (!strReddead) {
strReddead = "Ninguno";
}
	
if (!strFortnite) {
strFortnite = "Ninguno";
}
	


	
  message.channel.send({
                    "embed":{
			    
            color: 0xc6ff00,
            title: "COMANDOS DE AYUDA MEDALLAS",
            description: "Toda la información referente a las medallas obtenidas",
            
		thumbnail: {
            url: "https://i.imgur.com/Jtpery6.png",
           },
            
            fields:
	[

                 {
                name: "**Para ver los detalles de las medallas**",
                value: "```usa +infomedallas```",  
	inline:false 	
                 },
	
	]
              }
           })
       }

module.exports.help = {
  name: "helpmedallas"
}
