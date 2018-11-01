var Discord = require('discord.js');
var mysql = require('mysql');
var result;
var number;
var someVar = [];
const bot = new Discord.Client();


const token = 'NDI3MzAzMjA3NDYzNTUwE';

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}.`);
  bot.user.setStatus('invisible')
});


var con = mysql.createConnection({
  host: "localhost",
  port: "1051",
  user: "root",
  password: "",
  database: "mydb"
});


  con.query("SELECT post FROM data", function (err, result, fields) {
    if(err) {
      throw err;
    } else {
      setValue(result);
    }
  });

  function setValue(value) {
  someVar = value;
console.log(someVar);
}

    bot.on('message', function(message,value) {
    if (message.author.bot) return;
    if (message.content.startsWith(".send")) {
    final = someVar;
  message.channel.send(final[0].post);
 }
     });

bot.login(token);
