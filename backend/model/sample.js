const mongoose = require('mongoose')
const config=require('../config/local')
const sampledataSchema=new mongoose.Schema({
    name:String,
    age:Number,
    favoriteFoods:Array
})

const sampledata = new mongoose.model(config.prefix+"sampledata",sampledataSchema)

module.exports = sampledata;
