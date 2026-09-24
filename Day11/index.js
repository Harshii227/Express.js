import express from 'express';

const app = express();
const PORT = 3001;

const loggermiddleware =(req,res,next)=> {
    console.log(`[${new Date().toLocaleDateString()}]`)
    next();
}
app.use(loggermiddleware);

app.use ('/admin', (req,res,next)=>{
    console.log('admin section accessed');
    next();
});

app.get('/', (req,res)=>{
    res.send('hello home!')
});

app.get('/about', (req,res)=>{
    res.send('hello about page!')
});

app.get('/admin/dashboard', (req,res)=>{
    res.send('hello admin page!')
});

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});