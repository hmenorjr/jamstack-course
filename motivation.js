// init an array of quotes
const quotes = [
    "... and you're gorgeous!",
    "... have a wonderful day!",
    "... and you got this!",
    "... and so this puppy!"
];

// random pick any quote
var quote = quotes[ Math.floor(Math.random() * Math.floor(quotes.length) )];

// display it in the browser with an class = quote
document.querySelector(".quote").append(quote);