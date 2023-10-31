const { saveDatabase } = require("../base");
const database = require("../../database/database.json")
const createRoleCmd = mc.newCommand("createrole", "create role", PermType.GameMasters)
createRoleCmd.mandatory("role", ParamType.String)
createRoleCmd.overload(["role"])
createRoleCmd.setCallback((cmd, origin, output, results) => {
    if (database.roles.includes(results.role)) {
        return output.error("エラー:すでにそのロールは存在します。")
    } else {
        database.roles.push(results.role)
        saveDatabase()
        return output.success("ロールを作成しました。")
    }
})
createRoleCmd.setup()