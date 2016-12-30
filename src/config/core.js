var ACCESS_TOKEN = "accessToken";
var HOMEPAGE = '/'
var LOGINPAGE = '/login';
// 访问排除页面
var excludeUrl = [HOMEPAGE, LOGINPAGE];

/*
 * 用户如果认证返回true
 */
function isAuth() {
  return !getAccessToken() ? false : true;
}

/*
 * 获取accessToken
 */
function getAccessToken() {
	return sessionStorage.getItem(ACCESS_TOKEN);
}

/*
 * 存储accessToken
 */
function saveAccessToken(accessToken) {
	sessionStorage.setItem(ACCESS_TOKEN, accessToken);
}

/*
 * 认证服务
 */
function authService(router) {
  router.beforeEach((to, from, next) => {
	var url = to.path;
	// 访问的不是排除页面，并且没有认证，则跳转到登录页面
  	if ((excludeUrl.indexOf(url)) == -1 && !isAuth()) {
	  	next({
        path: LOGINPAGE
      });
  	} else {
  	  next();
  	}
  });
}

export default {
	authService: authService,
	token: {
		get: getAccessToken,
		save: saveAccessToken
	}
}