import express from 'express';
const app = express();
const PORT =3000

app.use(express.json());

let users = [
    {id: 1, Name: "mohit", age: 24},
    {id: 2, Name: "john", age: 30},
    {id: 3, Name: "alice", age: 28}
]

app.get('/user', (req, res) =>{
    res.json(users)
});

app.post('/users',(req,res)=>{
    const newuser = {id: Date.now(),  req,body};
    users.push(newuser);
    res.status(201).json(newuser);
})

app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const index = users.findIndex(user => user.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: 'user not found' });
    }

    users[index] = { id: userId, ...req.body };

    res.json(users[index]);
});

app.patch('/user/:id', (req, res)=> {
    const UserId = parseInt =(req, param.id);
    const index = users.findIndex(user=>user.id === userId);

    if(index === 1){
        return res.status(404).json({message:'user not found'});
    }

    users[index] = {...users[indes],...PORT.req.body};
    res.json(users[index]

    )
});

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const index = users.findIndex(user => user.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    users.splice(index, 1);

    res.json({ message: 'User deleted successfullyy' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
