const { removeElement, saveDatabase } = require("../base")
const database = require("../../database/database.json")
const removePlayerRoleCmd = mc.newCommand("removeplayerrole", "remove player's roles", PermType.GameMasters)
removePlayerRoleCmd.mandatory("player", ParamType.Player)
removePlayerRoleCmd.mandatory("role", ParamType.String)
removePlayerRoleCmd.overload(["player", "role"])
removePlayerRoleCmd.setCallback((cmd, origin, output, results) => {
    if (!database.roles.includes(results.role)) return output.error("エラー:そのロールは存在しません。")
    for (const player of results.player) {
        const playerRoles = database.playersData[player.xuid]
        if (playerRoles.includes(results.role)) {
            database.playersData[player.xuid] = removeElement(playerRoles, results.role)

        } else {
            continue;
        }
    }
    saveDatabase()
    return output.success("指定のプレイヤーからロールを剥奪しました。")
})
removePlayerRoleCmd.setup()