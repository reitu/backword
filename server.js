const express = require('express');
const cors = require("cors")
const app = express();

app.use(cors())
app.options('*', cors())
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    })
    next()
})


const userRouter = require('./routes/users');
const { checkGuess } = require('./game');


app.get('/', (req, res) => {
    res.send("testing reitu it works");
  })

app.use('/users',userRouter);

app.post('/guess', (req,res) => {
    res.send(checkGuess(req.body.guess));
})


const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port} 🔥`);