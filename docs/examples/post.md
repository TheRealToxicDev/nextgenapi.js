### Constructor

```
NextGen(client, token)
```

###### Arguments
Parameter | Type | Optional | Description
|--------------|----------|--------------|--------------|
token | String | No | The API Auth Token found on your bots page.
client | Snowflake | No | The Client ID for the bot you want to post stats to.

---

### Discord.js v12 Example

```js
const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "!";
const NextGen = require("nextgenapi.js")
const ngbl = new NextGen(client.user.id,"bot-auth-token")

client.on("ready", () => {
console.log(`Logged in as ${client.user.tag}.`)
setInterval(() => {
   ngbl.postStats(client.guilds.cache.size)
  })
}, 300000) // 5 Minutes in MS

client.on("message", message => {
    if(message.author.bot) return
    if(message.content == prefix + "ping"){
        message.reply(`Pong! it took ${client.ws.ping}`)
    }
})

client.login("token")

```
