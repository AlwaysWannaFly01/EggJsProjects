'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/awy', controller.awy.awy);
  router.get('/getSource', controller.awy.getSource);
  router.get('/getSource2/:name/:age', controller.awy.getSource2);
  router.post('/add', controller.awy.add);

};
