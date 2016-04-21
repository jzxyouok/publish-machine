/**
 * Created by sanbornyin@gmail.com on 2016/4/20.
 */
'use strict';

var fs = require('fs');
var tpl = require(__dirname + '\\..\\config-tpl\\dir-tpl');

var _dir = function(host, name, callback) {

    fs.mkdir(host + name, callback);
};

var _file = function(host, name, data, callback) {

    fs.writeFile(host + name, data, 'utf8', callback);
};

module.exports = function(host) {

    return function(options) {
        var isDir = options.type !== 'file';
        if(isDir) {
            _dir(host, options.name, options.callback);
        }else {
            _file(host, options.name, options.data, options.callback);
        }
    }
};