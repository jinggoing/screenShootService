'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/groupbuying/img', controller.home.index)
  router.get('/card', controller.groupBuyingCard.card)
}
