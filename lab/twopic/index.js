var twitterRss = require('twitter-rss-noauth');

module.exports = function (req, res) {

    twitterRss('coder451', function (err, feed) {
        // output an RSS 2.0 feed to stdout
        console.log(feed)
    });
    res.write("got feed")
};