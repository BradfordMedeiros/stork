
const fs =  require('fs');
const path = require('path');

const defaultConfigData = {
  mqttUrl: 'http://127.0.0.1',
  notifyTopic: 'actions/linux/notify',
  webserverPort: 4002,
};

const loadData = persistFilePath => {
  const normalizedPath = path.resolve(persistFilePath);
  try {
    const fileData = fs.readFileSync(normalizedPath).toString();
    const data = JSON.parse(fileData);
    return data;
  }catch(e){
    return defaultConfigData;
  }
};
const persistData = (persistFilePath, config) => {
  fs.writeFileSync(persistFilePath, JSON.stringify(config));
};

const getConfigManager = persistFilePath => {
  if (typeof(persistFilePath) !== 'string'){
    throw (new Error('persist file path must be type string'));
  }

  const config = loadData(persistFilePath);

  const configManager = {
      getMqttUrl : () => config.mqttUrl,
      setMqttUrl : url => {
        config.mqttUrl = url;
        persistData(persistFilePath, config);
      },

      getTopic: () => config.notifyTopic,
      setNotifyTopic: topic => {
        config.notifyTopic = topic;
        persistData(persistFilePath, config);
      },

      getWebserverPort: () => config.webserverPort,
      setWebserverPort: port => {
        config.webserverPort = port;
        persistData(persistFilePath, config);
      }
  };

  return configManager;
};

module.exports = getConfigManager;