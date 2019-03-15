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

const port = new SerialPort('/dev/ttyACM0', { // DELL
// const port = new SerialPort("/dev/ttyUSB0", { // PI3

  baudRate: 115200,
  bufferSize: 1,
  rtscts: true,
});

let str = '';

// test
/* Socket IO */
router.use('/', (req, res) => { res.sendFile(path + req.url); });
app.use('/', router);
app.use(express.static(__dirname + '/public'));

port.on('data', (data) => {
  // console.log(data);
  // if(flag_V == 0) validateData(data) ;
  // else{
  str += data;
  // console.log(str);
  if (str.includes('!')) {
    port.flush();
    console.log(str);
    io.emit('chat message', str); // send msg to web interface.
    str = '';
  }
});

const sendSerial(data) => {
  port.write(data);
  console.log(data);
};

io.on('CMD', (data) => { console.log(data); });

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('chat message', (msg) => { console.log(msg); });

  socket.on('disconnect', (data) => { console.log('-disconnected the socket!-'); });

  socket.on('CMD', (data) => { sendSerial(data); });
});

/* Create http server */
app.get('/', (req, res) => { res.sendFile(__dirname + '/index.html'); });

http.listen(3000, () => {
  console.log('listening on :3000');
  console.log('--------------------Server Started---------------------------');
});

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', (ch, key) => {
  console.log('got "keypress"', key);
  io.close(); // Close current server
  return process.exit('exit');
});

process.stdin.setRawMode(true);
