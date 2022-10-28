'use strict';

const { Controller } = require('egg');

class AwyController extends Controller {
  async awy() {
    const { ctx } = this;
    await ctx.render('awy.html');
    // ctx.body = '<h1>hi, awy 2</h1>';
  }

  //  自由传参模式
  async getSource() {
    const { ctx } = this;
    const res = await ctx.service.awy.getSourceService('3545');

    ctx.body = res;
  }

  //  严格传参模式
  async getSource2() {
    const { ctx } = this;
    ctx.body = 'getSource2:' + ctx.params.name + ', 年龄' + ctx.params.age + '岁';
  }
  // Post请求

  async add() {
    const { ctx } = this;

    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }
}

module.exports = AwyController;
