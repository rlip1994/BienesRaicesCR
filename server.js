var express = require('express')
var app = express()
app.use(app.use("/realestate", express.static(__dirname + '/realestate')));

app.listen(5050)
