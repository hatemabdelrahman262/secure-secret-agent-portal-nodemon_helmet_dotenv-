const helmet =require("helmet");
const dotenv =require("dotenv");
const express =require("express");
const products =require("./products.js")
dotenv.config();
const PORT=process.env.PORT;
const app =express();

app.use(helmet())
app.get("/products/:id/:key",(req,res,next)=>{
    return new Promise((resolve)=>{const {id,key}=req.params
    const object =products.find((p)=>{return p.id===id})
    const item =object.product
    console.log(id)
    console.log(item)
    if(key==process.env.KEY){
       res.send(`you got ${item} with id ${id} for a discount`);
       resolve("run complete")
    }
    return next();})
    
})
console.log("hello")
app.listen(PORT || 3000,()=>{console.log(`server running on port:${PORT}`)});
