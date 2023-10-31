const { saveDatabase } = require("../base");
const database = require("../../database/database.json")
mc.listen("onJoin",(player) => {
    if (player.name in database.willAddRolePlayers) {
        if (!(player.xuid in database.playersData)) database.playersData[player.xuid] = []
        for (let element of database.willAddRolePlayers[player.name]) {
            if (!database.playersData[player.xuid].includes(element) && database.roles.includes(element)) {
                database.playersData[player.xuid].push(element)
            }
        }
        delete database.willAddRolePlayers[player.name]
        saveDatabase()
    }
})