/**
 * Created by Evstati on 7.1.2015 г..
 */
app.factory('adsData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {

	var resource = $resource(baseServiceUrl + 'ads:adId', {adId: '@id'}, {
		update: {method: 'PUT'}

	});

	function getPublicAds(filterParams) {
		//pagesize curent page

		return resource.get(filterParams);
	}


	function getUserAds(filterParams, headers){
		var resource = 	$resource(baseServiceUrl + 'user/ads', {},  {
			get: {
				method: 'GET',
				headers: headers
			}
		});

		return resource.get(filterParams, headers);
	}

	function editAd () {

	}



	function deactivateAd(adId, headers) {
		var resource = 	$resource(baseServiceUrl + 'user/ads/deactivate/' +adId, {},  {
			update: {
				method: 'PUT',
				headers: headers
			}
		});

		return resource.update(headers);
	}


	function publishAgainAd(adId, headers) {
		var resource = 	$resource(baseServiceUrl + 'user/ads/publishagain/' +adId, {},  {
			update: {
				method: 'PUT',
				headers: headers
			}
		});

		return resource.update(headers);


	}


	function getAdById(adId) {
		return resource.get({id: adId});
	}

	function addAd(ad, headers) {

		var resource = 	$resource(baseServiceUrl + 'user/ads/', {},  {
			save: {
				method: 'POST',
				params:ad,
				headers: headers
			}
		});




		return resource.save();
	}







	function deleteAd(adId) {
		return resource.delete({id: adId});

	}


	return {
		getPublicAds: getPublicAds,
		edit: editAd,
		getAdById: getAdById,
		add: addAd,
		delete: deleteAd,
		getUserAds: getUserAds,
		deactivateAd: deactivateAd,
		publishAgainAd:publishAgainAd

	}
}]);