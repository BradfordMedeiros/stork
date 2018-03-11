
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
  status: async reachabilityInfo => {
    console.log('getting device status for linux desktop');
    console.log('reach info: ', reachabilityInfo);
    return 'ok';
  },
  config: async (configText, reachabilityInfo) => {
    console.log('config reachability info: ', reachabilityInfo);

    const config = JSON.parse(configText);
    const notifyTopic = config.notify_topic;
    console.log('notify topic: ', notifyTopic)
    assert(notifyTopic !== undefined, 'notify topic undefined');
    console.log('reach info: ', reachabilityInfo);
    await fetch(`${reachabilityInfo}/topic`, {
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
    xdg_open: () => {
      console.log('not yet implemented');
    },
    test: () => {
      return 'test successful';
    },
  },
};

module.exports = linuxDesktop;