const { Telegraf, Markup } = require("telegraf");
const bot = new Telegraf("5352015609:AAEZu030n48m9XD_wFamFgdu6IYjTNQ8wCo");

bot.command("sium", (ctx) => {
  //ctx.reply(ctx.message.text.substring(5));
  ctx.reply(
    "keyboard",
    Markup.inlineKeyboard(Markup.button.webApp(`open`, "url"))
  );
});

bot.on("text", (ctx) => {
  // Explicit usage
  //ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);

  // Using context shortcut
  ctx.reply(`Hello ${ctx.message}`, inlineMessageRatingKeyboard);
});

// bot.on("callback_query", (ctx) => {
//   // Explicit usage
//   ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

//   // Using context shortcut
//   ctx.answerCbQuery();
// });

// bot.on("inline_query", (ctx) => {
//   const result = [];
//   // Explicit usage
//   ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);

//   // Using context shortcut
//   ctx.answerInlineQuery(result);
// });

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
