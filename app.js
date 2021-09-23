/*
  NODE js library handler to get data from serial ports and push
  them to the websockets and display in GUI
*/

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const keypress = require('keypress');

const express = require('express');

const app = express();

const http = require('http').Server(app);

const path = __dirname + '/';

const WebSocket = require('ws');
const server = new WebSocket.Server({
  port: 3001
});

const SerialPort = require('serialport');

const router = express.Router();

const settings = require('./local-settings.json');

const port = new SerialPort(settings.port, {
  baudRate: 115200,
  bufferSize: 1,
  rtscts: true,
});

let str = '';

router.use('/', (req, res) => { res.sendFile(path + req.url); });
app.use('/', router);
app.use(express.static(__dirname + '/public'));

port.on('data', (data) => {
  str += data;
  if (str.includes('!')) {
    port.flush();
   console.log(str);
    str = str.replace(/\n/g, "");
    str = str.replace(/\r/g, "");
    split_msg = (str.split(','))
    if (split_msg[0] !== "#T") { 
      console.log(str)
      console.log('--------------')
    } else {
      process.stdout.write(`${str}${'\033[0G'}`);
    }
    sockets.forEach((socket) => {
      socket.send(str)	
    })
    // io.emit('chat message', str); // send msg to web interface. -> will go to Useeffect in app!
    str = '';
  }
});

	
// //Start
// TransmitString("#T");

// //1
// 	strcpy(showConfigString,",xxxxx");
// 	u16_to_str(&showConfigString[1], myDataStream.Id_times10, 5);
// 	TransmitString(showConfigString);

// //2
// 	strcpy(showConfigString,",xxxxx");
// 	u16_to_str(&showConfigString[1], myDataStream.Iq_times10, 5);
// 	TransmitString(showConfigString);

// //3
// 	strcpy(showConfigString,",xxxxx");
// 	u16_to_str(&showConfigString[1], myDataStream.IdRef_times10, 5);
// 	TransmitString(showConfigString);

// //4
// 	strcpy(showConfigString,",xxxxx");
// 	u16_to_str(&showConfigString[1], myDataStream.IqRef_times10, 5);
// 	TransmitString(showConfigString);
				
// //5
// 	strcpy(showConfigString,",xxxxx");
// 	u16_to_str(&showConfigString[1], myDataStream.batteryAmps_times10, 5);
// 	TransmitString(showConfigString);

// //6
// 	strcpy(showConfigString,",xxxxx");
// 	u16_to_str((char *)&showConfigString[1], myDataStream.Ib_times10, 5);	 // ex: intString[] = "+087"
// 	TransmitString(showConfigString);

// //7	
// 	strcpy(showConfigString,",xxxxx");
// 	u16_to_str((char *)&showConfigString[1], myDataStream.Ia_times10, 5);	 // ex: intString[] = "+087"
// 	TransmitString(showConfigString);

// //8
// 	strcpy(showConfigString,",xxx ");
// 	u16_to_str(&showConfigString[1], myDataStream.percentOfVoltageDiskBeingUsed, 3);
// 	TransmitString(showConfigString);

// //9
// 	strcpy(showConfigString,",xxxxx");
// 	u16_to_str(&showConfigString[1], myDataStream.rawThrottle, 5);
// 	TransmitString(showConfigString);

// //10
// 	strcpy(showConfigString,",xxx");
// 	u16_to_str(&showConfigString[1], myDataStream.throttle, 3);
// 	TransmitString(showConfigString);

// //11
// 	strcpy(showConfigString,",xxxx");
// 	u16_to_str((char *)&showConfigString[1], myDataStream.slipSpeedRPM, 4); // intString[] = "+0345".  Now, add a comma and null terminate it.
// 	TransmitString(showConfigString);

// //12
// 	strcpy(showConfigString,",xxxxx");
// 	u16_to_str((char *)&showConfigString[1], myDataStream.electricalSpeedRPM, 5); // intString[] = "+03457".  Now, add a comma and null terminate it.
// 	TransmitString(showConfigString);

// //13
// 	strcpy(showConfigString,",xxxxx");
// 	u16_to_str((char *)&showConfigString[1], myDataStream.mechanicalSpeedRPM, 5); // intString[] = "+03457".  Now, add a comma and null terminate it.
// 	TransmitString(showConfigString);

// // 14
// 	strcpy(showConfigString,",xxxxx");
// 	u16_to_str((char *)&showConfigString[1], POSCNT, 5); // intString[] = "03457".  Now, add a comma and null terminate it.
// 	TransmitString(showConfigString);

// // end
// 	TransmitString(",!\r\n");

const sendSerial = (data) => {
  console.log(data);
  port.write(data);
};

// let theSocket 
let sockets = []
server.on('connection', function(socket) {
  sockets.push(socket) 
  console.log('sock conn')


  // When you receive a message, send that message to every socket.
  socket.on('message', function(msg) {
    //console.log(msg)
	//socket.send("eeeeee")
  });

  // When a socket closes, or disconnects, remove it from the array.
  socket.on('close', function() {
    sockets = sockets.filter(s => s !== socket);
	
	//theSocket = undefined
	console.log('sock xiauu')
  });
}); 

setTimeout(pinger, 500)
var pingCount = 0
function pinger() {
  // console.log("ping")
  str = `#T,${
    Math.random() * 100},
    ${Math.random() * 100},
    ${Math.random() * 100},
    ${Math.random() * 100},
    12345,
    ${Math.random() * 100},
    ${Math.random() * 100},
    100,
    00005,
    295,
    0000,
    00000,
    00000,
    00000,
    !`
  sockets.forEach((socket) => {
    socket.send(str)	
  })
	setTimeout(pinger,
     500)
}

http.listen(3000, () => {
  console.log('listening on :3000');
  console.log('--------------------Server Started---------------------------');
});
