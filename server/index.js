const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const complaintsRouter = require('./routes/complaints');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://yashkaul777:ioSEiZk3qtzNoJfM@cluster0.gzj2ylx.mongodb.net/';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/complaints', complaintsRouter);

// Test route
app.get('/', (req, res) => {
  res.send('Express server and MongoDB are working!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 