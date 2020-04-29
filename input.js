let connection;

const setupInput = function(conn) {
    console.log(conn);
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', (handleUserInput) => {
        if (handleUserInput === '\u0003') {
            console.log("Thanks for using me, ciao!");
            process.exit();
        }
        if (handleUserInput === 'w'){
            connection.write("Move: up");
        }
        if (handleUserInput === 'a'){
            connection.write("Move: left");
        }
        if (handleUserInput === 's'){
            connection.write("Move: down");
        }
        if (handleUserInput === 'd'){
            connection.write("Move: right");
        }
        if(handleUserInput === 'b'){
            connection.write("Say: You're a snake!")
        }
    })
    return stdin;
  }
  setupInput();
  module.exports = {setupInput};