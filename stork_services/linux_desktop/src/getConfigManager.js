
const fs =  require('fs');
const path = require('path');

const defaultConfigData = {
  notifyTopic: "actions/linux_desktop/notify",
  mqttUrl: 'mqtt://127.0.0.1:1883',
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
  fs.writeFileSync(path.resolve(persistFilePath), JSON.stringify(config));
};

const getConfigManager = persistFilePath => {
  if (typeof(persistFilePath) !== 'string'){
    throw (new Error('persist file path must be type string'));
  }

  const config = loadData(persistFilePath);

  const configManager = {
      getTopic: () => config.notifyTopic,
      setNotifyTopic: topic => {
        config.notifyTopic = topic;
        persistData(persistFilePath, config);
        console.log('changed notify topic: ', topic);
      },
      getMqttUrl: () => config.mqttUrl,
      setMqttUrl: mqttUrl => {
        config.mqttUrl = mqttUrl;
        persistData(persistFilePath, config);
        console.log('change mqtt url: ', mqttUrl);
      }
  };
  return configManager;
};

module.exports = getConfigManager;