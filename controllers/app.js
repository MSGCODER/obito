/**
 * Created by lenn on 16/11/14.
 */
var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('GET request to the homepage')
});

app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

var server = app.listen(8888, function () {
    console.log("server started at port 8888.")
});