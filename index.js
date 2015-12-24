

    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    var postmark = require("postmark");
    app.set('views', './public/tmpl');
    app.set('view engine', 'jade');
    app.engine('jade', require('jade').__express);
    app.use(express.static(__dirname + '/public'));

    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


    // Example request
    var client = new postmark.Client("748dc303-0e25-4fee-95d0-7643d1bb286c");



    app.get('/', function(req, res){
        res.render("homepage")
    });


    app.post('/api/contact', function(req, res){

        var email = {
            "From": "inquirys@codeology.co.nz",
            "To": "codeology451@gmail.com",
            "Subject": req.body["subject"],
            "TextBody": req.body["message"]
        };

        client.sendEmail(email);

        res.json(email);

    });


    app.listen(process.env.PORT || 3000, function(){
        console.log("start", process.pid, process.env.PORT || 3000, process.uptime());
    });
