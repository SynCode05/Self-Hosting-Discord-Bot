const moment = require("moment");
const colors = require("colors");

module.exports = {

  log: function(ctx) {
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
    console.log(`${timestamp} ${colors.bgCyan("[LOG]")}: ${ctx}`);
  },

  ready: function(ctx) {
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
    console.log(`${timestamp} ${colors.green("[READY]")}: ${ctx}`);
  },

  error: function(ctx) {
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
    console.log(`${timestamp} ${colors.bgRed("[ERROR]")}: ${ctx}`);
  },

  warn: function(ctx) { 
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
    console.log(`${timestamp} ${colors.bgYellow("[WARN]")}: ${ctx}`);
  },

  debug: function(ctx) { 
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
    console.log(`${timestamp} ${colors.bgGreen("[DEBUG]")}: ${ctx}`);
  },

  cmd: function(ctx) { 
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
    console.log(`${timestamp} ${colors.bgBlack("[CMD]")}: ${ctx}`);
  },
};

