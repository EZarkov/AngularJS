/**
 * Created by Evstati on 7.1.2015 г..
 */
app.factory('authentication', ['localStorageService', function (localStorageServiceProvider) {
	var key = 'user';

	function saveUserData(data) {
		localStorageServiceProvider.set(key, data);
	}

	function getUserData() {

		//console.log( localStorageServiceProvider.get(key));
		return localStorageServiceProvider.get(key);
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
			localStorage.removeItem(key);
	}

	function isAdmin() {
		var isAdmin =  getUserData().isAdmin;
		return isAdmin;
	}

	return {
		saveUser: saveUserData,
		getUser: getUserData,
		getHeaders: getHeaders,
		removeUser: removeUser,
		isAdmin: isAdmin
	}
}]);