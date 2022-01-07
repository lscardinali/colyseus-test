// script.js
exports.requestJoinOptions = function (i) {
    return { requestNumber: i };
}

exports.onJoin = function () {
    console.log(this.sessionId, "joined.");

    this.onMessage("*", (type, message) => {
        console.log("onMessage:", type, message);
    });

    setInterval(() => {
        this.send("type", { direction: "left"});
    }, 33);
}

exports.onLeave = function (code) {
    console.log(this.sessionId, "left. reason " + code);
}

exports.onError = function (err) {
    console.log(this.sessionId, "!! ERROR !!", err.message);
}

exports.onStateChange = function (state) {
}