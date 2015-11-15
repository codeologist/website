


    "use strict";

    var tokenizer = require('sbd');

    module.exports = function( req, res ){

        console.log("----->",req.body)
        res.json( tokenizer.sentences( req.body.text ) );
    };
