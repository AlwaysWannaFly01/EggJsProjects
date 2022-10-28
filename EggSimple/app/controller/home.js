'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async awy() {
    const { ctx } = this;
    ctx.body = '<h1>hi, awy</h1>';
  }
}

module.exports = HomeController;
