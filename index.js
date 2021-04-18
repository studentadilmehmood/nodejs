const express = require('express')
const app = express()

app.use(express.json())

const users = [
    {
        id: 1,
        name: "Adil Mehmood"
    },
    {
        id: 2,
        name: "Hashir Mehmood"
    },
    {
        id: 3,
        name: "Zulkifil Rehman"
    }
];

app.get('/', (req, res) => {
    res.send(`<h1 style="color:red;">Hello Node World</h1>`)
});

app.get('/api/users', (req, res) => {
    res.send(users)
});

app.get('/api/user/:id', (req, res) => {
    const userID = req.params.id;
    const user = users.find(c => c.id === parseInt(userID))
    if(user)
        res.send(user)
    else
        res.status(404).send({
            success: false,
            data: [
                {
                    message: "user not found"
                }
            ]
        })

    //get the param id
    const id = req.params.id
    res.send(`<h1>single <b style="color:green;">USER ID ${id}</b> get</h1>`)
});

app.post('/api/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name
    }
    users.push(user)
    res.send(user)
})

const port = process.env.PORT || 3500
app.listen(port, () => {
    console.log(`STARTED LISTENING TO PORT ${port}`)
});