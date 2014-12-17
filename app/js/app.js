function configDetails($routeProvider){

							$routeProvider.when( '/login', {
								templateUrl: 'login.html',
								controller: 'LoginController'
							});
							
							$routeProvider.otherwise({ redirectTo :  '/login' });
			
}
angular
	.module('app', ['ngRoute'])
	.config(configDetails)
	.controller('LoginController', function(){
	//	console.log('loginController is triggered');
	});



