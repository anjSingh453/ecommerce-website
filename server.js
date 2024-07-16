import express  from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from'./routes/authRoute.js';
 

//configure env
dotenv.config();

//database config
connectDB();

//rest object to create the rest api
const app =express();

//middelwares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", authRoutes);

//create rest api
app.get("/",(req, res)=>{
    res.send("<h1>Welcome to ecommerce website</h1>");
});

//port
const PORT = process.env.PORT || 8080;

//run listen, for running the website
app.listen(PORT , ()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});