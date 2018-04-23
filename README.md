# stork

~~~~

List all managed devices:
stork device -l

Add a device
stork device -a testdevice -r 127.0.0.1

Delete a device
stork device -d testdevice_id

List groups
stork group -l

Add a group
stork group -a somegroup

Remove a group
stork group -r anothergroup

Add a device to a group
stork group -a acoolgroup -d somecooldevice

Remove a device from a group
stork group -r acoolgroup -d somecooldevice

List commands for a device
stork command -l -d some_device_id

List commands for a device type
stork command -l -t test_type

List commands for a group
stork command -g some_group -l

Execute command for a device
stork command -d some_device_id -c some_command

Execute command for a group
stork command -g some_group_name -c some_command

Configure a device
stork config -d some_device_id -c some_config_data


Configure a device with a file (not yet supported)
stork config -d some_device_id -f some_config_file


Validate config for a device
stork validate-config -d some_device_id -c some_config_text

Validate config for a device with file
stork validate-config -d some_device_id -f some_config_file

