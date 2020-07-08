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
    const query = 'SELECT count FROM password WHERE shaone = ?';
    var shaone = req.body.shaone;	
    client.execute(query, [ shaone ], function(err, result) {
        assert.ifError(err);
	if(result.rows.length == 1) {
            res.end(sprintf('{ "count" : %s}', result.rows[0].count));
	}else{
            res.end(sprintf('{ "count" : 0}'));
	}
    });
}
