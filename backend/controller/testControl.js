

const student=require('../model/testScheme')


const  testOutGet=((req,res)=>{
    
        student.find({},(err,data)=>{
            if(!err){
                res.json({status:true,message:data})
            }
        })
}) 


const testOutPost=((req,res)=>{
    const data = new student({
        roll_no:  12,
        name: "test",
        year: 2020,
        subjects: ["t1,t2,t3"]
    })
    data.save()
    .then((response)=>{
        res.json({status:true,message:"db connected successfully and value stored"})
    })
    .catch((err)=>{console.log(err)})
})
module.exports = {
    testOutGet ,
    testOutPost
}