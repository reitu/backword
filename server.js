const express = require('express');
const cors = require("cors")
const app = express();
const game = require("./game")

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

app.get("/:guess", (req, res) => { //post usually requires a body and the info of where I'm posting to is usually in the body,easier this way. post can also user parameters, whatever is easier
    //http:wordle/play/guess for example
    const guess = req.params.guess
    const result = game.checkGuess(guess)//returing user from db
    res.end(JSON.stringify({ //this is what is returned to the frontt end and front end can read it
        result //returned user is now part of response object to be sent to front end
    }))  
});

const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port} 🔥`);
