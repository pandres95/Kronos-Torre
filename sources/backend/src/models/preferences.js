'use strict';
const DataTypes = require('sequelize').DataTypes;
const Database = require.main.require('./config/database');

const Job = Database.define('Preferences', {
  torre_user: {
    type: DataTypes.STRING,
  },
  only_active: {
    type: DataTypes.BOOLEAN,
  },
  remote: {
    type: DataTypes.BOOLEAN,
  },
  skills: {
    type: DataTypes.TEXT,
  },
  timezone: {
    type: DataTypes.STRING,
  },
  compensation_max: {
    type: DataTypes.DOUBLE,
  },
  as_routine: {
    type: DataTypes.BOOLEAN,
  }

});

module.exports = Job;
