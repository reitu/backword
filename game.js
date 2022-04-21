function getSecret() {
    var secret = "atlas"
    return secret
}



var won = false
var tries = 0
var secret = "atlas"
var arrSecret = secret.split('')


module.exports = {
    checkGuess() {


        while ((tries <= 6) && !won) {

            tries = tries + 1

            console.log("start of FUNCT tries: " + tries)

            console.log(tries)

            var mine = document.getElementById("guessId").value

            var countSum = 0

            //var secret = "atlas" //secret word of the day

            var arrSecret = secret.split('')

            var arrMine = mine.split('')
            var arrTrack = [0, 0, 0, 0, 0]


            // log("after first loop")
            //log(arrMine)
            //log("count after first loop: 🔢   "+ countSum)

            for (var i = 0; i < arrSecret.length; i++) {

                if (arrSecret.includes(arrMine[i]) && (arrMine[i] == arrSecret[i]) && (arrMine[i] != "_")) {
                    arrTrack[i] = 2
                    countSum = countSum + 2
                    arrSecret.splice(i, 1, "_")
                    arrMine.splice(i, 1, "_")

                }

            }


            for (var i = 0; i < arrSecret.length; i++) {

                if (arrSecret.includes(arrMine[i]) && (arrMine[i] != arrSecret[i])) {

                    arrTrack[i] = 1;
                    countSum = countSum + 1
                    var iPos = arrSecret.indexOf(arrMine[i])
                    arrSecret.splice(iPos, 1, "_")
                    arrMine.splice(i, 1, "_")

                }

            }

            var sum2 = arrTrack.reduce(function (a, b) {
                return a + b;
            }, 0);

            console.log("tries:   " + tries)



            if (sum2 == 10) {
                console.log(" 🏆  Count is: " + sum2)

                console.log("Your guess:  " + mine + "  is right")

                gameOver = true

                console.log("Game over, Great! ✅")
                won = true

                console.log(mine)
                console.log(arrTrack)

                console.log("start of FUNCT tries: " + tries)
                if (tries == 6) {
                    console.log("No more tries")
                    document.getElementById("btnPlay").disabled = true

                    //  showStats()
                    //getUser()

                }

                return gameOver


            } else {
                console.log(mine)
                console.log(arrTrack)

                console.log("start of FUNCT tries: " + tries)
                if (tries == 6) {
                    console.log("No more tries")
                    document.getElementById("btnPlay").disabled = true
                    // showStats()
                    //getUser()

                }
                return arrTrack
            }

        }
    }

}
