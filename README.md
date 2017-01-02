# front

> vue.js 2.0 + webpack 构建前端项目，引入 jquery 和 bootstrap，集成vue-resource、vue-router、vee-validate

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Reference

*	[Vue2+VueRouter2+webpack 构建项目实战](http://blog.csdn.net/fungleo/article/details/53171052)
*	[windows下vue-cli及webpack 构建网站(二)导入bootstrap样式](http://blog.csdn.net/ansu2009/article/details/53305134)


## 测试

[smart项目](http://www.github.com/xuanbo/smart)为本项目提供服务，登录后获取会返回`access_token`，然后携带它去获取资源。
访问`/user/userInfo`页面，本项目会去请求`smart`项目的`/user`资源，获取当前认证的用户。

本来`smart`项目实现了`oauth2`的`code`授权，但考虑到`vuejs`不好去维护这个授权流程，因此我在`smart`项目中提供了登录认证接口，然后返回`access_token`，这样本项目访问登录接口就可以获取它，然后拿着它去获取用户能访问的资源了(`smart`项目会从缓存中获取`access_token`是否正确，然后获取授权的用户，从缓存中找到用户的权限)。

我个人感觉纯前台项目还是有很多局限，在毕业设计是否进行前后台分离很是犹豫啊。前后台分离的话vuejs + webpack操作dom很爽，后台提供restful很简单，妈妈再也不用担心我用jsp了。但是我觉得我无法保证安全问题，纯前台项目还是有很多坑，我目前还是无法驾驭。