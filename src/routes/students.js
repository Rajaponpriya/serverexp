const {Router}=require("express");
const router=Router();


const namesOfStud = [
    {
        Priya: "/students/priya"
    },
    {
        Roy: "/students/roy"
    },
    {
        John: "/students/john"
    },
];

const detailsOfStud={
    priya:[
        {
            id: 101,
            name: "Priya",
            email: "rajaponpriya@gmail.com",
            place: "Tamil Nadu"   
        }
    ],
    roy:[
        {
            id: 102,
            name: "Roy",
            email: "roy@gmail.com",
            place: "Vizag"
        }
    ],
    john:[
        {
            id:103,
            name: "John",
            email: "john@gmail.com",
            place: "Bangalore"
        }
    ]
};

router.get("/students",(req,res)=>{
    res.send(namesOfStud);
});

router.get("/students/:name",(req,res)=>{
    const {name} =req.params;    
    res.send(detailsOfStud[name]);
});

router.post("/students",(req,res)=>{
    console.log(req.body);
    namesOfStud.push(req.body);
    res.send(201);
});


module.exports = router;

/*
router.get("/students/:name",(req,res)=>{
    const {name} =req.params; 
    var result=namesOfStud.find(getid);
    res.send(result);
});

function getid(name){
    return namesOfStud[id];
} */
