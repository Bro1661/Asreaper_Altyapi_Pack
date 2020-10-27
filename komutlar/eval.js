const Discord = require("discord.js");
const util = require("util");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let tokenuyari = `SyntaxError: Unexpected token: (Tokeni attım geldi mi ?)`;
  var embed = new Discord.RichEmbed().setColor("RANDOM");
  var code = args.join(" ");

  if (!args[0]) {
    message.channel.send(`Lütfen test edeceğiniz kodu **yazın!**`);
    return;
  }

  if (code.match(/(client.token)/g)) {
    let token_uyari = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("Hata çıktı;", `\`\`\`xl\n${tokenuyari}\`\`\``);
    message.channel.send(token_uyari);
    return;
  }
  if (args[0] === "process.env.TOKEN") code = "Siktir Git";
  if (code.match(/(client["token"])/g)) {
    let token_uyari2 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("Hata çıktı;", `\`\`\`xl\n${tokenuyari}\`\`\``);
    message.channel.send(token_uyari2);
    return;
  }

  function clean(text) {
    if (typeof text !== "string")
      text = require("util").inspect(text, { depth: 0 });
    text = text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }

  try {
    var evaled = clean(await eval(code));
    if (evaled.startsWith("NDC4O")) evaled = tokenuyari;
    if (evaled.constructor.name === "Promise")
      embed.setDescription(`\`\`\`\n${evaled}\n\`\`\``);
    else embed.setDescription(`\`\`\`xl\n${evaled}\n\`\`\``);
    let giren_cıkan = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("Giren", `\`\`\`javascript\n${code}\n\`\`\``)
      .addField("Çıkan", `\`\`\`xl\n${evaled}\`\`\``);
    message.channel.send(giren_cıkan);
  } catch (err) {
    embed.setColor("RANDOM");
    embed.addField("Bir hata meydana geldi", `\`\`\`xl\n${err}\n\`\`\``);
    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eval"],
  permLvl: 4
};
exports.help = {
  name: "eval",
  description: "eval",
  usage: "eval"
};
