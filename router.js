const Authentication = require('./controllers/authentication');

module.exports = function(app){
	// app.get('/', function(req, res, next){
	// 	res.send(['test', 'node', 'server']);
	// })
	app.post('/signup', Authentication.signup)

}