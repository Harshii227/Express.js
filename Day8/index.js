import express from 'express';
import path from 'path';
const app = express();
const port = 3000;

const filepath = path.resolve()

app.get('/', (req, res)=>{
    console.log(filepath);
    res.sendFile(filepath+'/index.htm')
});

app.get('about', (req, res)=>{
    res.send('<h1> About page</h1> <p>this is about page')
});

app.use((req, res)=>{
    res.status(404).sendFile(filepath+'/pages/404.html')
});

app.listen(port, () =>{
    console.log(`server is running at http://localhost:${port}`)
});