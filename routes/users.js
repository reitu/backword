const { json } = require("express");
const express = require("express");
const users = require("../database/users")

const router = express.Router();

// /user...
router.get("/", (req, res) => {
  console.log('Gi working')
  res.json(users.getUsers());
});

// router.get("/:username", (req, res) => {
//   // req = {
//   //   user_id: 2
//   // }
//   console.log(`GET/:user_id working`)
//   console.log(req.params.user_id)
//   //const user_id = req.params.user_id;
  
//   //if (dummyData.length <= user_id) return res.json({ message: "User not found" });
//   //console.log(res.status) //so by default there's a status 
//   //but i must define status for errors res.status

//   res.json(dummyData);//the response object will be returned, it's not empty originally, i'm just changing those things
  
// });

// add user
router.post("/register", (req, res) => { //post usually requires a body and the info of where I'm posting to is usually in the body,easier this way. post can also user parameters, whatever is easier
  console.log('Login POST working')
  const user = req.body
  console.log({user})
  
  const result = users.addUser(user)//returing user from db

  res.end(JSON.stringify({ //this is what is returned to the frontt end and front end can read it
    result: 'authenticated',
    user : result //returned user is now part of response object to be sent to front end
  }))
  
});





//POST AND GET are the only ones really used

router.get("/game/:id", (req, res) => { //and get uasually uses query parameters in the endpoint
  console.log('Login GET USER working') //GET cannot have a BODY, only every uses PARAMS 
  const id = req.params.id
  console.log({id})
  
  const result = users.getUser(id)//returNing user from db

  //result.gamesWon = 56


  res.end(JSON.stringify({ //this is what is returned to the frontt end and front end can read it
    result: true,
    user : result//returned user is now part of response object to be sent to front end
  }))
  
});


router.post("/register/game", (req, res) => { //post usually requires a body and the info of where I'm posting to is usually in the body,easier this way. post can also user parameters, whatever is easier
  console.log('Login POST working')
  const user = req.body
  user.gamesWon = 56
  console.log({user}) //so does it replace old user?
  
  const result = users.addUser(user)//returing user from db

  res.end(JSON.stringify({ //this is what is returned to the frontt end and front end can read it
    result: 'authenticated',
    user : result //returned user is now part of response object to be sent to front end
  }))
  
});

// router.post("/register", (req, res) => {
//   console.log('Register POST working')
//   const user = req.body
//   console.log({user})
  
//   //dummyData.push(user)

//   res.end(JSON.stringify({ //this is what is returned to the frontt end and front end can read it
//     result: true,
//     user
//   }))
  
// });


//WE NEVER RREALLY USE DELETE



//you do validation here and the front end

//we never trust the user! you get charged per request so make sure that people can't just keep clicking and sending requests for no reason
//assume user is dumb and will send irrelevent code.

module.exports = router;