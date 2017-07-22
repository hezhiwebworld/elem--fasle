# test

> 一个仿ele的项目

> 技术栈 vue2.0  axios   eventbus     es6   webpack   vue-cli  vue- router 响应式布局  弹性盒模型

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

## 项目完成流程
1. 项目初始化---这一步直接按照官网正常流程
2. 技术栈选题：vue2.0  axios  es6 
3. 项目目录结构划分--参考 https://github.com/bailicangdu/vue2-elm  
4. 如何在全局引入rem，用rem做手机屏的自适应
--main.js 中导入
5. 如何使用less在，目前版本貌似基本都是内置好的less
> 第一安装less-loader
> 在style上面，添加属性lang="less"

6. 本来想写复杂一点，将swiper单独分离出来，然后通过父传递数据
> 此处有坑，目测需要vuex来排坑，正常的父子组件之间的通讯，组件
> 的创建先后有个问题，----直接在swiper组件中异步请求数据

7. 当用户选中地理位置之后，点击提交跳转回首页，如何把参数传递过去
> https://router.vuejs.org/zh-cn/essentials/navigation.html
> this.$router.push({ name: 'index', params : { address:   this.inputValue }})

8. 城市列表顺序应该是后台排序好，在传递到前台
> 这个问题属于接口文档本身的问题

9. 商家食品列表如果拆分成多个组件，通讯比较复杂
> 唯一解决方案  vuex 来填坑

10. 问题当切换商家视屏列表，主菜单需要消失，显示购物车

11. 商家店铺api
> http://cangdu.org:8001/shopping/v2/menu?restaurant_id=1


