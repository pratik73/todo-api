const mongoose = require('mongoose');
const config = require('config');

const dbUri = config.get('mongoUri');

const connectDB = async () => {
    try {
        var db = await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = connectDB;