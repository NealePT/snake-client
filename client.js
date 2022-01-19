const net = require("net");


const connect = function() {
  const conn = net.createConnection({
    host: '192.168.2.59',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", (client) => {
    console.log("Successsfully connected to game server");
    conn.write("Name: NPT");
    // conn.write("Move: up");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });

  conn.on("data", data => {
    console.log(data);
  });


  return conn;
};


module.exports = {
  connect
};