const express = require ('express');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, '../public')))

const port=3001
app.listen(port,()=> {
    console.log(`Se prendio en el puerto ${port}`)
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "views/home.html"));
});

