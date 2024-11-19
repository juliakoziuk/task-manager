import mongoose from 'mongoose';

const URI =
    'mongodb+srv://juliakozyk999:fVK3IJTTkKjYje7D@cluster0.i9e10.mongodb.net/your_database_name?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {});
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

connectDB();
