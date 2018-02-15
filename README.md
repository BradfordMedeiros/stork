# stork

~~~~


  stork device --list // list all device info
  stork device --add -d <device_name> -r <reachability info>
  stork device --remove ...

   // you can command these, but they will only use what is supported by all groups
  stork group -add -d device_name
  stork group -remove -d device_name

  stork command -d <device_name> -c <command>  (commands will be lowest common denominator of the group)
  stork status -d  <device_name>  / -g <groupname>

  stork config  -d <device_name_ / -g <groupname> -t <configtext> / -f <path to config file>
  stork validate-config  -d <device_name_ / -g <groupname> -t <configtext> / -f <path to config file>



example:  
// config is arbitary text that the device will parse

config = {
    status: () => {
    
    },
    config: () => {
    
    },
    report-on: () => {
    
    },
    report-off: () => {
    
    },
}

say android config
{
   topic: 'states/geolocation',
   frequency: 60 * 1000, // 10 secconds
   start_on: true,  
}

device should respond to 
- status ok/bad
- config 

~~~~

