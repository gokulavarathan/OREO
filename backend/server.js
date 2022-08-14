const express=require('express');
const morgan = require('morgan');
const mongoose=require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');

const config = require('./config/local')
const app = express();
const routes=require("./routes/routes")
app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
res.json({status:true,message:"Hi backend"})
})



app.use("/route",routes)




mongoose.connect(config.dbconnection, { useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{ console.log("db connected")})
.catch((err)=>{console.log(err)})


console.log("serverPort",config.prefix)
app.listen(config.port, () => {
    console.log(`Server running at: http://localhost:${config.port}/`);
});

