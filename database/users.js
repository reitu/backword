const db = [] //for good prac i must have consistent schema/data structure
  


//the above db doesnt get exported


module.exports =  {
    addUser (user) {

        const newUser =  {
            ...user, //destructuring 
            uuid: uuidv4() ,
            gamesPlayed: 0,
            gamesWon: 0,
            gamesAverage: 0
        }  
            
        db.push(newUser)
        return newUser //here i'm return the newUser to where Ever i am calling the adduser function, just after creating the newUser
    },    
    getUser (userID) {
        var result = db.find(item => item.uuid == userID)
        return result
    },
    getUsers() {
        return db //at  no point do you want to retunr the whole db
    }

    
    
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}



