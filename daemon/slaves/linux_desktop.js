
/*
    config example (json):

    {
         "automate_url": <string>,
         "notify_topic": <string>,
    }

 */

const fetch = require('isomorphic-fetch');
const linuxDesktop = {
  type: 'linux_desktop',
  isValidReachabilityInfo: identification => {
    return typeof(identification) === 'string';
  },
  isValidConfig:  config => {
    return true;
  },
  status: async () => {
    await (new Promise((resolve, reject)=> {
      resolve();
    }));
    return "ok";
  },
  config: async configText => {

    const config = JSON.parse(configText);
    const notifyTopic = config.notify_topic;
    console.log('notify topic: ', notifyTopic)
    assert(notifyTopic !== undefined, 'notify topic undefined');
    await fetch('http://localhost:4002/topic', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        topic: notifyTopic,
      })
    })
  },
  commands: {

  },
};

module.exports = linuxDesktop;