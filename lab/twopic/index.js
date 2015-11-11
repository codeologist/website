"use strict";

var twitterRss = require('twitter-rss-noauth');
var parseString = require('xml2js').parseString;


function stats(json) {

    var items = json.rss.channel[0].item;
    var out = {
        text: [],
        link: []
    };

    items.forEach(function (item) {
        out.text.push(item.title);
        out.link.push(item.link);
    });

    return out;
}

module.exports = function (req, res) {

    twitterRss('coder451', function (err, feed) {

        if (err) {
            res.json({"error": err});
        }

        parseString(feed, function (err, result) {
            res.render("twopic", {results: stats(result)});
        });
    });
};