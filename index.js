import express from 'express'
import bodyParser from 'body-parser'


const port = process.env.PORT || 3001

const app = express()

app.use(bodyParser.json())

app.listen(port, ()=>{
    console.log(`App listing on port ${port}`)
})