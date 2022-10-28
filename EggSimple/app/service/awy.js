'use strict';

const { Service } = require('egg');

class AwyService extends Service {
  async getSourceService(id) {
    return {
      id,
      name: 'xxx',
      age: 46,
    };
  }
}

module.exports = AwyService;
