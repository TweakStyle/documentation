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
md.use(require('markdown-it-toc-and-anchor'), {
	tocFirstLevel: 2
});
md.use(require('markdown-it-imsize'));
md.use(require('markdown-it-attrs'));
md.use(require("markdown-it-classy"));

var contentMarkdown = "@[toc]\n";
var markdownFiles = [];
readdirp({
	root: '.',
	fileFilter: [ process.argv[2] || '*.md' ],
	directoryFilter: [ '!.git', '!.svn', '!node_modules', '!bower_components' ]
}, function (entry) {
	if (entry.name !== "README.md") {
		markdownFiles.push(entry);
	}
},  function () {
	markdownFiles.sort(function(f1, f2) {
		return f1.fullPath.localeCompare(f2.fullPath);
	}).forEach(function(entry) {
		console.log("Reading "+entry.path);
		contentMarkdown += fs.readFileSync(entry.fullPath, "utf8") + "\n\n";
	});
	
	console.log("Reading template.html");
	var template = fs.readFileSync("lib/template.html", "utf8");
	
	console.log("Processing Markdown");
	var mdout = md.render(contentMarkdown);
	
	console.log("Processing Template");	
	var out = template.replace(/<!--\s*%content%\s*-->/g, mdout);

	console.log("Adding clear cache param to static resources");
	var cacheNumber = ""+new Date().getTime();
	out = out.replace(/<link [^>]*href=[\"']([^\"']+)[\"'][^>]*>/ig, function(match, group1) {
		if (/^\/\/|^https?:\/\/|\?/i.test(group1)) {
			return match;
		}
		return match.replace(group1, group1 + "?v="+cacheNumber);
	});
	out = out.replace(/<script [^>]*src=[\"']([^\"']+)[\"'][^>]*>/ig, function(match, group1) {
		if (/^\/\/|^https?:\/\/|\?/i.test(group1)) {
			return match;
		}
		return match.replace(group1, group1 + "?v="+cacheNumber);
	});

	console.log("Writing index.html");
	fs.writeFileSync("index.html", out);
});