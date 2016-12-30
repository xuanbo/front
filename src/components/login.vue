<template>
  <div>
    <div style="margin-top: 10%">
		  <div class="container">
	    	<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<div class="panel panel-login">
							<div class="panel-heading">
								<div class="row">
									<div class="col-xs-6">
										<a href="#" class="active" id="login-form-link" @click="loginFormLink">Login</a>
									</div>
									<div class="col-xs-6">
										<a href="#" id="register-form-link" @click="registerFormLink">Register</a>
									</div>
								</div>
								<hr>
							</div>
							<div class="panel-body">
								<div class="row">
									<div class="col-lg-12">
										<form id="login-form" action="" method="post" role="form" style="display: block;">
											<div class="form-group" :class="{'has-error': errors.has('username')}">
												<input type="text" name="username" id="username" class="form-control" placeholder="Username" v-model="user.username" v-validate data-vv-rules="required" />
												<span v-show="errors.has('username')" class="help-block">{{ errors.first('username') }}</span>
											</div>
											<div class="form-group" :class="{'has-error': errors.has('password')}">
												<input type="password" name="password" id="password" class="form-control" placeholder="Password" v-model="user.password" v-validate data-vv-rules="required" />
												<span v-show="errors.has('password')" class="help-block">{{ errors.first('password') }}</span>
											</div>
											<div class="form-group text-center">
												<input type="checkbox" tabindex="3" class="" name="remember" id="remember">
												<label for="remember"> 记住我 </label>
											</div>
											<div class="form-group">
												<div class="row">
													<div class="col-sm-6 col-sm-offset-3">
														<input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="登录" @click="login">
													</div>
												</div>
											</div>
											<div class="form-group">
												<div class="row">
													<div class="col-lg-12">
														<div class="text-center">
															<a href="" tabindex="5" class="forgot-password">忘记密码?</a>
														</div>
													</div>
												</div>
											</div>
										</form>
										<form id="register-form" action="" method="post" role="form" style="display: none;">
											<div class="form-group">
												<input type="text" name="newUsername" id="newUsername" tabindex="1" class="form-control" placeholder="Username" value="">
											</div>
											<div class="form-group">
												<input type="email" name="newEmail" id="newEmail" tabindex="1" class="form-control" placeholder="Email Address" value="">
											</div>
											<div class="form-group">
												<input type="password" name="newPassword" id="newPassword" tabindex="2" class="form-control" placeholder="Password">
											</div>
											<div class="form-group">
												<input type="password" name="newConfirmPassword" id="newConfirmPassword" tabindex="2" class="form-control" placeholder="Confirm Password">
											</div>
											<div class="form-group">
												<div class="row">
													<div class="col-sm-6 col-sm-offset-3">
														<input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="注册" @click="register">
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'login',
  data () {
    return {
      user: {
      	username: '',
      	password: ''
      },
      newUser: {
      	newUsername: '',
      	newEmail: '',
      	newPassword: '',
      	newConfirmPassword: ''
      }
    }
  },
  methods: {
  	loginFormLink: function(event) {
  		$("#login-form").delay(100).fadeIn(100);
	 		$("#register-form").fadeOut(100);
			$('#register-form-link').removeClass('active');
			$('#login-form-link').addClass('active');
			event.preventDefault();
  	},
  	registerFormLink: function(event) {
			$("#register-form").delay(100).fadeIn(100);
	 		$("#login-form").fadeOut(100);
			$('#login-form-link').removeClass('active');
			$('#register-form-link').addClass('active');
			event.preventDefault();
  	},
  	login: function(event) {
  		var that = this;
  		event.preventDefault();
  		that.$validator.validateAll().then(success => {
				if (!success) {
					// handle error
					return;
				}
        var uri = that.$core.CONST.URI;
        that.$http.post(uri + '/login').then(response => {
        	// do

        }, response => {
        	// handler error
        	that.$toastr.error('系统错误');
        	console.log(response);
        });
      });
  	},
  	register: function(event) {
  		event.preventDefault();
  	}
  }
}
</script>

<style scoped>
body {
    padding-top: 90px;
}
.panel-login {
	border-color: #ccc;
	-webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
	-moz-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
	box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
}
.panel-login> .panel-heading {
	color: #00415d;
	background-color: #fff;
	border-color: #fff;
	text-align:center;
}
.panel-login> .panel-heading a{
	text-decoration: none;
	color: #666;
	font-weight: bold;
	font-size: 15px;
	-webkit-transition: all 0.1s linear;
	-moz-transition: all 0.1s linear;
	transition: all 0.1s linear;
}
.panel-login> .panel-heading a.active{
	color: #029f5b;
	font-size: 18px;
}
.panel-login> .panel-heading hr{
	margin-top: 10px;
	margin-bottom: 0px;
	clear: both;
	border: 0;
	height: 1px;
	background-image: -webkit-linear-gradient(left,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0));
	background-image: -moz-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
	background-image: -ms-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
	background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
}
.panel-login input[type="text"], .panel-login input[type="email"], .panel-login input[type="password"] {
	height: 45px;
	font-size: 16px;
	-webkit-transition: all 0.1s linear;
	-moz-transition: all 0.1s linear;
	transition: all 0.1s linear;
}
.panel-login input:hover, .panel-login input:focus {
	outline:none;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	border-color: #ccc;
}
.btn-login {
	background-color: #59B2E0;
	outline: none;
	color: #fff;
	font-size: 14px;
	height: auto;
	font-weight: normal;
	padding: 14px 0;
	text-transform: uppercase;
	border-color: #59B2E6;
}
.btn-login:hover, .btn-login:focus {
	color: #fff;
	background-color: #53A3CD;
	border-color: #53A3CD;
}
.forgot-password {
	text-decoration: underline;
	color: #888;
}
.forgot-password:hover, .forgot-password:focus {
	text-decoration: underline;
	color: #666;
}
.btn-register {
	background-color: #1CB94E;
	outline: none;
	color: #fff;
	font-size: 14px;
	height: auto;
	font-weight: normal;
	padding: 14px 0;
	text-transform: uppercase;
	border-color: #1CB94A;
}
.btn-register:hover, .btn-register:focus {
	color: #fff;
	background-color: #1CA347;
	border-color: #1CA347;
}
</style>