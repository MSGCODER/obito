/**
 * Created by lenn on 16/11/14.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(8888, function () {});