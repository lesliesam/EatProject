

var userData = {};

var LogicData = {

	setUserData: function(data) {
		userData = data;
	},

	getUserData: function() {
		return userData;
	}
};


module.exports = LogicData;