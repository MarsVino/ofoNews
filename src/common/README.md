单页开发指南
========

此文档为开发所有单页（活动页、app 中常态内嵌的功能页、分享出去的页面）的指南。

其中，不需编译构建即可直接上线的活动页应放置在 `campaign/src` 下；需编译构建后上线的活动页应放置在 `campaign/special` 下；app 中常态内嵌的功能页应放置在 `misc-pages/src` 下。

_注意：下文 "app" 包含 iOS app、Android app **和 webapp**。若仅仅指代 iOS app 和 Android app 而不包含 webapp 时，会明确使用 "native app"。_

约定
--------

- 所有页面应该加上 `<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />` 或类似的 viewport 声明。
- 所有页面应该通过 `<script type="text/javascript" src="/common/common.js"></script>` 引用 `common.js`。以下提到的大多数功能都依赖于最新的 `common.js`。
- 今后不再需要为元素添加 `class="ofo-iff"`。
- 任何地方不应该 hardcode 域名。
  - 引用静态页面应该使用相对路径而非直接写 `testcommon.ofo.so` 或 `common.ofo.so`。例如应该使用 `/newdist/` 而非 `https://common.ofo.so/newdist/`。
  - 引用后端 API 服务器地址应该利用 `window.OFO_ENV.API_HOST` 而非直接写 `testonline.ofo.so` 或 `san.ofo.so`。例如应该使用 `'//' + window.OFO_ENV.API_HOST + '/ofo/Api/getPacket'` 而非 `'https://san.ofo.so/ofo/Api/getPacket'`。`window.OFO_ENV.API_HOST` 会自动根据前端页面地址判断应该调用哪个环境的后端服务器。
  
发送调试或埋点信息
--------

- 对于活动页面埋点或者任何页面的调试数据采集，使用 `sendDebug(eventName, properties)` 函数即可。第一个参数为事件名，第二个参数为事件的参数。事件名按约定使用大驼峰命名。例如 `sendDebug('Ejaculation', { amount: '100ml', duration: 5000 })`。
- 对于常态内嵌页面埋点（也就是使用神策的埋点），使用 `window.saTrackCompat`。
  - View 类埋点：`window.saTrackCompat.view('RapidMasturbationView-ofo_00225', 'Touch')`;
  - Click 类埋点：`window.saTrackCompat.click('RapidMasturbationClick-ofo_00226', 'Cum')`;
  
判断当前环境
--------

- `window.OFO_ENV.currentEnv` 代表当前环境。可能的取值有：
  - `window.OFO_ENV.ENV.WEBAPP_ITSELF` 当前页面为 webapp 本身。
  - `window.OFO_ENV.ENV.INSIDE_WEBAPP` 当前页面为一个通过 iframe 内嵌于 webapp 的页面。
  - `window.OFO_ENV.ENV.INSIDE_NEW_IOS_APP` 当前页面为一个内嵌于 iOS app（版本号 >= 1.8.2，且能取到具体版本号）的页面。  
  - `window.OFO_ENV.ENV.INSIDE_NEW_ANDROID_APP` 当前页面为一个内嵌于 Android app（版本号 >= 10967，且能取到具体版本号）的页面。
  - `window.OFO_ENV.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP` 当前页面应该是一个内嵌于 iOS app（版本号 < 1.8.2，且无法取到具体版本号）的页面（有很小概率不在 iOS app 中却被误判为此情况）。  
  - `window.OFO_ENV.ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP` 当前页面应该是一个内嵌于 Android app（版本号 < 10967，且无法取到具体版本号）的页面（有很小概率不在 Android app 中却被误判为此情况）。  
  - `window.OFO_ENV.ENV.UNKNOWN` 当前页面不属于以上任何一种情况（例如：分享出去的页面）。
- 可以使用以下便捷的属性：
  - `window.OFO_ENV.isInNewApp`：确定在较新版本的 ofo native app 中则为 `true`。相当于 `window.OFO_ENV.currentEnv === window.OFO_ENV.ENV.INSIDE_NEW_IOS_APP || window.OFO_ENV.currentEnv === window.OFO_ENV.ENV.INSIDE_NEW_ANDROID_APP`。
  - `window.OFO_ENV.isLikelyInApp`：极可能在 ofo native app 中则为 `true`。相当于 `window.OFO_ENV.isInNewApp || window.OFO_ENV.currentEnv === window.OFO_ENV.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP || window.OFO_ENV.currentEnv === window.OFO_ENV.ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP`。
- `window.OFO_ENV.ofoAppVersion` 若能取到具体 native app 版本号，则为具体版本号（iOS app 版本号为字符串，如 `'1.8.2'`，Android app 版本号为整数，如 `10967`）。
  - Android 版本历史可参见[这里](http://mdzz.ofo.so:17748/#/versions.md)。
  - 可以使用便捷的 `window.OFO_ENV.ofoAppVersionGte(iosVersion, androidVersion)` 方法判断版本号是否大于等于某值。例如 `window.OFO_ENV.ofoAppVersionGte('1.8.4', 11542)` 当且仅当在 iOS app >= 1.8.4 或 Android app >= 11542 时为 `true`。若仅判断一个平台，则另一个参数传 `null`，例如 `window.OFO_ENV.ofoAppVersionGte(null, 11542)` 仅在 Android app >= 11542 时为 `true`，在 iOS app 中一律为 `false`。
- `window.OFO_ENV.isInWeChat`：处于微信 app 中则为 `true`（用于判定是否显示微信支付等入口）。
- `window.OFO_ENV.isInAlipay`：处于支付宝 app 中则为 `true`（用于判定是否显示芝麻信用授权等入口）。
- `window.OFO_ENV.sourceForApi`：返回整数 `0`、`1` 或 `2`。对于需要传递 `source` 参数的 API，应该使用这个值作为 `source` 参数的取值。1 iOS app 2 android app -1 微信 -2 支付宝服务窗 0 web

与宿主 app 互相调用
--------

- 所有由 app 传递给内嵌页面的参数可直接通过 `window` 对象上的属性获得（例如 `window.identification`）。所有兼容性问题已经由 `common.js` 处理。
- 调用 app 端的方法一律使用 `window.ofoResponseProxy(name, parameters)`。许多兼容性问题将由它处理。
  - 常见的方法包括 `window.ofoResponseProxy('copyToClipboard', [textContent])`（复制文字到剪贴板）、`window.ofoResponseProxy('share', [name, description, iconUrl, linkUrl])`（调起 native app 分享）、`window.ofoResponseProxy('wxpay', [result, amount])`（调起微信支付）、`window.ofoResponseProxy('close', [])`（关闭当前页面）……等等。
  - 上述方法的具体说明，以及更多方法，请参见本目录下的 [`README.md`](README.md) 文档。
  - 若需要定义内嵌 web 页面调用 app 端的方法，请记得将该方法更新至 [`README.md`](README.md) 文档中。
- 若需要定义 app 端调用内嵌 web 页面的方法，请将方法定义到 `window.ofoRequest` 对象下。例如 `window.ofoRequest = { done: function () { console.log('done'); } };`。
  - 请记得将该方法更新至 [`README.md`](README.md) 文档中。
- 部分接口有做特殊处理，不在宿主 app 中亦可调用：
  - `window.ofoResponseProxy('shareConfig', [name, description, iconUrl, linkUrl])` 有做特殊处理——如果在微信里，即使不在 webapp 中，亦可生效。
  - `window.ofoResponseProxy('setTitle', [titleText])` 有做特殊处理——如果不在 app 中，则会直接设置 `document.title`。
- 若需要唤起 app 特定页面，可使用 `window.ofoHandleDeepLink(url)`。
  - 例如：`window.ofoHandleDeepLink('ofoapp://use')` 跳转到用车页面。而参数亦可为 `ofoapp://purchase`（充值页面）、`ofoapp://balance`（我的钱包页面）、`ofoapp://certify`（认证页面）、`ofoapp://profile`（个人信息页面）、`ofoapp://orders`（我的行程页面）等。
  - 当页面嵌套在 app 中时可以使用此方法，此方法兼容 webapp 和 native app。
  - 在 app 外的页面，若在系统浏览器（Safari、Chrome）中时，此方法也可唤起 native app。然而在微信等第三方 app 中时，此方法无法唤起 native app。
  - 但在上述场景下，此方法可以跳转到 web app 的对应页面。

其它
--------

- 任何时候应该使用 `window.getOfoToken()` 获取用户的登录 token（无 token 时返回 `null`）；适用于所有场景。
- `window.tip(textContent)` 方法提供简单的 toast 提示功能。
- `window.OFO_ENV.query()` 将返回当前页面 URL 中的参数。例如在 `http://common.ofo.so/app/?num=1&length=15cm`，该方法将返回 `{ num: '1', length: '15cm' }`。
- 如果处于 app 中，可通过 `window.ofoAbTest` 获得当前用户的 A/B 测试配置，例如 `{ "purchase1702": 3, "spot1702": 0, "repair1702": 1 }`。
- 所有页面页面已默认使用了 [fastclick](https://github.com/ftlabs/fastclick)，无需再次加载 fastclick。
