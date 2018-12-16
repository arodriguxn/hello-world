var express = require('express')
var app = express()
/*
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
*/

/*
const os = require('os');
const dns = require('dns');

dns.lookup(os.hostname(), (err, addresses, family) =>{
	global.address = addresses;
});
*/

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})/*.get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM example');
      const results = { 'results': (result) ? result.rows : null};
      res.send(results);
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
})*/

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
