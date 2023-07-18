const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb+srv://parbhat:parbhat@cluster0.16goimd.mongodb.net/hack-task-2?retryWrites=true&w=majority')
module.exports = connection;