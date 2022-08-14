const express=require('express')

const router=express.Router();
const testController=require("../controller/testControl")

const pipeline=require("../controller/pipeline")


router.get("/dbGetCheck",testController.testOutGet)

router.post("/dbPostCheck",testController.testOutPost)


router.get("/aggregate",pipeline.aggregate)

router.post("/aggregatePost1",pipeline.aggregatePost1)

router.post("/aggregatePost2",pipeline.aggregatePost2)


module.exports = router;