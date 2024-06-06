console.log("Chai and code");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send('Login page')
})
app.get('/tweet',(req,res)=>{
    res.send('<h1>Hello</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>youtube</h2>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})