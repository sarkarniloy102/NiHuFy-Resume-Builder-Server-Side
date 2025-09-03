import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {

    try {
        const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.axi4fly.mongodb.net/${process.env.DB_NAME}`;
        await mongoose.connect(connectionString);
        console.log('DB connected successfully')
    } catch (error) {
        console.log('DB conection failed', error.message);
        process.exit(1);
    }
}