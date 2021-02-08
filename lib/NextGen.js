const fetch = require ('node-fetch');


class NextGen {
    constructor(botid, token) {
        this.botid = botid
        this.token = token

    }

    async postStats(server_count, shard_count) { 

        let body = server_count ? { 'server_count': server_count, 'shard_count': shard_count} : { 'server_count': server_count, 'shard_count': 0 }

        await fetch (`https://nextgenbots.xyz/api/stats/${this.botid}`, {  // Umm, Kinda not sure about this
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json', 'auth': this.token },
        }).then( async (res) => { console.log(await res.json())}) 
    }

    async getStats(botID, response) {
        
        if (!botID) throw new Error('Missing Bot ID, Should be a String.');

        fetch(`https://nextgenbots.xyz/api/info${botID}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(async res => {
            response(await res.json())
        })
    }
}

module.exports = NextGen;