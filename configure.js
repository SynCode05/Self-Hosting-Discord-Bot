const rls = require("readline-sync");
const fs = require("fs");

try {
  require("./configuration.json");
} catch (e) {
  console.log("Configuration file not found.");
  console.log("Creating a configuration file...");
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
  console.log("Inserting defaults...");
  
  fs.writeFileSync("configuration.json", JSON.stringify(defaults, null, 4));

  console.log("Created a new configuration file.");
  console.log("Loading configurer...");
}

var defs = fs.readFileSync("configuration.json", "utf8");
defs = JSON.parse(defs);

console.log("");
console.log("!!! Enter the values you want, the values in the round brackets are the default ones, if you want any to remain same just hit enter when you are asked to enter that value and the one in round brackets will be not changed. If is the first run, all settings must be changed to valid ones.");
console.log("");

var token = rls.question(`- Enter your bot's token: (${defs._token}) `);
var prefix = rls.question(`- Enter your default prefix: (${defs._prefix}) `);
var owner = rls.question(`- Enter your discord id: (${defs._owner}) `);
var guild = rls.question(`- Enter your guild id: (${defs._guild}) `);
var welcome = rls.question(`- Enter your welcome channel id: (${defs._welcome}) `);

if (token.length < 1) token = defs._token;
if (prefix.length < 1) prefix = defs._prefix;
if (owner.length < 1) owner = defs._owner;
if (guild.length < 1) guild = defs._guild;
if (welcome.length < 1) guild = defs._welcome;

console.log("");
console.log("Writing the settings...");

defs._token = token;
defs._prefix = prefix;
defs._owner = owner;
defs._guild = guild;
defs._welcome = welcome;
fs.writeFileSync("configuration.json", JSON.stringify(defs, null, 2));
console.log("Wrote the settings. You can now use 'node index.js' to launch the AutoBot.");
