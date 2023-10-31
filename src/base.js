const path = require("path")
const fs = require("fs")
const database = require("../database/database.json")
const saveDatabase = () => {
    return new Promise((resolve) => {
        const databasePath = path.resolve(__dirname, "../database/database.json")
        fs.writeFile(databasePath, JSON.stringify(database), (err) => {
            console.log(database)
            resolve(err)
        })
    })
}
const removeElement = (array, element) => {
    return array.filter((value) => {
        return value != element
    })
}
const getPlayerByNameTag = (nameTag) => {
    return mc.getPlayer(nameTag) ? mc.getPlayer(nameTag) : undefined
}

exports.saveDatabase = saveDatabase
exports.removeElement = removeElement
exports.getPlayerByNameTag = getPlayerByNameTag