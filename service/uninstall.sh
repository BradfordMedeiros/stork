
sudo service storkd stop
sudo rm -rf /opt/storkd
sudo rm -rf /etc/init.d/storkd
sudo systemctl daemon-reload 
sudo rm /usr/bin/stork
