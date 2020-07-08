var assert = require('assert');
var sprintf = require('sprintf-js').sprintf;
var fs = require('fs');
var cassandra = require('cassandra-driver');
var authProvider = new cassandra.auth.PlainTextAuthProvider(process.env.CASSANDRA_USER, process.env.CASSANDRA_PASS);

var contactPoints = ['cassandra.us-west-2.amazonaws.com:9142'];
var sslOptions = {
	  cert: fs.readFileSync('./public/AmazonRootCA1.pem'),
	  host: 'cassandra.us-west-2.amazonaws.com',
	  rejectUnauthorized: true
};
var client = new cassandra.Client(
	  {
		      contactPoints: contactPoints, 
		      authProvider: authProvider, 
		      localDataCenter: 'us-west-2', 
		      keyspace:'user', 
		      sslOptions: sslOptions
		      
		    }
);

exports.find = function(req, res){
    const query = 'SELECT last FROM customer WHERE first = ? ALLOW FILTERING';
    var data = req.body;	
    client.execute(query, [ data.first ], function(err, result) {
        assert.ifError(err);
	if(result.rows.length == 1) {
            res.end(sprintf('{ "last" : %s}', result.rows[0].last));
	}else{
            res.end(sprintf('{ "last" : false}'));
	}
    });
}

exports.add = function(req, res){
    const query = 'INSERT INTO customer (first, last, address, barangay, city, province, number, email, temperature, timestamp, establishment, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    var data = req.body;	
    client.execute(query, [ data.first, data.last, data.address, data.barangay, data.city, data.province, data.number, data.email, data.temperature, new Date(data.timestamp), data.establishment, data.latitude, data.longitude], { prepare : true , consistency: cassandra.types.consistencies.localQuorum }, function(err, result) {
        assert.ifError(err);
        res.json(data);
    });
}
