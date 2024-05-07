const express = require('express')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require("path")
var port = process.env.PORT || 8080
var app = express()
const route = require('./routes/route')
const cors = require('cors');

app.use(flash())
app.use(cookieParser())
app.use(cors());
app.use(session({ secret: 'email' }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use('/', route)


app.listen(port, () => {
   console.log("Node server is runing in $s", port)
})

