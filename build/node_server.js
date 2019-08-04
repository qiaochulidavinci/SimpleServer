"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) { return res.send("Hello server"); });
app.get('/test', function (req, res) { return res.send("Test GET success"); });
var server = app.listen(8083, "localhost", function () { return console.log("Server start at: http://localhost:8083"); });
