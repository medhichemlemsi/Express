// 1 - import express
const express = require('express')


// 2 - init express
const app = express()



function timeAvailable(req, res, next) {
    const day = new Date().getDay();
    const hour = new Date().getHours();
    if (day >= 1 && day <= 5) {
      if (hour > 9 && hour < 17) {
        next();
      } else {
        res.send("out of time");
      }
    } else {
      return res.send("out of day");
    }
  }
app.use(timeAvailable)

// 3 - create your endpoints
app.get("/", timeAvailable, (req, res) => {
  res.send("Welcome to WS-Express")

})
// 4 - run server
const port = process.env.PORT || 7000
app.listen(port, err => {
    err? console.log(err) : console.log(`the server is running on port http://localhost:${port}`)
})

// 5 - Get the html files 
app.get('/' ,(req, res)=>{
res.sendFile(__dirname + "/public/")
res.sendFile(__dirname + "/public/contact.html")
res.sendFile(__dirname + "/public/service.html")
})

app.use(express.static(__dirname + "/public"))
