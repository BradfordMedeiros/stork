# install daemon dependencies
(
   cd ../ 
   yarn install
)

# copy stork into opt/storkd and setup systemd service
sudo mkdir -p /opt/stork-desktop
sudo cp -r .. /opt/stork-desktop

xdg-open /opt/stork-desktop/service/readme.txt
