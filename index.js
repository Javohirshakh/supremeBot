const { Telegraf } = require('telegraf')

const bot = new Telegraf('782827992:AAF5qlfrlhCddANh1XieBQtIU2zsgELV4f8')

bot.use(async (ctx, next) => {
  // console.log(getMessageType(ctx.message))
  console.log(ctx.message)
  // ctx.reply('Middleware')
  console.log(ctx.from.first_name, ctx.message.text)
  bot.telegram.sendMessage(626660720, `${ctx.update.message.from.first_name} - ${ctx.message.text}`);
  // throw 'some error'
  await next(ctx)
})

bot.catch((err, ctx) => {
  console.log('ERROR', err)
})
bot.start(ctx=>{
  const {state} = ctx
  console.log(state)
  return ctx.reply(`started`)
})
bot.help(ctx=>ctx.reply('help command'))
bot.settings(ctx=>ctx.reply('Settings'))

bot.command(['stop', 'finish'], (ctx)=>{
  ctx.reply('stop command')
})

bot.mention('botfather', (ctx)=>{
  ctx.reply('botfather mention')
})

bot.phone('+998901231212', (ctx)=>{
  ctx.reply('phone number')
})

bot.hashtag('#bot', (ctx)=>{
  ctx.reply('bothashtag')
})

bot.command('ctx', (ctx)=>{
  ctx.reply(`${ctx.update.message.from.first_name}, hello`)
})

bot.hears('dog', (ctx)=>{
  ctx.reply('who lets the dog out')
})

// bot.on('message', (ctx)=>{
//   console.log(ctx.updateType);
//   console.log(getMessageType(ctx.message))
// })

const getMessageType = (message) => {
  var keys = Object.keys(message);
  var messageType = keys.pop();
  return messageType.toUpperCase();
};

bot
  .launch()
  .then((res) => {
    console.log("Started")
  })
  .catch((err) => console.log(err))
