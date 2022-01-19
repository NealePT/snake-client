const { connect } = require("./client");

let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = key => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write("Move: up");
    }
    if (key === 'a') {
      conn.write("Move: left");
    }
    if (key === 's') {
      conn.write("Move: down");
    }
    if (key === 'd') {
      conn.write("Move: right");
    }
    if (key === 'g') {
      conn.write("Say: Good luck!");
    }
    if (key === 'h') {
      conn.write("Say: Have fun!");
    }
    if (key === 'j') {
      conn.write("Say: Out of my way!");
    }
  };
  stdin.on("data", handleUserInput);


  return stdin;
};

module.exports = {
  setupInput
};
