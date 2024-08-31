import  express from 'express'
const passport=require('passport');
import  dotenv from 'dotenv'
import  {router} from './controllers/SocialLogin'
import session from 'express-session';
import  cors from 'cors'

const app=express()

dotenv.config()
const corsOptions = {
   origin: 'http://localhost:3000', // Specify the allowed origin(s)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  };
app.use(cors(corsOptions));
app.use(express.json())
app.use('/api',router)
app.use((err, req, res, next) => {
    return res.json({ error: err.message });
});

app.listen(process.env.port,()=>{
    console.log(
        "Express Server Listen Port:"+process.env.port
    )
})

