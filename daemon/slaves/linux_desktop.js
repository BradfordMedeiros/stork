
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
    try {
      await (await fetch(`${reachabilityInfo}/topic`)).text();
      return true;
    }catch(e){
      return 'unreachable';
    }
  },
  config: async (configText, reachabilityInfo) => {
    console.log('reach info: ', reachabilityInfo);
    console.log('configuring linux desktop---------');
    const notifyTopic = configText;
    console.log('notify topic: ', notifyTopic);

    console.log('about to fetch');
    await fetch(`${reachabilityInfo}/topic`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        topic: notifyTopic,
      })
    });
    return 'ok';
  },
  commands: {
    test: reachabilityInfo => {
      return 'reachability info is: ' + reachabilityInfo;
    },
  },
};

module.exports = linuxDesktop;