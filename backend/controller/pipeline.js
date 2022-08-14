
const pipeline=require('../model/pipeline')
const sample=require('../model/sample')


const aggregate = (async(req,res)=>{
    let pipe;
    let sam;
await pipeline.find({},(err,data)=>{
    if(!err){
        pipe=data
         sample.find({},(err1,data1)=>{
            if(!err1){
                sam=data1
                res.json({sam:sam,pipe:pipe})
            }
    })
}
})
})
    




const aggregatePost1 =((req,res)=>{
    
    const data  = new pipeline({
        user_id:"check",
        teckstack:"check",
        exp:12,
        sal:"check"
    })
    data.save()
    .then((response)=>{
        console.log(response)
    })
    })

    const aggregatePost2 =((req,res)=>{
    
        const data  = new sample({
            name:"String",
            age:12,
            favoriteFoods:["t1","t2"]
        })
        data.save()
        .then((response)=>{
            console.log(response)
        })
        })


module.exports = {
    aggregate ,
    aggregatePost1,
    aggregatePost2

}
