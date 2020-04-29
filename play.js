const connect  = require('./client');
/**
 * Establishes connection with the game server
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

setupInput();

console.log('Connecting ...');
connect();