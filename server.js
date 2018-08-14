var express = require('express');

var app = express();

app.get('/app/:x/:y', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
	var x = parseInt(req.params.x);
	var y = parseInt(req.params.y);
	var z = x*y;
    res.send( z.toString());
});
console.info ('Bonjour youssra');
app.listen(9002);
	
