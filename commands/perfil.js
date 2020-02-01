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
  var medallas = ["633653927715274772", "633653848434671616", "633653772660244491", "641189390793703435"];
  var strMedallas =""; 
    
    for(let i=0; i<medallas.length; i++){
    if(guildMember.roles.has(medallas[i])){
        strMedallas = strMedallas + message.guild.roles.get(medallas[i]) + " \n";
    }
}

var eventos = ["633025474808774697", "638002315348934658"];
  var strEventos =""; 
    
    for(let i=0; i<eventos.length; i++){
    if(guildMember.roles.has(eventos[i])){
        strEventos = strEventos + message.guild.roles.get(eventos[i]) + " \n";
    }
}
	

var clan = ["672778361394823179", "672778497881538598", "672778525920591896", "672778667885330442", "672778586775748620", "672778622603493424"];
 var strClan =""; 
    
    for(let i=0; i<clan.length; i++){
    if(guildMember.roles.has(clan[i])){
        strClan = strClan + message.guild.roles.get(clan[i]) + " \n";
    }
}
	
	
if (!strMedallas) {
strMedallas = "Ninguna";
}
	
if (!strEventos) {
strEventos = "Ninguno";
}
	
if (!strClan) {
strClan = "Ninguno";
}
	


	
  message.channel.send({
                    "embed":{
			    
            color: 0xc6ff00,
            title: "INFORMACIÓN PERFIL",
            description: "Toda la información referente al perfil del usuario",
            
		thumbnail: {
            url: "https://i.imgur.com/8YiKMm4.png",
           },
            
            fields:
	[
		{
		name: "🔗 Perfil de",
		value: `${guildMember}`,
		inline:false 
		},
		{
		name: "🔰 Clan",
		value: `${strClan}`,
		inline:false
		},
		{   
		name: "💿 Eventos Participados",
      		value: `${strEventos}`,
    		inline:false 
                        },       
                {
                name: "📀 Medallas Obtenidas",
                value: `${strMedallas}`,  
	inline:false 	
                 },
		{
                name: "Para ver todas las medallas por secciones de juegos",
                value: "```usa +medallas```",  
	inline:false 	
                 }
	
	]
              }
           })
       }

module.exports.help = {
  name: "perfil"
}
