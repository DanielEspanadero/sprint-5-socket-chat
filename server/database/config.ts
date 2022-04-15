import { connect } from 'mongoose';

export const dbConnection = async () => {
    try {
        await connect(process.env.MONGO_URL as string);
        console.log('MongoDB started')
    } catch (error) {
        throw new Error('Error to connecting database');
    }
}