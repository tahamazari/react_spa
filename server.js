const express = require('express')

let app = express()

const PORT = process.env.PORT || 5000

app.use(express.static('dist'));

app.listen(PORT, function(){
    console.log("Listening on port: " + PORT)
})