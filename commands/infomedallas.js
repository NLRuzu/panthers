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


	
  message.channel.send({
                    "embed":{
			    
            color: 0xc6ff00,
            title: "DETALLES MEDALLAS",
            description: "Todos los detalles de cada medalla",
            
		thumbnail: {
            url: "https://i.imgur.com/Jtpery6.png",
           },
            
            fields:
	[
		{
		name: "💛 Fiel a GametH",
		value: "*Obtenida tras demostrar vuestra fidelidad, compromiso y actividad a la comunidad. Solo los verdaderos guerreros la llevan.*",
		inline:false 
		}
    
    
    
    
    
		
		
		    
                
		
	
	]
              }
           })
       }

module.exports.help = {
  name: "infomedallas"
}
