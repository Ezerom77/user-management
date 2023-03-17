import mongoose from "mongoose";

const connectDB = (url) => mongoose.connect(url).then(() => console.log('Database connection established'));

export default connectDB;