const express = require('express')
const port = 3000;

const app = express()

// app.get("/", (req,res)=> {
//     res.send('hello express')
// })

// app.get("/firmy/:name", (req,res)=> {
//     console.log(req.params)
//     const {name} = req.params;   //const name = req.params.name
//     const companies =[
//         {slug: 'tworcastron', name:"Tworca Stron"},
//         {slug: 'brukmode', name:"Bruk Mode"}
//     ]
    
//     const company = companies.find(x=>x.slug === name)
//     if (company){
//         res.send(`hello express ${company?.name}`)
//     }else res.send(`nie ma takiej firmy`)
// })


//zadanie

const users = [
    { id: 1, name: "Janek", email: 'janek@gmail.com' },
    { id: 2, name: "Adam", email: 'adam@gmail.com' },
    { id: 3, name: "Tomasz", email: 'tomek@gmail.com' },
    { id: 4, name: "Dawid", email: 'dawid@gmail.com' }
]

app.get("/", (req,res)=> {
    res.send('strona glowna')
})
app.get("/kontakt", (req,res)=> {
    res.send('strona kontaktowa')
})

app.get("/profile", (req,res)=> {
    let profilesMsg = `Znaleziono ${users.length} profile`
    profilesMsg += users.map(user=> `<br>- ${user.name} (id: ${user.id})` )
    res.send(profilesMsg)
})

app.get("/profile/:id/:mode?", (req,res)=> {
    const {id, mode} = req.params;
    console.log(id)
    if (mode==="szczegoly"){
        return
    }else {
        
        const user = users.find(x => x.id === parseInt(id))
        console.log(user)
        // res.send(`Dane uzytkownika: imie ${user.name} `)
    }
})

app.listen(port)

// app.get("/firmy/:name", (req,res)=> {
//     console.log(req.params)
//     const {name} = req.params;   //const name = req.params.name
//     const companies =[
//         {slug: 'tworcastron', name:"Tworca Stron"},
//         {slug: 'brukmode', name:"Bruk Mode"}
//     ]
    
//     const company = companies.find(x=>x.slug === name)
//     if (company){
//         res.send(`hello express ${company?.name}`)
//     }else res.send(`nie ma takiej firmy`)
// })





















//http wbudowana biblioteka do serwerow

// const http = require("http");

// const requestListener = function (req, res) {
//     console.log('ktos wszedl na server')
//     console.log(req.url)

//     if (req.url ==="/kontakt"){
//         res.write("<h1>kontakt</h1>")
//         return res.end()
//     }
//     res.writeHead(200)
//     res.write("<title>Node</title>")
//     res.write("<h1>blazej blazej ty ...</h1>")
//     res.end()
// }
// const server = http.createServer(requestListener);
// server.listen(3000)