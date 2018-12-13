'use strict'
const queryString = require('querystring')
const puppeteer = require('puppeteer')
const Controller = require('egg').Controller

async function init () {
  console.log('init')
  global.browser = await puppeteer.launch({ args: [ '--no-sandbox', '--disable-setuid-sandbox' ] })
  global.page = await global.browser.newPage()
}
init()
class HomeController extends Controller {
  async index () {
    const self = this
    const cluster = this.config.cluster
    const params = this.ctx.query
    params.timestamp = new Date().getTime()
    const paramsStr = queryString.stringify(params)
    // console.log(new Date().getMilliseconds() + 'this.ctx.query', params)
    if (global.browser === undefined) {
      global.browser = await puppeteer.launch({ args: [ '--no-sandbox', '--disable-setuid-sandbox' ] })
    } else {
      if (global.page === undefined) {
        global.page = await global.browser.newPage()
      }
    }

    try {
      let width = this.ctx.query.w
      if (width === undefined || isNaN(width)) {
        width = 600
      }
      global.page.setViewport({
        width: width * 1,
        height: parseInt(width * 0.51) })
      await global.page.goto(`http://127.0.0.1:${cluster.listen.port}/card?${paramsStr}#/`)
      // 等待页面二维码生成完毕（页面加载最后一步）3秒超时
      await global.page.waitForSelector('#qrcode', { timeout: 3000 })
      const imgBinary = await global.page.screenshot({ omitBackground: true })
      self.ctx.response.type = 'image/png'
      console.log(new Date().getTime())
      self.ctx.body = imgBinary
    } catch (error) {
      console.log('error', error)
      self.ctx.body = { success: false, code: 900110, msg: error }
    } finally {
      // global.page.close()
    }
  }
}

module.exports = HomeController
