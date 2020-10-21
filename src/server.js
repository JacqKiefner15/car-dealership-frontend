const express = require('express');
const forceSsl = require('force-ssl-heroku');
const path = require('path');
const enableProdMode = require('@angular/core').enableProdMode
enableProdMode();
const app = express();
app.use(forceSsl);
app.use(express.static('./dist/shelly-bluebook-dealership'));
app.get('/*', (req,res)=>{
  res.sendFile(path.join(__dirname, '/dist/shelly-bluebook-dealership/index.html'))
});
app.listen(process.env.PORT || 8080, ()=>{
  console.log('Server started')
})
