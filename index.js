import express from 'express'

const app = express()

app.listen(8080,()=>{
    console.log("Server started on port 8080")
})


app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/home",(req,res)=>{
    res.send("This is home api")
})

app.get("/products",(req,res)=>{
    let products=[
        {
            "name":"Product 1",
            "price":34
        }
    ]
    res.json(products)
})