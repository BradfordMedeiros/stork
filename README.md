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
stork device -a &lt;device type&gt; -r &lt;reachability info&gt;
~~~~
Delete a device
~~~~
stork device -d &lt;device id&gt;
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
stork group -a &lt;group name&gt;
~~~~

Remove a group
~~~~
stork group -r &lt;group name&gt;
~~~~

Add a device to a group
~~~~
stork group -a &lt;group name&gt; -d &lt;device id&gt;
~~~~

Remove a device from a group
~~~~
stork group -r &lt;group name&gt; -d &lt;device id&gt;
~~~~

------------------
Status Commands
------------------
~~~~
stork status -d &lt;device id&gt;
~~~~

------------------
Command Commands
------------------

List commands for a device
~~~~
stork command -l -d &lt;device id&gt;
~~~~

List commands for a device type
~~~~
stork command -l -t &lt;device type&gt;
~~~~

List commands for a group
~~~~
stork command -l -g &lt;group name&gt;
~~~~

Execute command for a device
~~~~
stork command -d &lt;device id&gt; -c &lt;command&gt;
~~~~

Execute command for a group
~~~~
stork command -g &lt;group name&gt; -c &lt;command&gt;
~~~~

------------------
Configuration Commands
------------------

Configure a device
~~~~
stork config -d &lt;device id&gt; -c &lt;config data&gt;
~~~~


------------------
Configuration-Validation Commands
------------------

Validate config for a device
~~~~
stork validate-config -d &lt;device id&gt; -c &lt;config data&gt;
~~~~


Upcoming (not yet supported)
------------
Configure a device with a file (not yet supported)
~~~~
stork config -d &lt;device id&gt; -f &lt;config file&gt;
~~~~

Validate config for a device with file
~~~~
stork validate-config -d &lt;device id&gt; -f &lt;config data&gt;
~~~~

Get status for a group
~~~~
stork status -g &lt;group name&gt;
~~~~
