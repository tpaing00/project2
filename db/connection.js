const mongoose = require('mongoose');
require('dotenv').config();

let mongoDB = process.env.DB_URI; 
// "mongodb+srv://tinzarpaing:srMzyakcnoODqVWO@cluster0.iicid9e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

////EXAMPLE////
// Make sure to create .env file and use an environment variable

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
