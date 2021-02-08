### Constructor

```
NextGen()
```

###### Arguments
Parameter | Type | Optional | Description
|--------------|----------|--------------|--------------|
daily_votes | Number | Yes | Fetch the Daily Votes for the Bot.
short_desc | Snowflake | Yes | Fetch the Short Description for the Bot.
prefix | String | Yes | The Bots Prefix.
ownerID | Snowflake | Yes | The Bot Owners ID
tags | String | Yes | List of the Bots Tags on our Website.
support | String | Yes | The Bots assigned Support Link Token (NOTE: This only returns the Invite Token you have to add the link Example: `https://discord.gg/${7v4fNuF5Bm}`)
total_votes | Number | The Bots total Vote Count.
guilds | Number | Total Number of Guilds the Bot is in (If posting stats)

---

### Example
```js
const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "!";
const NextGen = require("nextgenapi.js")
const stats = new NextGen()

client.on("ready", () => { // ready listenerconsole.log(`Logged in as ${client.user.tag}`)})
client.on("message", message => { // message listener
    if(message.author.bot) return;
    if(message.channel.type !== "text") return;
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(message.content == (prefix + "ping")){
        message.reply(`Pong ${client.ws.ping}ms`)
    }
     if(message.content == (prefix + "stats")){
        stats.get(client.user.id, function(data){
        let embed = new MessageEmbed()
        .addField("Total Votes", data.total_votes);

        message.channel.send(embed)
        })
    }
})


client.login("token")
```
