if [ -z "$1" ]; then
	echo "usage: set_topic <mqttUrl here>"
	exit 1	
fi

curl -H "Content-Type: application/json" -X POST -d "{ \"mqttUrl\": \"$1\" }" http://localhost:4002/mqtt_url
