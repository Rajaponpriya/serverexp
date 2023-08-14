const {Router}=require("express");
const router=Router();


const grades = [
    {
        id: 101,
        gr: "A"
    },
    {
        id: 102,
        gr: "B"
    },
    {
        id: 103,
        gr: "A"
    },
    {
        id: 104,
        gr: "A"
    },

]

router.get("/grade",(req,res)=>{
    res.send(grades)
});
router.post("/grade",(req,res)=>{
    console.log(req.body);
    grades.push(req.body);
    res.send(201);
});

module.exports = router;