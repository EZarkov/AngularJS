/**
 * Created by evstati on 06.01.15.
 */
"use strict";
Event.observe('returnCampBtn', 'click', function (e) {
	var cback = function () {
		var url = 'returnCamp.php';
		new Ajax.Request(url, {
			method: 'post',
			parameters: {
				key: '{$campKey}',
				returnCampGold: $('campGold').value,
				returnCampIron: $('campIron').value,
				returnCampWood: $('campWood').value,
				returnCampFood: $('campFood').value
			},
			onSuccess: function (transport) {
				var rs = JSON.parse(transport.responseText);
				if (rs.error) {
					kwModal.error(rs.output);
				} else {
//redirect
					window.location = "overview.php";
				}
			}
		});
		return false;
	}
	kwModal.confirm('{t}Are you sure you want to return this camp to the castle it was sent from?{/t}', cback);
});