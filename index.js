const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

//process.env.BOT_TOKEN
const bot = new Telegraf("process.env.BOT_TOKEN");

bot.command("sium", (ctx) => {
  //ctx.reply(ctx.message.text.substring(5));
  const coin = ctx.message.text.substring(5);
  console.log(coin);
  ctx.reply(
    "🪙",
    Markup.inlineKeyboard([
      Markup.button.webApp(
        coin,
        `https://michelebanfi.github.io/persuccello/index.html?${coin}`
      ),
    ])
  );
});

bot.launch();

// // Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
