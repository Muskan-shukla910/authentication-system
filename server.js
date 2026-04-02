import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
 const app=express();
const port=process.env.PORT|| 4000


// app.use(express.json());
app.use(cookieParser());
// app.use(cors({credentials:true}));

app.get('/',(req,res)=>{

    res.cookie("name","Muskan");
    
    res.send("done");
});

app.get("/home",(req,res)=>{
    console.log(req.cookies);
    res.send("Hey I am Home page");
});

app.get("/login",(req,res)=>{
    res.send("Login Page");
})
app.listen(port,()=>{
    console.log(`Server is rujuning at port ${port}`);
});



