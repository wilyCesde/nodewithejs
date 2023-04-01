import express from "express"
const app = express();
const port = 2300

// motor de plantillas para el front
app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
  let titulo = 'Productos para la venta ';
  let prods =[
    {ref:'01',descripcion:'mouse',precio:25000},
    {ref:'02',descripcion:'teclado',precio:85000},
    {ref:'03',descripcion:'monitor',precio:150000},
  ]
    res.render('pages/index',{products:prods,title:titulo})
})

app.get('/us',(req,res)=>{
  res.render('pages/us')
})

app.listen(port, ()=>{
    console.log(`Server is running in http://localhost:${port}`);
})