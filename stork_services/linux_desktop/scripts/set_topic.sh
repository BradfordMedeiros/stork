if [ -z "$1" ]; then
	echo "usage: set_topic <some value here>"
	exit 1	
fi

curl -H "Content-Type: application/json" -X POST -d "{ \"topic\": \"$1\" }" http://localhost:4002/topic
