const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const createaccounttoken = (data) => {
	
	console.log(data)
	try {

		var token = jwt.sign({_id: data}, 'freelancer-ke-122220928283829');

		return token;

	} catch (err) {

		return err;
	}

}

module.exports.createaccounttoken = createaccounttoken;