var discord = require('discord.js');

const SteamAPI = require('steamapi');
const steam = new SteamAPI('0E62E745AA91DBD506BE28EC4B3987F9');
var bot = new discord.Client();
var prefix = "b!";

 




bot.on("guildMemberAdd", member => {
    member.user.send("Hey there, " + member.username + "! Welcome to the one and only Brawl Hallacademy!")

});

bot.on('message', (message) => {
    if (message.content.startsWith(prefix)) {
        console.log("A")
        var args = message.content.slice(prefix.length).split(/ +/);
        var command = args.shift().toLowerCase();
        var sentBy = message.author.username
        var mention = message.mentions.first
        
        if (command == 'class') {
            if (args[0] == "open") {
                message.channel.send("Please type the class you want to open.")
                    .then((newmsg) => {
                   
                    
                    newmsg.channel.awaitMessages(response => message.content, {
                        max: 5,
                        maxMatches: 1,
                        // errors: ['time'],
                      })
                      .then((collected) => {
                        
                        if (collected.first().author == message.author) {
                            if (bot.channels.find("name","Class ".concat(collected.first().content))) {
                                message.channel.send("For what rank?")
                                .then((newmsg) => {
                            
                                
                                newmsg.channel.awaitMessages(response => message.content, {
                                    max: 5,
                                    maxMatches: 1,
                                    // errors: ['time'],
                                })
                                .then((collected2) => {
                                if (message.guild.roles.find("name", collected2.first().content)){
                                    bot.channels.find("name","Class ".concat(collected.first().content)).overwritePermissions(message.guild.roles.find("name", collected2.first().content).id, {
                                        CONNECT: true,
                                        SPEAK: true
                                    });
                                bot.channels.find("name","class-announcements").send("Hey everyone! \n \n" + collected.first().author + " is hosting a class!\nInformation:\nClass: " + collected.first().content + "\nRank: " + collected2.first().content + "\n\nTo join the class, just click the link below!\n " + "https://discordapp.com/channels/566087969241301013/" + bot.channels.find("name","Class ".concat(collected.first().content)).id + "\nMake sure to be quick though, because the class can only fit " + bot.channels.find("name","Class ".concat(collected.first().content)).userLimit + " people!\nIf you are wondering why it's a link and \nwhy you can't just join the channel, it's so we can screenshare so we can show examples!") 
                                }})})
                            } else {
                                message.channel.send("Could not find class! Make sure that you are only typing the **number and the letter!**, for example: 1A!")
                            }
                        } else {
                            message.channel.send("Oh no! The command has been cancelled because someone typed while I was trying to execute it! :(")
                        }
                
        })})}
        if (args[0] == "close") {
            message.channel.send("Please type the class you want to close.")
                .then((newmsg) => {
               
                
                newmsg.channel.awaitMessages(response => message.content, {
                    max: 5,
                    maxMatches: 1,
                    // errors: ['time'],
                  })
                  .then((collected) => {
                    
                    if (collected.first().author == message.author) {
                        if (bot.channels.find("name","Class ".concat(collected.first().content))) {
                            message.channel.send("For what rank?")
                            .then((newmsg) => {
                        
                            
                            newmsg.channel.awaitMessages(response => message.content, {
                                max: 5,
                                maxMatches: 1,
                                // errors: ['time'],
                            })
                            .then((collected2) => {
                            if (message.guild.roles.find("name", collected2.first().content)){
                                bot.channels.find("name","Class ".concat(collected.first().content)).overwritePermissions(message.guild.roles.find("name", collected2.first().content).id, {
                                    CONNECT: false,
                                    SPEAK: false
                                });
                                message.channel.send("Done!")
                            }})})
                        } else {
                            message.channel.send("Could not find class! Make sure that you are only typing the **number and the letter!**, for example: 1A!")
                        }
                    } else {
                        message.channel.send("Oh no! The command has been cancelled because someone typed while I was trying to execute it! :(")
                    }
            
    })})}
                
            
            };



        }
        
        });


bot.login('process.env.BOT_TOKEN');
