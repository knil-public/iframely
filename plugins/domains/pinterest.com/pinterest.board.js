var DEFAULT_WIDTH = 600;

module.exports = {

    re: /^https?:\/\/(?:\w{2,3}\.)?pinterest\.com\/((?!pin)[a-zA-Z0-9%_]+)\/([a-zA-Z0-9%\-]+)\/?(?:$|\?|#)/i,

    mixins: [
        "*"
    ],

    getLink: function(url, og, options) {

        if (!og.type || og.type.indexOf('pinboard') == -1) {
            return;
        }

        return {
            type: CONFIG.T.text_html,
            rel: [CONFIG.R.app, CONFIG.R.ssl, CONFIG.R.inline, CONFIG.R.html5],
            template: "pinterest.widget",
            template_context: {
                url: og.url || url,
                title: "Pinterest Board",
                type: "embedBoard",
                width: options.maxWidth || DEFAULT_WIDTH,
                height: 600,
                pinWidth: 120
            },
            width: options.maxWidth || DEFAULT_WIDTH,
            height: 600 + 120
        };
    },

    tests: [{
        // No Test Feed here not to violate "scrapping" restrictions of Pinterest
        noFeeds: true
    },
        "http://pinterest.com/bcij/art-mosaics/",
        "http://pinterest.com/bcij/aging-gracefully/",
        "https://www.pinterest.com/mimimememe/office-humor-work-jokes/"
    ]
};