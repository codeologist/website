

    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');

    app.set('views', './public/tmpl');
    app.set('view engine', 'jade');
    app.engine('jade', require('jade').__express);
    app.use(express.static(__dirname + '/public'));

    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


    app.get('/', function(req, res){
        res.render("homepage")
    });


    app.post('/api/contact', function(req, res){
        console.log(">x>x>x>x>", req.body)
        res.json( req.query );
    });


    app.listen(process.env.PORT || 3000, function(){
            console.log( "start", process.pid, process.env.PORT || 3000, process.uptime() );

    });
