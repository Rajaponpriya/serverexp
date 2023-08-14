//Imports
const express = require("express");
const students = require("./routes/students")
const grades = require("./routes/grades")
const subjects = require("./routes/subjects")

//Initializations
const app = express();
const PORT =3001;

//Routes
app.use(express.json());
app.use(students);
app.use(grades);
app.use(subjects);
app.use((req,res,next)=>{
    console.log("middleware testing on home page");
    next();
},);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});


app.get("/",
    (req,res,next)=>{
        res.send("<h1>hello server</h1>");
        next();
    },
    
    (req,res)=>{
        console.log("This is the home page");
    }
);