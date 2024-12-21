const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/task-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
