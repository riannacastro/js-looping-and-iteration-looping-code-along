// Code your solutions in this file


function writeCards(arrayNames, eventName) {
    let newCard = []
    for (let i = 0; i < arrayNames.length; i++) {
        newCard[i] = `Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`
    }
    return newCard
}


function countDown(num) {
    while (num >= 0) {
        console.log(num --)
    }
}