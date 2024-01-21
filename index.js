import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'


const port = process.env.PORT || 3001

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.get('/api/users',(req,res,next)=>{
    res.json([
        {name: "neal", lastName: "uehara"},
        {name: "john", lastName: "uehara"}
    ])
})

app.listen(port, ()=>{
    console.log(`App listing on port ${port}`)
})