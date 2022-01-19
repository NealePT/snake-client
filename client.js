const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successsfully connected to game server");
    const args = process.argv;
    conn.write(`Name: ${args[2]}`);
    // Code for if I wanted auto movement:
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