
const utils = {
  //缩放
  resize: function(width){
    //this.$nextTick(function(){
    var clientWidth = parent.document.documentElement.clientWidth;
    var clientHeight = parent.document.documentElement.clientHeight;
    resize(clientWidth, clientHeight);
    window.addEventListener('resize', resize(clientWidth, clientHeight));
    function resize(docWidth, docHeight) {
      var docScale = docHeight / docWidth,
        designWidth = width, designHeight = 667, els = document.querySelectorAll('.content'),
        scale = docWidth / designWidth,
        scaleX = docWidth / designWidth,
        scaleY = docHeight / designHeight;
      convertArray(els).forEach(function (el) {
        extend(el.style, {
          width: designWidth + 'px',
          height: (docScale * designWidth) + 'px',
          position: 'absolute',
          top: 0,
          left: 0,
          transformOrigin: '0 0',
          webkitTransformOrigin: '0 0',
          transform: 'scale(' + scale + ')',
          webkitTransform: 'scale(' + scale + ')',
          overflowX: 'hidden',
          webkitOverflowScrolling: 'touch'
        });
      });
    }
    function convertArray(arrayLike) {
      return Array.prototype.slice.call(arrayLike, 0);
    }

    function extend() {
      var args = Array.prototype.slice.call(arguments, 0);
      return args.reduce(function (prev, now) {
        for (var key in now) {
          if (now.hasOwnProperty && now.hasOwnProperty(key)) {
            prev[key] = now[key];
          }
        }
        return prev;
      });
    }
    //})
  },
  requestAnimFrame: function () {
    return  window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      function(callback){
        window.setTimeout(callback, 1000 / 60);
      };
  },
  /**
   * 获取当前的环境变量
   */
  getEnv: function(){
    return process.env.NODE_ENV || 'production';
  },
  /**
   *获取当前url后参数
   */
  getHashParams: function() {
    let hashStr = decodeURIComponent(window.location.hash);
    let params = {};
    if (hashStr.split('?')[1]) {
      let arr = hashStr.split('?')[1].split('&');
      for (let i = 0, len = arr.length; i < len; i++) {
        let data = arr[i].split('=');
        if (data.length === 2) {
          params[data[0]] = data[1];
        }
      }
    }
    return params;
  },

  getHashParam: function(key) {
    let p = utils.getHashParams();
    return p[key];
  },
  /**
   * 返回排序后的参数数组
   */
  transform: function(params) {
    let arr = [];
    for(let item in params){
      //console.log(item);
      arr.push(item);
    }
    //console.log(arr.sort()+"======");
    return arr.sort();
  },
  /**
   * 计算sign值
   */
  setSign: function (params, secret_key) {
    let requestStr = '';
    const arr = utils.transform(params);

    for (let value in arr) {
      // if(!params[arr[value]]) {
      //     return;
      // }
      requestStr += params[arr[value]].toString()
    }

    requestStr += secret_key;
    //console.log('requestStr',requestStr)
    //console.log(md5.hex(requestStr).toLowerCase()+"----------------------------")
    return md5.hex(requestStr).toLowerCase();
  },
  /**
   * 获取当前的token
   */
  getToken: function(){
      return window.getOfoToken() || '';
  },
  /**
   * 获取某个属性值
   */
   /* 统一rem
   */
  initFrontSize: function() {
    function getStyle (element, attr) {
      if(element.currentStyle){
          return element.currentStyle[attr];
      } else {
          return window.getComputedStyle(element,null)[attr];
      }
    };
    var html = document.getElementsByTagName('html')[0]
    var body = document.getElementsByTagName('body')[0];
    body.style.width = '5rem';
    var bodyWidth = parseInt(getStyle(body, 'width'));
    var width = screen.width;
    var scale = 1;
    var fontSize = parseInt(getStyle(html, "fontSize"));
    var bodyfontsize = parseInt(getStyle(body, 'fontSize'))
    if(bodyWidth != width) {
      scale = width / bodyWidth;
      fontSize = fontSize * scale * scale;
      html.style.fontSize = fontSize + 'px';
    }
    body.style.width = '100%';
    return;
  },
  /*
   统一rem 若页面需要兼容PC则调用这个方法，不要调上面的
   */
  initFrontSizeForPC: function() {
    function getStyle (element, attr) {
      if(element.currentStyle){
          return element.currentStyle[attr];
      } else {
          return window.getComputedStyle(element,null)[attr];
      }
    };
    var html = document.getElementsByTagName('html')[0]
    var body = document.getElementsByTagName('body')[0];
    var width = screen.width;
    if(width > 540) {
        body.style.position = 'relative';
        body.style.left = '50%';
        body.style.marginLeft = -270 + 'px';
        return;
    }
    body.style.width = '5rem';
    var bodyWidth = parseInt(getStyle(body, 'width'));
    var scale = 1;
    var fontSize = parseInt(getStyle(html, "fontSize"));
    var bodyfontsize = parseInt(getStyle(body, 'fontSize'))
    if(bodyWidth != width) {
      scale = width / bodyWidth;
      fontSize = fontSize * scale * scale;
      html.style.fontSize = fontSize + 'px';
    }
    body.style.width = '100%';
    return;
  },
  /**
   *  校验手机号，支持新号段
   */
  phonePattern : function(tel){
    return /1[3456789]\d{9}/g.test(tel);
  },

  /**
   *   端内h5下载app
   */
  downloadApp : function(iosUrl,androidUrl){
    	if(window.OFO_ENV.sourceForApi == 1){
    		window.ofoResponseProxy('toSafari',[iosUrl]);
    	}else if(window.OFO_ENV.sourceForApi == 2){
    		window.location.assign(androidUrl);
    	}
  },
  /**
   *   端内路由跳转
   */
  routerWeb : function(title,url){
    if( window.OFO_ENV.ofoAppVersionGte('2.12.0', 15162) ){
        if (window.OFO_ENV.sourceForApi == 2) {
            ofoBridge.router('common-web',{'title':title , 'url': url});
        } else {
            ofoBridge.router('web',{'title': title, 'URLString': url});
        }
    }else{
        location.assign(url);
    }
  },
  // 统一处理埋点
  handleSendTrack (type, eventName, eventInfo) { // 埋点兼容
    if (type === 'view') {
        window.saTrackCompat.view(eventName, eventInfo)
        window.ofoTrack.pageShow(eventName, {View: eventInfo})
    } else {
        window.saTrackCompat.click(eventName, eventInfo)
        window.ofoTrack.controlClick(eventName, {Click: eventInfo})
    }
  },
  identityCodeValid(code) { // 验证身份证号
    var tip = "";
    var pass = true;
    if (!code || !/^\d{6}(18|19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
        tip = "身份证号格式错误";
        pass = false;
    } else {
        code = code.split('');
        // ∑(ai×Wi)(mod 11)
        // 加权因子
        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        // 校验位
        var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
        var sum = 0;
        var ai = 0;
        var wi = 0;
        for (var i = 0; i < 17; i++) {
            ai = code[i];
            wi = factor[i];
            sum += ai * wi;
        }
        var last = parity[sum % 11];
        if (parity[sum % 11] != code[17]) {
            tip = "请输入正确的身份证号";
            pass = false;
        }
    }
    if (!pass) {
        window.tip(tip);
    }
    return pass;
  },

  /**
   * 时间格式处理
   * @param：数字
   */
  formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  },

  /**
   * 时间格式处理
   * @param：时间对象
   * @param：分隔符
   * @param: 保留位数 1:年，2:年月，3:年月日，4:年月日时，5:年月日时分，6:年月日时分秒，7:月日
   */
  formatTime(date, separate, num) {
    let year = date.getFullYear();
    let month = this.formatNumber(date.getMonth() + 1);
    let day = this.formatNumber(date.getDate());
    let hour = this.formatNumber(date.getHours());
    let minute = this.formatNumber(date.getMinutes());
    let second = this.formatNumber(date.getSeconds());
    if(num ==6){
      return [year, month, day].join(separate) + ' ' + [hour, minute, second].join(':');
    }else if(num ==5){
      return [year, month, day].join(separate) + ' ' + [hour, minute].join(':');
    }else if(num ==4){
      return [year, month, day].join(separate) + ' ' + [hour].join(':');
    }else if(num ==3){
      return [year, month, day].join(separate);
    }else if(num ==2){
      return [year, month].join(separate);
    }else if(num ==1){
      return [year].join(separate);
    }else if(num == 7){
      return [month, day].join(separate)
    }
  },
  /**
   * 简单概率算法
   * @param：概率 (0.01～1)
   * @return：1 命中 0 未命中
   */
  getRandom(probability){
    var probability = probability*100 || 100;
    var odds = Math.floor(Math.random()*100);

    if(probability === 100){return 1};
    if(odds < probability){
        return 1;
    }else{
        return 0;
    }
  },
  identityCodeValid(code) { // 验证身份证号
    var tip = "";
    var pass = true;
    if (!code || !/^\d{6}(18|19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
        tip = "身份证号格式错误";
        pass = false;
    } else {
        code = code.split('');
        // ∑(ai×Wi)(mod 11)
        // 加权因子
        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        // 校验位
        var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
        var sum = 0;
        var ai = 0;
        var wi = 0;
        for (var i = 0; i < 17; i++) {
            ai = code[i];
            wi = factor[i];
            sum += ai * wi;
        }
        var last = parity[sum % 11];
        if (parity[sum % 11] != code[17]) {
            tip = "请输入正确的身份证号";
            pass = false;
        }
    }
    if (!pass) {
        window.tip(tip);
    }
    return pass;
  },
  getLocation: (function () {
    var currentCallbackList = [];
    window.ofoRequest = window.ofoRequest || {};
    window.ofoRequest.geolocation = function (lat, lng) {
        currentCallbackList.forEach(function (callback) {
            callback(lat, lng);
        });
        currentCallbackList = [];
    };
    return function (immediate, callback) {
        currentCallbackList.push(callback);
        window.ofoResponseProxy('geolocation', [!!immediate]);
        // @TODO:上线删掉
        // window.ofoRequest.geolocation(39.904690, 116.40717);
    };
  }()),
  /**
   * 简单概率算法
   * @param：概率 (0.01～1)
   * @return：1 命中 0 未命中
   */
  getRandom(probability){
    var probability = probability*100 || 100;
    var odds = Math.floor(Math.random()*100);

    if(probability === 100){return 1};
    if(odds < probability){
        return 1;
    }else{
        return 0;
    }
  },
  /**
   * 获取host
   */
  COMMONHOST : function(){
      return location.protocol+(utils.getEnv() == 'development' ? '//qa-common.ofo.so' : (utils.getEnv() == 'testing' ? '//qacommonapi.ofo.so' : '//common.ofo.so'));
  },
  CAMPAIGNHOST : function(){
      return location.protocol+(utils.getEnv() == 'development' ? '//qatest-ofo-campaign.ofo.com' : '//ofo-campaign.ofo.com');
  },
  MISCHOST : function(){
    return location.protocol+(utils.getEnv() == 'development' ? '//qatest-ofo-misc.ofo.com' : '//ofo-misc.ofo.com');
  },
  /**
   * 设置右上角
   */
  setRightBtn(text,title,url){
      console.log('》》》》》》我设置了右上角哦')
    ofoBridge.setRightItem({
      text: text, // 文案
      method: function () {
        utils.routerWeb(title,url);
      }
    });
  },
    //生成uuid
    generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    },
    //获取cid
    getCid () {
      let ofo_cid = '';
      let url = `//${OFO_ENV.API_HOST}/ofo/Api/v4/info/user`;
      let xhr = new XMLHttpRequest();
      let data = new FormData();
      const token = window.getOfoToken();

      data.append('token', token);
      data.append('source', OFO_ENV.sourceForApi + '');
      data.append('source-version', '9999');

      xhr.open('post', url);
        console.log('!!!!!!' + data)
      xhr.onload = () => {
          console.log(xhr.status)
          if((xhr.status >= 200 && xhr.status <300) || xhr.status === 304) {
              let res = JSON.parse(xhr.responseText);
              if (res.errorCode === 200) {
                  try {
                      ofo_cid = res.values.info.cid;
                  }catch (e) {

                  }
              }
          }
        }
        return ofo_cid;
    },

    // 时间戳转成时间格式展示
    _formatTime(timestamp) {
        function add0(m){
            return m<10?'0'+m:m
        }
        var time = new Date(timestamp * 1000);
        var y = time.getFullYear();
        var m = time.getMonth()+1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        //return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
        return y+'-'+add0(m)+'-'+add0(d);
    },

    // 计算金币 向上进位
    caculateOutgo (money, rate) {
        let _total = (money * rate).toString();
        if(_total.indexOf('.') >=0 ){
            _total = parseInt(_total.split('.')[0]) + 1
        }
        return _total
    },

};

export default utils;
