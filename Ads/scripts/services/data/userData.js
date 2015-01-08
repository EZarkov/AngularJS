/**
 * Created by Evstati on 7.1.2015 г..
 */
app.factory('userData', ['$resource', 'baseServiceUrl', 'authentication', function ($resource, baseServiceUrl, authentication) {


	function registerUser(user) {
		var resource = $resource(baseServiceUrl + 'user/register')
			.save(user);
		resource.$promise
			.then(function (data) {
				authentication.saveUser(data);
			});

		return resource;
	}

	function loginUser(user) {
		var resource = $resource(baseServiceUrl + 'user/login')
			.save(user);

		resource.$promise
			.then(function (data) {
				authentication.saveUser(data);
			});
		return resource;
	}


	function logoutUser() {
		var resource = $resource(baseServiceUrl + 'user/logout')
			.save(user);
			resource.$promise
			.then(function (data) {
				authentication.removeUser();
				console.log(authentication.getHeaders());
			}
		);

		return resource;
	}

	return {
		login: loginUser,
		register: registerUser,
		logout: logoutUser
	}
}]);