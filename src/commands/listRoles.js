const database = require("../../database/database.json");
const listRolesCmd = mc.newCommand("listroles", "show list All roles", PermType.GameMasters)
listRolesCmd.overload([])
listRolesCmd.setCallback((cmd, origin, output, results) => {
    let c = "==== §cRole List§r ===="
    for (const role of database.roles) {
        c += `\n - ${role}`
    }
    c += "\n==================="
    output.success(c)
})
listRolesCmd.setup()