const mongoose = require('mongoose');
const colors = require('colors')


const connectDB = async () => {
    try
    {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to DB`.bgYellow);
    }
    catch(err)
    {
        console.log(`Error in DB`.bgRed);
    }
}

// export default connectDB;
module.exports = connectDB;