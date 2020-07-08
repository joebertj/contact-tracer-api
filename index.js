var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  , routes = require('./routes')
  , customer = require('./api/v1/customer')
  , bodyParser = require('body-parser');

var router = express.Router();
module.exports = router;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/api/v1/customer', customer.find);
app.post('/api/v1/customer', customer.add);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
