# EVdash

setup (on Raspberry Pi-3 Ubuntu - Mate)

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

# Pi3 Startup

To change the USB permissions at startup of the PI3 ad the following line to the SUDO CRONTAB by:

$ sudo crontab -e

add the line:

@reboot chmod 666 /dev/ttyUSB0 && echo "run SUDO crontab" >> /home/jevbr/code/EVdash/startuplog.log 2>&1

And in the pull down menu "System", "Startup Applications" add the folowing items:

chromium-browser --password-store=basic --kiosk  
 
mate-terminal --working-directory=/home/jevbr/code/EVdash -e 'node test.js' 
 