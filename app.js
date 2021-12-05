const express = require('express')

const app = express()

app.use(express.json())

let users = [
    { name: "Wael", email: "Wael@gmail.com", id: 1 },
    { name: "Khalil", email: "Khalil@gmail.com", id: 2 },
    { name: "Amal", email: "Amal@gmail.com", id: 3 }
]

app.get('/', (req, res) => {
    res.send(users)
})


app.post('/users', (req, res) => {
    let newUser = { ...req.body, id: Math.random() }
    users.push(newUser)
   res.status(200).json({ msg: "user added with successfuly", users })
})


app.delete('/users/:id', (req, res) => {
    let id = Number(req.params.id)
    users = users.filter(el => el.id !== id)
    res.status(200).json({ msg: "user deleted with successfuly", users })
})

app.put('/users/:id', (req, res) => {
    let id = Number(req.params.id)
    users = users.map(el => el.id === id ? { ...el, ...req.body } : el)
    res.status(200).json({ msg: "user updated with successfuly", users })
})



const port = process.env.PORT || 7000

app.listen(port, err => {
    err
        ? console.log(err)
        : console.log(`the server is running on port http://localhost:${port}`)
})
