/**
 * Created by lenn on 16/11/14.
 */
var express = require('express')
var app = express()

// 设置模版引擎
app.set('view engine', 'pug')

// 静态文件
app.use(express.static('src/static'));

var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

app.use(myLogger)

app.get('/', function (req, res) {
    console.log('GET request to the homepage')
    res.send('GET request to the homepage')
});

app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

app.get('/index', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

var server = app.listen(8888, function () {
    console.log("server started at port 8888.")
});