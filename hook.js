module.exports = async (context) => {
  const request = JSON.parse(context.http.body);
  if (request.message.text.substring(0, 5) === "/sium") {
    const coin = request.message.text.substring(6);
    let body = {};
    body.chat_id = request.message.chat.id;
    body.text = "🗺";
    body.method = "sendMessage";
    body.reply_markup = {
      inline_keyboard: [
        [
          {
            text: coin,
            web_app: {
              url: `https://michelebanfi.github.io/persuccello/index.html?${coin}`,
            },
          },
        ],
      ],
    };
    let response = {
      headers: { "Content-Type": "application/json" },
      statusCode: 200,
      body: JSON.stringify(body),
    };

    return response;
  } else {
    return null;
  }
};
