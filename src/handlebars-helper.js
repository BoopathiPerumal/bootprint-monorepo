// This module create handlbars-helpers for swagger-to-html

var Handlebars = require("handlebars");
var marked = require("marked");
var cheerio = require("cheerio");
var highlight = require('highlight.js');


highlight.configure({
    "useBR": true
});

marked.setOptions({
    highlight: function (code, name) {

        var highlighted;
        if (name) {
            highlighted = highlight.highlight(name, code).value;
        } else {
            highlighted = highlight.highlightAuto(code).value;
        }
        return highlight.fixMarkup(highlighted);
    }
});

module.exports = {
    'toUpperCase': function (value) {
        if (value) {
            return new Handlebars.SafeString(value.toUpperCase());
        } else {
            return '';
        }
    },
    'eachSorted': function (context, options) {
        var ret = "";
        var data;
        if (typeof context !== "object") {
            return ret;
        }
        var keys = Object.keys(context);
        keys.sort().forEach(function (key,index) {
            if (options.data) {
                data = Handlebars.createFrame(options.data || {});
                data.index = index;
                data.key = key;
                data.length = keys.length;
                data.first = index === 0;
                data.last = index === keys.length-1;

            }
            ret = ret + options.fn(context[key], { data: data})
        });
        return ret
    },
    'methodClass': function (value) {
        return {
            "post": "success",
            "put": "warning",
            "get": "info",
            "delete": "danger"
        }[value];
    },
    'md': function (value, strip) {
        if (!value) {
            return value;
        }
        var $ = cheerio.load(marked(value));
        return new Handlebars.SafeString(strip ? $("p").html() : $.html());
    },
    // http://stackoverflow.com/questions/8853396/logical-operator-in-a-handlebars-js-if-conditional
    "ifeq": function (v1, v2, options) {

        if (v1 === v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    },
    "json": function (value) {
        if (!value) {
            return "";
        }
        var schemaString = require("json-stable-stringify")(value, {space: 4});

        var $ = cheerio.load(marked("```json\r\n" + schemaString + "\n```"));
        var definitions = $('span:not(:has(span)):contains("#/definitions/")');
        definitions.each(function (index, item) {
            var ref = $(item).html();
            // TODO: This should be done in a template
            $(item).html("<a href=" + ref.replace(/&quot;/g, "") + ">" + ref + "</a>");
        });

        return new Handlebars.SafeString($.html());
    },
    "ifcontains": function (array, object, options) {
        if (array && array.indexOf(object) >= 0) {
            return options.fn(this);
        }
        return options.inverse(this);
    }
};

