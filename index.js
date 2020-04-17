const Discord = require('discord.js');
const bot = new Discord.Client()
const fs = require('fs')
const utils = require("./utils/functions.js");
const rls = require("readline-sync");
const { warn, error } = require("./utils/logger.js");

try {
    require("./configuration.json");
} catch (e) {
    console.log("[Startup Log]: Configuration file not found.");
    console.log("[Startup Log]: Creating a configuration file...");
    const defaults = {
        "_token": "TOKEN",
        "_prefix": "-",
        "_owner": "ID",
        "_admins": [],
        "_guild": "ID",
        "_welcome": "ID",
        "_redTickEmoji": "❌",
        "_greenTickEmoji": "✅"
    };
  
    fs.writeFileSync("configuration.json", JSON.stringify(defaults, null, 4));
  
    console.log("[Startup Log]: Created a new configuration file.");
    console.log("[Startup Log]: Use 'node configure.js' to edit your configuration via interactive command line interface.");
    process.exit(1);
} 

const { _token, _welcome, _leaving} = require("./configuration.json");  


bot.on('guildMemberAdd', async (member) =>  {
    const chan = bot.channels.cache.get(_welcome, (err) => {
        return warn('Welcome channel could not be found.');
    });
    return chan.send(`Welcome ${member} to ${member.guild}.`); // Send message to general text channel
});



fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        bot.on(eventName, event.bind(null, bot));
    });
});

bot.login(_token).catch(err => {
    require('dns').resolve('www.google.com', function connection(err) {
        if (!err) return error('Token provided is invalid! Please run node configure.js to change it!');
        return error('You seem to be offline!');
    });
});
