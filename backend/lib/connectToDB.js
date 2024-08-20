import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Explicitly specifying the path to .env file
dotenv.config({ path: '../../.env' });

console.log('name:', process.env.name);  // Should print "yash"
console.log('MONGODB_URI:', process.env.MONGODB_URI);  // Should print the URI

const connection = {};

export const connectToDB = async () => {
    try {
        if (connection.isConnected) {
            return;
        }

        const db = await mongoose.connect(process.env.MONGODB_URI, {});
        connection.isConnected = db.connections[0].readyState;
    } catch (err) {
        console.error('Error connecting to db:', err);
    }
};
