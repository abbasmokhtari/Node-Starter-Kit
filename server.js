const express = require("express");

const app = express();

app.get('/nodes', (req, res) => {
    res.send('Hello Abbas')
})


app.get('/CYF', (req, res) => {
    res.send('Hello CYF')
})

app.listen(3000, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
  });