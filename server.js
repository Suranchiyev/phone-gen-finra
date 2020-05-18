//Install express server
const express = require('express');
//var cors = require('cors');

const path = require('path');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/phone-gen-finra'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/phone-gen-finra/'}
);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8090);
