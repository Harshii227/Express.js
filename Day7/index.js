import express from  "express";
import path from 'path';
const app = express();
const PORT = 3000;

const filepath=path.resolve();

app.get('/', (req, res) =>{
    console.log(filepath);
    res.sendFile(filepath)+ '/page/home.html'
});

app.get('/about', (req,res) =>{
    res.send('<h1> about page</h1> <p>This is the about page.</p>')
});

app.use((req, res)=>{
    res.status(404).sendFile(filepath+'/pages/404.html');
})
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
});
