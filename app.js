const helmet =require("helmet");
const dotenv =require("dotenv");
const express =require("express");
const products =require("./products.js")
dotenv.config();
const PORT=process.env.PORT;
const app =express();

app.use(helmet())
app.get("/praducts/:id/:key",(req,res,next)=>{
    return new Promise((resolve)=>{
    const id=req.params.id;
    const key=req.params.key;
    const object =products.find((p)=>{return p.id===Number(id)});
    if (!object) {
        return res.status(404).send("Product not found");
    }
    const item =object.product;
    console.log(id);
    console.log(item);
    if(key==process.env.KEY || Number(key)==123){
       resolve("hello")
       res.send(`you got ${item} with id ${id} for a discount`);
       
    }else{
        return res.status(404).send("product not found");
    }
    })
    
})
console.log("hello")
app.listen(PORT || 3000,()=>{console.log(`server running on port:${PORT}`)});
