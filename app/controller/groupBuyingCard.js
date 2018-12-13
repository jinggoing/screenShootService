'use strict';
const Controller = require('egg').Controller;

class GroupBuyingCardController extends Controller {
  async card() {
    console.log(this.ctx.query);
    const res = this.ctx.query;
    const cardObj = {
      title: res.title,
      poiTitle: res.poiTitle,
      poiWapUrl: res.poiWapUrl,
      originPrice: res.originPrice,
      price: res.price,
      name: res.name,
      poiImg: res.poiImg,
      pic: res.pic,
    };
    const data = { cardObj };
    await this.ctx.render('groupBuying/card.tpl', data);
  }
}

module.exports = GroupBuyingCardController;
