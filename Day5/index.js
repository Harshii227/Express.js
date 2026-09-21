import express from "express";
import home from './pages/home.js';
import login from './pages/login.js';
import submit from './pages /submit.js';

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send(home());
})

app.get('/login',(req,res)=>{
    res.sendFile(login());
}); 

app.get('/submit',(req,res)=>{
    res.send(submit());
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
