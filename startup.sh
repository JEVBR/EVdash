#!/bin/bash



# chmod 666 /dev/ttyUSB0 >> /home/jevbr/code/EVdash/startuplog.log


#cd /home/jevbr/code/EVdash

sleep 20

echo "testtt" >> /home/jevbr/code/EVdash/startuplog.log 

# node test.js

# mate-terminal -e "node test.js; $SHELL" --display=DISPLAY
mate-terminal -e "node test.js; bash" --display=DISPLAY

# mate-terminal -e --tab --title="EVdashNodeServer" 


# --command=" bash -c 'cd /home/jevbr/code/EVdash; node test.js; $SHELL'"