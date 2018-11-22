var express = require("express");
var app     = express();
var path    = require("path");

// sass    = require('node-sass'), // We're adding the node-sass module
// path    = require('path');      // Also loading the path module

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  // res.sendFile(path.join(__dirname+'/public/index.html'));
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

app.listen(3000);


// var app = module.exports = express.createServer();

// app.configure(function(){
//   app.set('views', __dirname + '/views');
//   app.set('view engine', 'jade');
//   app.use(express.bodyParser());
//   app.use(express.methodOverride());
//   app.use(app.router);

//   // notice that the following line has been removed
//   // app.use(express.static(__dirname + '/public'));

//   // adding the sass middleware
//   app.use(
//      sass.middleware({
//          src: __dirname + '/public/sass', 
//          dest: __dirname + '/public/css',
//          debug: true,       
//      })
//   );   

//   // The static middleware must come after the sass middleware
//   app.use(express.static( path.join( __dirname, 'public' ) ) );
// });