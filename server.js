import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';


const app = express();
const PORT = 5000;

app.use(cors())

// connect database
connectDB()
// middleware
app.use(express.json())

// Routes
app.get('/',(req,res)=>{
    res.send('NiHuFy Server Side Is Running')
})

app.listen(PORT,()=>{
    console.log(`Server Started on http://localhost:${PORT}`)
})