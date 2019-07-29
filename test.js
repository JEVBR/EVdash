/*
  NODE js library handler to get data from serial ports and push
  them to the websockets and display in GUI
*/

const keypress = require('keypress');

const express = require('express');

const app = express();

const http = require('http').Server(app);

const path = __dirname + '/';

const io = require('socket.io')(http);

const SerialPort = require('serialport');

const router = express.Router();

const settings = require('./local-settings.json');
//{
//  "port": "/dev/ttyACM0",
//  "device": "DELL"
//}

const port = new SerialPort(settings.port, {
  baudRate: 115200,
  bufferSize: 1,
  rtscts: true,
});

let str = '';

/* Socket IO */
router.use('/', (req, res) => { res.sendFile(path + req.url); });
app.use('/', router);
app.use(express.static(__dirname + '/public'));

port.on('data', (data) => {
  str += data;
  if (str.includes('!')) {
    port.flush();
    console.log(str);
    io.emit('chat message', str); // send msg to web interface.
    str = '';
  }
});

const sendSerial = (data) => {
  console.log(data);
  port.write(data);
};

io.on('CMD', (data) => { console.log(data); });

io.on('connection', (socket) => {
  console.log('User connected'); // this will print when users are connected

  socket.on('chat message', (msg) => { console.log(msg); });

  socket.on('disconnect', (data) => { console.log('-disconnected the socket!-'); });

  socket.on('CMD', (data) => { sendSerial(data); });
});

http.listen(3000, () => {
  console.log('listening on :3000');
  console.log('--------------------Server Started---------------------------');
});

// This part commented since using nodemon now:

// make `process.stdin` begin emitting "keypress" events
// keypress(process.stdin);

// // listen for the "keypress" event
// process.stdin.on('keypress', (ch, key) => {
//   console.log('got "keypress"', key);
//   io.close(); // Close current server
//   return process.exit('exit');
// });

// process.stdin.setRawMode(true);
