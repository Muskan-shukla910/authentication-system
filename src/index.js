const express = require("express");
const app=express();


app.get("/",(req,res)=>{
    res.send("Hello World from Express!");
})
app.listen(3000,()=>{
    console.log("Server is running at port 3000");

})


// middleware
app.use(express.json());
// app.use(express.morgan());;

// export default app;


