var CONST = {
	ACCESS_TOKEN: "access_token",
	HOMEPAGE: '/',
	LOGINPAGE: '/login',
	URI: "http://localhost:8080"
}

// 访问排除页面
var excludeUrl = [CONST.HOMEPAGE, CONST.LOGINPAGE];

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
	return sessionStorage.getItem(CONST.ACCESS_TOKEN);
}

/*
 * 存储accessToken
 */
function saveAccessToken(accessToken) {
	sessionStorage.setItem(CONST.ACCESS_TOKEN, accessToken);
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
				path: CONST.LOGINPAGE
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
	},
	CONST: CONST
}