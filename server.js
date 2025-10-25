const express = require('express');
const dotenv = require('dotenv').config();
const errorhandler = require('./middleware/errorhandler');
const connectDB = require('./config/dbconnection');
const userroute=require('./routes/userroute');
connectDB();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/api/contacts', require('./routes/contactroutes'));
app.use('/api/users', userroute);
app.use(errorhandler);
app.listen(PORT, () => {
  console.log({ message: `Server is running on port ${PORT}` });
});
