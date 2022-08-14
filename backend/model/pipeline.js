const mongoose = require('mongoose')
const config=require('../config/local')
const pipelineSchema=new mongoose.Schema({
    user_id:String,
    teckstack:String,
    exp:Number,
    sal:String
})

const pipeline = new mongoose.model(config.prefix+"pipeline",pipelineSchema)

module.exports = pipeline;