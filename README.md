# EVdash

setup (on Raspberry Pi-3 Ubuntu)

curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

npm i socket.io

npm i espress

npm i serialport@latest 

find the serial port:

$ dmesg | grep tty

see its permissions:

ls -lh /dev/ttyUSB0

set the permission:

sudo chmod 666 /dev/ttyUSB0
