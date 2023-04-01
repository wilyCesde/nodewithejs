import express from "express"
const app = express();
const port = 2300

// motor de plantillas para el front
app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.render('pages/index')
})

app.listen(port, ()=>{
    console.log(`Server is running in http://localhost:${port}`);
})