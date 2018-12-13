# screenShootServer

web截屏服务: 通过puppeteer(Chrome无头浏览器)做的一个web截屏服务，集成html转图片功能。 客户端可直接通过url和相关参数来获取一张图片

团购信息图片请求规则：

http://127.0.0.1:9000/groupbuying/img

通过url带上以下参数

```bash

{
    title: '店名',
    poiTitle: '地点店名',
    poiWapUrl: '带key的美团店的url',
    originPrice: '原价',
    price: '团购价',
    name: '产品名',
    poiImg: '店图片',
    pic: '产品图片',
}
```

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:9000/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

[puppeteer]: https://pptr.dev
[egg]: https://eggjs.org