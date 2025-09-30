import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';

import path from 'path'
import { fileURLToPath } from 'url';
import resumeRouter from './routes/resumeRoutes.js';


// after completing resumeRoutes this code was written
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express();
const PORT = 5000;

app.use(cors())

// connect database
connectDB()
// middleware
app.use(express.json())

app.use('/api/auth', userRouter)

app.use('/api/resume', resumeRouter)
app.use('/uploads',
    express.static(path.join(__dirname, 'uploads'), {
        setHeaders: (res, _path) => {
            res.set('Access-Control-Allow-Origin', 'https://nihufy.netlify.app/')
        }
    })
)

// Routes
app.get('/', (req, res) => {
    res.send('NiHuFy Server Side Is Running')
})

app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`)
})
