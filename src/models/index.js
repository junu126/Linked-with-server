const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const colorConsole = require('../lib/console');

const config = require('../../config/config');

// 데이터 베이스 설정
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: false,
    dateStrings: true,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    port: config.port,
    timezone: '+09:00', // 데이터 베이스 시간 설정
  },
);

const models = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('0') !== 0) && (file !== 'index.js');
  })
  .forEach((file) => {
    const extName = path.extname(path.join(__dirname, file));
    const baseName = path.basename(path.join(__dirname, file), extName);

    const model = sequelize.import(path.join(__dirname, file));
    models[baseName] = model;
  });

  Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
      models[modelName].associate(models);
    }
  });

  sequelize.sync().then(() => {
    colorConsole.green('[Model - Index] Schema is synchronized')
  }).catch((error) => {
    colorConsole.red('[Model - Index] An error has occurred: ', (error))
  }); 

// 데이터 베이스 설정 객체 저장
models.sequelize = sequelize;
models.Sequelize = sequelize;

module.exports = models;
