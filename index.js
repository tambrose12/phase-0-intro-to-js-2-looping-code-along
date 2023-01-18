// Code your solutions in this file

/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}


const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);
*/

// const guests = ["Guadalupe", "Ollie", "Aki"];



function writeCards(list, wordToInsert) {

    const output = [];

    for (let i = 0; i < list.length; i++) {

        const message = `Thank you, ${list[i]}, for the wonderful ${wordToInsert} gift!`;

        output.push(message);
    }

    return output;
}


function countDown(int) {
    for (let i = int; i >= 0; i--) {
        console.log(i)
    }

}


