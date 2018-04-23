# stork

------------------
Device Commands
------------------
List all devices
~~~~
stork device -l
~~~~
Add a device
~~~~
stork device -a <device type> -r <reachability info>
~~~~
Delete a device
~~~~
stork device -d <device id>
~~~~

------------------
Group Commands
------------------

List groups
~~~~
stork group -l
~~~~

Add a group
~~~~
stork group -a <group name>
~~~~

Remove a group
~~~~
stork group -r <group name>
~~~~

Add a device to a group
~~~~
stork group -a <group name> -d <device id>
~~~~

Remove a device from a group
~~~~
stork group -r <group name> -d <device id>
~~~~

------------------
Status Commands
------------------
~~~~
stork status -d <device id>
~~~~

------------------
Command Commands
------------------

List commands for a device
~~~~
stork command -l -d <device id>
~~~~

List commands for a device type
~~~~
stork command -l -t <device type>
~~~~

List commands for a group
~~~~
stork command -l -g <group name>
~~~~

Execute command for a device
~~~~
stork command -d <device id> -c <command>
~~~~

Execute command for a group
~~~~
stork command -g <group name> -c <command>
~~~~

------------------
Configuration Commands
------------------

Configure a device
~~~~
stork config -d <device id> -c <config data>
~~~~


------------------
Configuration-Validation Commands
------------------

Validate config for a device
~~~~
stork validate-config -d <device id> -c <config data>
~~~~


Upcoming (not yet supported)
------------
Configure a device with a file (not yet supported)
~~~~
stork config -d <device id> -f <config file>
~~~~

Validate config for a device with file
~~~~
stork validate-config -d <device id> -f<config data>
~~~~

Get status for a group
~~~~
stork status -g <group name>
~~~~

also batching/stategies for configuration, status, commands, more mqtt hooks (docs coming soon)