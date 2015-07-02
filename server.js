var app = require('express')();

app.get('/', function (req, res) {
	res.send('GET');
});

app.post('/', function (req, res) {
	res.send('POST');
});

app.listen(17345, function (err) {
	if (err) { throw err; }
});
