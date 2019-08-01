function uaContains (key) {
  return navigator.userAgent.toLowerCase().indexOf(key.toLowerCase()) >= 0;
}

let _ = {
  // 是否在微信
  isInWx: ['MicroMessenger'].some(uaContains),

  // 是否在qq浏览器
  isInQQ: ['MQQBrowser', 'QQ'].some(uaContains),

  // 是否是android平台
  isInAndroid: ['Linux', 'Android'].every(uaContains),

  // 是否是ios平台
  isInIOS: ['(iPhone;', '(iPod touch;', '(iPad;', '(iPod;'].some(uaContains),

  // 是否在端内
  isInofo: ['ofoapp'].some(uaContains)
}

export default _