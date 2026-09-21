// Render HtML login form in POST:

import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('<h1> Welcome to Home Page</h1>)');
})

app.get('/login', (req, res)=> {
    res.send('<form action="/submit" method="POST"> <input type="text" name="username" placeholder="Enter your username"> <br> <input type="password" name="password" placeholder="Enter your password"> <br> <button type="submit">Login</button> </form>')
})

app.post('/submit', (req, res)=> {
    res.send('<h1>Login form submitted successfully!</h1>');
})  

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});   