'use strict'

const Service = require('egg').Service

class CardService extends Service {
  async groupBuyingByPoi (poi) {
    // read config
    const serverUrl = 'https://yapi.4inlove.ink/mock/26/lyra/api/drive_behavior/group_buying'
    const res = await this.ctx.curl(`${serverUrl}`, {
      data: poi,
      dataType: 'json'
    })
    let result = {}
    if (res.data.code === 0) {
      const randomNum = parseInt(Math.random() * res.data.data.length)
      result = res.data.data[randomNum]
    }
    return result
  }
}

module.exports = CardService
