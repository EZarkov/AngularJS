/**
 * Created by Evstati on 7.1.2015 г..
 */
app.factory('userData',['$resource', 'baseServiceUrl', 'authentication', function ($resource, baseServiceUrl, authentication ){


	function registerUser(user) {
	return	$resource(baseServiceUrl + 'user/register')
		.save(user)
		.$promise
		.then(function (data) {
			authentication.saveUser(data);
		}

	)}

	function loginUser(user) {
		return	$resource(baseServiceUrl + 'user/login')
			.save(user)
			.$promise
			.then(function (data) {
				authentication.saveUser(data);
				console.log(authentication.getHeaders());
			}

		)}

	

	function logoutUser() {
		return	$resource(baseServiceUrl + 'user/logout')
			.save(user)
			.$promise
			.then(function (data) {
				authentication.removeUser();
				console.log(authentication.getHeaders());
			}

		)
	}
	return {
		login: loginUser,
		register: registerUser,
		logout: logoutUser
	}
}]);