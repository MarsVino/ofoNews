# ofo-campaign

> A Vue.js multiple pages campaign project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

```
# use inode tool
npm link

# use inode to create a project page, the deve url is: localhost:8080/pagename/index.html
inode page --add pagename

# use inode to create a sub page, the dev url: localhost:8080/pagename/index.html/#/subpage
inode page --add pagename/subpage

# use inode tool delete a sub page
inode page --del pagename/subpage

#use inode tool delete project page
inode page --del pagename

```

## jsbridge

https://wiki.ofo.so/pages/viewpage.action?pageId=16059061

bridge.js源码在项目根目录下。

## jsbridge调试

1. 下载测试APP
1. APP中的看看页有一个入口，访问网页 `http://kankan.ofo.com/index.html`
1. 假如你要用到jsbridge的本地网页是 `http://192.168.199.137:8081/my_news/index.html#/?id=0010c2c15581de2399c1555472c30834`
   编辑 `http://kankan.ofo.com/index.html` 对应的html页面，增加本地网页入口。然后，你就可以在测试APP上调试你本机上的web页面了！
   （前提：手机跟电脑在同一个wifi下，断开vpn, 在手机上可以访问本机的web页面。）
1. 很多jsbridge方法在ofo-miscpages项目中有用到，多借鉴参考。   


## 发布到测试环境
1. `npm run build:test`
1. 上传到测试服务器

## 发布到正式环境
1. `npm run build`
1. 上传到正式服务器
