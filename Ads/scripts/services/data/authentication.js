/**
 * Created by Evstati on 7.1.2015 г..
 */
app.factory('authentication', ['localStorageService', function (localStorageService) {
	var key = 'user';

	function saveUserData(data) {
		localStorageService.set(key, data);
	}

	function getUserData() {

		//console.log( localStorageServiceProvider.get(key));
		return localStorageService.get(key);
	}

	function getHeaders() {
		var headers = {};
		var userData = getUserData();
		if (userData) {
			headers.Authorization = 'Bearer ' + userData.access_token;
		}
		return headers;

	}

	function removeUser() {

		return localStorageService.remove(key);

	}

	function isAdmin() {
		var isAdmin = getUserData().isAdmin;
		return isAdmin;
	}

	function isLoggedIn() {
		return !!getUserData();
	}
	return {
		saveUser: saveUserData,
		getUser: getUserData,
		getHeaders: getHeaders,
		removeUser: removeUser,
		isAdmin: isAdmin,
		isLoggedIn: isLoggedIn
	}
}]);