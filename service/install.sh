# install daemon dependencies
(
   cd ../daemon/ 
   yarn install
)

# copy stork into opt/storkd and setup systemd service
sudo mkdir -p /opt/storkd/
sudo cp -r .. /opt/storkd
sudo cp storkd /etc/init.d
sudo systemctl daemon-reload 
sudo systemctl start storkd

# setup client script
sudo cp ../client/stork.sh /usr/bin/stork
