var mysql = require('mysql'),
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'fasilkom_prodi_ti'
	});

	connection.connect(function(err) {
		if (err) {
			console.log('Error while connecting database, message: ' + err.stack());
			return;
		}

		console.log('DB Connection Estabilished');
	});

	module.exports = connection;