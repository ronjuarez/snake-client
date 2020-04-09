const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
 });

 // interpret incoming data as text
  conn.setEncoding('utf8'); 

  
  conn.on('connect', () => {
    console.log("Successfully connected to the server");
  })

  conn.on('connect', () => {
    conn.write('Name: RSJ');
  });

};

module.exports = connect;