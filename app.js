/**
 * Created by ttlib on 16-4-3.
 */
var express = require('express');

var app = express();
app.listen(3000);

app.get('/',function(req,res){
    res.send("hello world!");
});