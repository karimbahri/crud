const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const database_url = process.env.DATABASE_URL.replace(/<password>/g, process.env.PASSWORD);
        const connect = await mongoose.connect(database_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
    
        console.log(`connected successfully to : ${connect.connection.host}`);
    } catch (err) {
        console.log(`Failed to connect to mongoDB : ${err}`);
    }

}
