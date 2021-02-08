### Constructor

```
NextGen()
```

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
