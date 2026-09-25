import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Page!');
});

app.get('/fail', (req, res, next) => {
    //Artificial error creation
    const err = new Error('Something went wrong!');
    err.statusCode = 400; //Custom status code
    next(err); //Pass the error to the next middleware (error handler)
});

//Error handling middleware
app.use((err, req, res, next) => {
    console.log("Error caught by middleware:", err.message);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});