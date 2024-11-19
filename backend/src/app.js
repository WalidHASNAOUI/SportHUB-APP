require('dotenv').config();
const express = require('express'); 
const connectDB = require('./config/db.js'); 


const app = express(); 


// connect to MongoDB
connectDB(); 


// Middleware and Routes 
app.use(express.json()); 
app.get('/api/test', (req, res) => {
    res.status(200).json({ message : 'Server and Database are working!'})
}); 
// app.use('/api/users', require('/routes/userRoutes')); 
// app.use('/api/users', require('routes/eventRoutes')); 


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
})