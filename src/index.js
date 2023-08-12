const express = require("express");
const app = express();
app.use(express.json());
const PORT =3001;


const namesOfStud = [
    {
        id: 101,
        name: "Priya"
    },
    {
        id: 102,
        name: "Roy"
    },
    {
        id:103,
        name: "John"
    },
];

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

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.get("/",
    (req,res,next)=>{
        res.send("hello server");
        next();
    },
    (req,res,next)=>{
        console.log("middleware testing");
        next();
    },
    (req,res)=>{
        console.log("This is the home page");
    }
);

app.get("/names",(req,res)=>{
    res.send(namesOfStud)
});
app.post("/names",(req,res)=>{
    console.log(req.body);
    namesOfStud.push(req.body);
    res.send(201);
});

app.get("/subjects",(req,res)=>{
    res.send(subjects)
});
app.post("/subjects",(req,res)=>{
    console.log(req.body);
    subjects.push(req.body);
    res.send(201);
});

app.get("/grade",(req,res)=>{
    res.send(grades)
});
app.post("/grade",(req,res)=>{
    console.log(req.body);
    grades.push(req.body);
    res.send(201);
});

//try middleware
