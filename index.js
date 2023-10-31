ll.registerPlugin("LL-playerRole", "LLBDS Player permission(from BDSX)", [1, 0, 0], { author: "kaito02020424" })
require("./src/events")
const database = require("./database/database.json")
/**
 * 
 * @param {any} player 
 * @param {string} role 
 * @returns {boolean}
 */
const hasPlayerRole = (player, role) => {
    const data = database.playersData[player.xuid]
    if (data == undefined) return false
    return data.includes(role)
}
/**
 * 
 * @param {any} player 
 * @returns {string[] | []}
 */
const getPlayerRole = (player) => {
    const data = database.playersData[player.xuid]
    if (data == undefined) return []
    return data
}

exports.hasPlayerRole = hasPlayerRole
exports.getPlayerRole = getPlayerRole