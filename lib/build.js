#!/bin/env node

var fs = require('fs');
var readdirp = require('readdirp');
var hljs = require('highlight.js');
var md = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    try {
      return hljs.highlightAuto(str).value;
    } catch (__) {}
    return '';
  }
});

md.use(require('markdown-it-footnote'));
md.use(require('markdown-it-toc-and-anchor'));

var concat = "";
readdirp({
	root: '.',
	fileFilter: [ '*.md', '!README.md' ],
	directoryFilter: [ '!.git', '!.svn', '!node_modules' ]
}, function (entry) {
	concat += fs.readFileSync(entry.fullPath, "utf8") + "\n\n";
},  function () {
	var template = fs.readFileSync("lib/template.html", "utf8");
	var data = {
		"content" : md.render(concat)
	};
	var out = template.replace(/<!--\s*%(\w+)%\s*-->/g, function(match, group1) {
		return data[group1];
	});
	fs.writeFileSync("index.html", out);
});