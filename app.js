const express= require('express');
const app = express();

const port = 5000;
// const logger =(req, res, next)=>{
//   next();
// }


/*app.use(logger)
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/myapp/Home.html')
});
app.get('/style.css',  (req,res)=>{
   res.sendFile(__dirname + '/myapp/style.css')
})*/

//app.use(express.static('myapp'));


 addActiveTime =(req, res, next)=> {
     let Day= new Date().getDay()
       let Hr= new Date().getHours()
   if((Hr<=8)||(Hr>=17)||(Day<=1)||(Day>=5))
   {
     res.sendFile(__dirname + '/access.html')
   }
  else{
  
      next()
     
  }
    }
    app.use(addActiveTime)


    app.use(express.static('myapp'));
 
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})
