function getSecret() {
    var secret = "ATLAS"
    return secret
}

module.exports = {
    checkGuess(guess) {
        var arrSecret = getSecret().split('')

        var arrGuess = guess.split('')
        var arrTrack = [0, 0, 0, 0, 0]

        for (var i = 0; i < arrSecret.length; i++) {
            if (arrSecret.includes(arrGuess[i]) && (arrGuess[i] == arrSecret[i]) && (arrGuess[i] != "_")) {
                arrTrack[i] = 2
                arrSecret.splice(i, 1, "_")
                arrGuess.splice(i, 1, "_")
            }
        }

        for (var i = 0; i < arrSecret.length; i++) {
            if (arrSecret.includes(arrGuess[i]) && (arrGuess[i] != arrSecret[i])) {
                arrTrack[i] = 1;
                var iPos = arrSecret.indexOf(arrGuess[i])
                arrSecret.splice(iPos, 1, "_")
                arrGuess.splice(i, 1, "_")
            }
        }

        return {
            output: arrTrack,
            input: guess
        }
    }
}
