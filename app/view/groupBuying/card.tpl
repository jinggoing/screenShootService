<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/card.css" />
    <script src="/public/js/qrcode.min.js"></script>
    <script>
      function resizeFontSize () {
        var x = 100
        x = parseInt(window.innerWidth * 100 / 680)
        document.getElementsByTagName('html')[0].style.fontSize = x + 'px'
      }
      resizeFontSize()
    </script>
  </head>
<body>
    <div class="swiper-card">
        <div class="card-title">{{cardObj.poiTitle}}</div>
        <div class="card-body">
            <div class="left">
                <div class="store">
                    <div class="logo">
                        <img src="{{cardObj.poiImg}}" alt="">
                    </div>
                    <div class="name">{{cardObj.name}}</div>
                </div>
                <div class="msg">
                    <div class="pic">
                        <img src="{{cardObj.pic}}" alt="">
                    </div>
                    <div class="text">
                        <div class="title">{{cardObj.title}}</div>
                        <div class="price">
                            <div class="default-price"> ￥{{cardObj.price}}元 </div>
                            <div class="origin-price"> ￥{{cardObj.originPrice}}元 </div>
                        </div>
                    </div>
                </div>
                <div class="tips">
                    <img src="/public/imgs/screen_code@2x.png" alt="screen_code">
                    <span>扫码享受更多优惠</span>
                </div>
            </div>
            <input id="poiWapUrl" value="{{cardObj.poiWapUrl}}" type="hidden"/>
            <div class="right">
                <canvas id="canvas" class="canvas" ref="qrcode"></canvas>
            </div>
        </div>
    </div>
</body>
<script>
    var poiWapUrl = document.getElementById('poiWapUrl').value
    console.log('poiWapUrl', poiWapUrl)
    QRCode.toCanvas(document.getElementById('canvas'), poiWapUrl, function (error) {
        if (error) console.error(error)
        var i = document.createElement('i')
        i.id = 'qrcode'
        document.body.appendChild(i)
    })
</script>
</html>