mc.listen("onServerStarted", () => {
    require("./playerJoin");
    require("../commands");
});
