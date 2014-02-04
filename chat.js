var net = require("net");

var socks = []

// quintessential chat example 
net.Server(function(socket) {

    socks.push(socket);

    socket.on("data", function(data) {
        console.log("rec'd:", data.toString());
        for (var i in socks) {
            if (socks[i] == socket) continue;
            socks[i].write(data);
        }
    });

    socket.on("end", function() {
        var idx = socks.indexOf(socket);
        delete socks[idx];
    });

}).listen(1024);

// connect using nc <ip> 1024