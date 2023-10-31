const { getPlayerByNameTag, saveDatabase } = require("../base")
const database = require("../../database/database.json")
const addPlayerRoleCmd = mc.newCommand("addplayerrole", "add player's roles", PermType.GameMasters)
addPlayerRoleCmd.mandatory("player", ParamType.Player)
addPlayerRoleCmd.mandatory("role", ParamType.String)
addPlayerRoleCmd.mandatory("playerName", ParamType.String)
addPlayerRoleCmd.overload(["player", "role"])
addPlayerRoleCmd.overload(["playerName", "role"])
addPlayerRoleCmd.setCallback((cmd, origin, output, results) => {
    if (!database.roles.includes(results.role)) return output.error("エラー:そのロールは存在しません。")
    if (results.playerName != undefined) {
        if (!(results.playerName in database.willAddRolePlayers)) database.willAddRolePlayers[results.playerName] = []
        database.willAddRolePlayers[results.playerName].push(results.role)
        saveDatabase()
        return output.success("次のログイン時に一致する名前を持つプレイヤーにロールを付与します。")
    }
    for (const player of results.player) {
        if (!(player.xuid in database.playersData)) database.playersData[player.xuid] = []
        if (database.playersData[player.xuid].includes(results.role)) continue;
        database.playersData[player.xuid].push(results.role)
    }
    saveDatabase()
    return output.success("対象にロールを付与しました。")

})
addPlayerRoleCmd.setup()