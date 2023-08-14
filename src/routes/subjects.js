const {Router}=require("express");
const router=Router();


const subjects = [
    {
        sid: "01",
        sname:"Maths"
    },
    {
        sid: "02",
        sname: "Science"
    },
    {
        sid: "03",
        sname: "Social"
    },
    {
        sid: "04",
        sname: "CS"
    },

];

router.get("/subjects",(req,res)=>{
    res.send(subjects)
});
router.post("/subjects",(req,res)=>{
    console.log(req.body);
    subjects.push(req.body);
    res.send(201);
});

module.exports = router;