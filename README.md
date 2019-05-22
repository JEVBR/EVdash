# EVdash

This is the software of a car dashboard i use to monitor currents, voltages, speed, etc. of the frequency inverter of my DIY electric car.

The car uses a AC inverter based on the project of Paul Holmes. 

The inverter sends serial data to a Raspberry PI3 on which this EVdash software is running. The PI3 displays the recieved data on a monitor.

Software uses NODE JS, Socket.io etc to create a localhost. On this localhost the data from serial port is made available to a browser (tested on Google Chrome).

# setup (on Raspberry Pi-3 using Ubuntu)

curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

npm i socket.io

npm i espress

npm i serialport@latest  

find the serial port:

$ dmesg | grep tty

see its permissions:

$ ls -lh /dev/ttyUSB0 (or whatever name is assigned to your serial port)

set the permission:

$ sudo chmod 666 /dev/ttyUSB0

# Start the server

$ node test.js

in case of an error: cannot open /dev/ttyACM0 or similar, check the serial port and its settings. The port settings are found in the file "local-settings.json"

For my DELL computer, the content of this file is:

{
  "port": "/dev/ttyACM0",
  "device": "DELL"
}

for my PI3 :

{
  "port": "/dev/ttyUSB0",
  "device": "PI3"
}

This file is not included in the git-repo, since it is different depending on which device is used to connect to the serial port. So... make the file by hand.

# Start the browser

go to http://localhost:3000

# JEVBR
