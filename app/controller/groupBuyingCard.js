'use strict';
const Controller = require('egg').Controller;

class GroupBuyingCardController extends Controller {
  async card() {
    console.log(this.ctx.query);
    const res = await this.ctx.service.card.groupBuyingByPoi(this.ctx.query);
    const cardObj = {
      title: res.title,
      poiTitle: res.poi_title,
      poiWapUrl: res.poi_wap_url,
      originPrice: res.origin_price,
      price: res.price,
      name: res.name,
      poiImg: res.poi_img,
      pic: res.pic,
    };
    const data = { cardObj };
    await this.ctx.render('groupBuying/card.tpl', data);
  }
}

module.exports = GroupBuyingCardController;
