import express from 'express'

const app = express()
const PORT = 3001

app.get('/',(req,res)=>{
    res.send('home page')
})

app.listen(PORT,()=>console.log(`The server is listening on port ${PORT}`))