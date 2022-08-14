
const mongoose = require('mongoose')
const config=require('../config/local')

const studentSchema = new mongoose.Schema({
    roll_no:  Number,
    name: String,
    year: Number,
    subjects: [String]
}); 

const  Student = mongoose.model(config.prefix +'student', studentSchema);
module.exports = Student;
