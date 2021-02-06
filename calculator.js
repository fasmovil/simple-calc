const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get("/bmicalc", (req, res) => {
    res.sendFile(__dirname + '/bmicalc.html');
});

app.post("/", (req, res) => {
    console.log(req.body);
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    res.send("El resultado es: " + result);
});

app.post("/bmicalc", (req, res) => {
    console.log(req.body);
    var w = parseFloat(req.body.w1);
    var h = parseFloat(req.body.h1);
    var bmi = w / (h * h);
    res.send("Tu BMI es: " + bmi.toFixed(2));
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})