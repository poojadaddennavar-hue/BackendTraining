const express=require("express");
const app=express();
require("dotenv").config()

const port=process.env.port
const mongoose=require("mongoose");

const {createAccount,login}=require("./controllers/user")
const {createNotebook,getNotes, updateNotebook,deleteNotebook}=require("./controllers/notes")


app.use(express.json());

app.post("/signin",createAccount)
app.post("/login",login)
app.post("/CreateNotebook",createNotebook)
app.get("/allNotes",getNotes)
app.put("/update/:id", updateNotebook)
app.delete("/api/delete/:id",deleteNotebook);

app.listen(port,()=>{
    console.log(`server is running port number ${port}`);
});
mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("database is connected")
})
.catch((e)=>{
  console.log("something went wrong",e);
})
