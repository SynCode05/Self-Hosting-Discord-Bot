module.exports = (bot) => {
    const logger = require("../utils/logger.js");
    logger.ready(`Logged in to ${bot.user.username} (${bot.guilds.cache.size} servers - ${bot.users.cache.size} users)!`)
};