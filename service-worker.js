/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "30debe3c5b62e063f8f64507d41ba8ff"
  },
  {
    "url": "assets/css/0.styles.98f35480.css",
    "revision": "d42be60f84fab4de0eefc58d29673dcb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8d1cebda.js",
    "revision": "e4266325181ddc3f255c8db6209768fb"
  },
  {
    "url": "assets/js/11.64aafd5a.js",
    "revision": "22ca4dbb3b6ed334325a2ada511a5240"
  },
  {
    "url": "assets/js/12.7669fb0a.js",
    "revision": "4b2abab00901a0ae3365531d72e1af0f"
  },
  {
    "url": "assets/js/13.ff65c147.js",
    "revision": "1b2edd719121c10ea31b842c0122d1ac"
  },
  {
    "url": "assets/js/14.8d9443b7.js",
    "revision": "e20486fe4ffb679bbd215e7000bfa960"
  },
  {
    "url": "assets/js/15.d47c4c72.js",
    "revision": "5cc8f4f77968010ab36a9d4de6da2827"
  },
  {
    "url": "assets/js/16.0b1a1904.js",
    "revision": "ac5aa0ebd8114d6a78411f0b388d036a"
  },
  {
    "url": "assets/js/17.b2e90f0e.js",
    "revision": "2b8251a65f3eefae62c6390b23e8b9bb"
  },
  {
    "url": "assets/js/18.83d550c0.js",
    "revision": "5d9c48cc4d7e3abb1ba41137f94905bb"
  },
  {
    "url": "assets/js/19.6df45c53.js",
    "revision": "ad04074ffd9195810f350b41739716cf"
  },
  {
    "url": "assets/js/20.2d52d2ac.js",
    "revision": "0a55b20eede8f1d1d3eb701cab3157a8"
  },
  {
    "url": "assets/js/21.88910981.js",
    "revision": "092c86b44d118ff05373f6431ff9f572"
  },
  {
    "url": "assets/js/22.ec7d0c7f.js",
    "revision": "bc1e4ae2d69881fc0df35b8ed3a076bb"
  },
  {
    "url": "assets/js/23.1ecb1137.js",
    "revision": "19323afdb87c7e8d138b121377388d19"
  },
  {
    "url": "assets/js/24.54aa792a.js",
    "revision": "b7d068c4b1bc9851fba5108db3daa385"
  },
  {
    "url": "assets/js/3.1277c491.js",
    "revision": "f4045b4c9a8f19a8e3b1ca75411a0384"
  },
  {
    "url": "assets/js/4.360b7ee4.js",
    "revision": "3147867522c6181727af1f19a07f1b85"
  },
  {
    "url": "assets/js/5.13c40ab8.js",
    "revision": "0912334111e851c52626e1e541a91e90"
  },
  {
    "url": "assets/js/6.be4c4d64.js",
    "revision": "e98bfb9ca633a475a49bc2a40b1c0a2b"
  },
  {
    "url": "assets/js/7.6531c5b7.js",
    "revision": "340835143edd85f4ebf019b18080ab1b"
  },
  {
    "url": "assets/js/8.be4040ee.js",
    "revision": "3e0e806d52f210e1788b20c673595f6e"
  },
  {
    "url": "assets/js/9.5e273222.js",
    "revision": "305361eb1db10ed72c5a558b249ead15"
  },
  {
    "url": "assets/js/app.892b96c4.js",
    "revision": "e22881b96dc94970f9cec39c97c146be"
  },
  {
    "url": "assets/js/vendors~notification.008be287.js",
    "revision": "f0f92cd3cf3c78c6de00ecd43409eb96"
  },
  {
    "url": "guide/alipay/index.html",
    "revision": "0920993ce6827b8c5d8bb838d91ec15a"
  },
  {
    "url": "guide/alipay/init.html",
    "revision": "77312faf0a3a61422a3e8ee03396139c"
  },
  {
    "url": "guide/client/ios.html",
    "revision": "e97f4fde05f528fab47041251cb247e4"
  },
  {
    "url": "guide/client/jpay.html",
    "revision": "f1b4c0908cbee586467903eb1879b861"
  },
  {
    "url": "guide/config/alipay_config.html",
    "revision": "5f007955a00aeae6c4b40e336865086b"
  },
  {
    "url": "guide/config/weixinpay_config.html",
    "revision": "4b80fabb08d9135c3b483bc173bb334d"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "5ea4a0e1d2f971bec2d4650ac7c9c5aa"
  },
  {
    "url": "guide/http.html",
    "revision": "24cebd1ebec2e6a4d4192516ac15886a"
  },
  {
    "url": "guide/index.html",
    "revision": "ec9aac2ea079cac651f05c6997e30a5b"
  },
  {
    "url": "guide/jdpay/index.html",
    "revision": "c96d3b5c46ad73329950b250621fc7a1"
  },
  {
    "url": "guide/maven.html",
    "revision": "2a16a765945d362ed3d5c83cc91c0409"
  },
  {
    "url": "guide/qqpay/index.html",
    "revision": "f570942e228bf4597b17af49d7c7758e"
  },
  {
    "url": "guide/unionpay/index.html",
    "revision": "57877290e3a03c95dd28221c588ef3b3"
  },
  {
    "url": "guide/weixin/tnw.html",
    "revision": "45c155833b391a33ddd44765d040be08"
  },
  {
    "url": "guide/weixin/weixin_guide.html",
    "revision": "38fe2f314d74742a599bc5c8119a7361"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "88f2d5e4071262f1c7af4e6e61e6d6ae"
  },
  {
    "url": "index.html",
    "revision": "8b33e2cfc74233bd1043a26ed6286396"
  },
  {
    "url": "wxpay.jpeg",
    "revision": "519a6443adb0110d19e3bf9f273d5f62"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
