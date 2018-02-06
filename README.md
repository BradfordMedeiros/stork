# stork

~~~~

stork device ls      // list all devices

stork device -c config   

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

