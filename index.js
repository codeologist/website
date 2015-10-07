

    var express = require('express');
    var app = express();


    app.set('views', './public/tmpl');
    app.set('view engine', 'jade');
    app.engine('jade', require('jade').__express);
    app.use(express.static(__dirname + '/public'));



    app.get('/', function(req, res){
        res.render("homepage")
    });


    app.listen(process.env.PORT || 3000, function(){
            console.log( "start", process.pid, process.env.PORT || 3000, process.uptime() );

    });
