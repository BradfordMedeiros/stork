
sudo mkdir -p /opt/storkd/
sudo cp -r .. /opt/storkd
sudo cp storkd /etc/init.d
sudo systemctl daemon-reload 
sudo systemctl start storkd
