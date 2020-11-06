const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/Shelly_Bluebook_Frontend_Dealership'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/Shelly_Bluebook_Frontend_Dealership/index.html'));});
app.listen(process.env.PORT || 8080);
