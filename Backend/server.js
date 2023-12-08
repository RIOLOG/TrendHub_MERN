const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv')
const morgan  = require('morgan');
const  connectDB = require('./config/db.js');
const authRoutes = require("./routes/authRoute.js")
const cors = require('cors');
const categoryRoutes = require('./routes/categoryRoutes.js');
const productRoutes = require('./routes/productRoute')


//configuring ENV file:
dotenv.config();


//conection to DB:
connectDB();

//rest object:
const app = express()


//middlewares:
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//APIS ROUTES:
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', categoryRoutes);
app.use("/api/v1/product", productRoutes);


//rest api
app.get("/", (req, res) => {
    res.send({
        message:"Ankit Singh"
    })
})



//PORT
const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log("API RUNNING".bgBlue);
})