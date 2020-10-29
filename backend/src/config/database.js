const mongoose = require('mongoose')

mongoose.Promise = global.Promise
module.exports = mongoose,mongoose.connect('mongodb://localhost/todo')