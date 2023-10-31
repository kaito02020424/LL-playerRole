const { removeElement, saveDatabase } = require("../base");
const database = require("../../database/database.json");
const removeRoleCmd = mc.newCommand("removerole", "remove role", PermType.GameMasters)
removeRoleCmd.mandatory("role", ParamType.String)
removeRoleCmd.overload(["role"])
removeRoleCmd.setCallback((cmd, origin, output, results) => {
    if (database.roles.includes(results.role)) {
        const newRoles = removeElement(database.roles, results.role)
        database.roles = newRoles
        for (let key in database.playersData) {
            if (database.playersData[key].includes(results.role)) {
                database.playersData[key] = removeElement(database.playersData[key], results.role)
            }
        }
        for (let key in database.willAddRolePlayers) {
            if (database.willAddRolePlayers[key].includes(results.role)) {
                database.willAddRolePlayers[key] = removeElement(database.willAddRolePlayers[key], results.role)
            }
        }
        saveDatabase()
        return output.success("ロールを削除しました。")
    } else {
        return output.error("エラー:そのロールは存在しません。")
    }
})
removeRoleCmd.setup()