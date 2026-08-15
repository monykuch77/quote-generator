const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    }
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("newquote");

button.addEventListener("click", function () {
const index=Math.floor(Math.random()*quotes.length);
   quote.innerHTML=quotes[index].quote;
   author.innerHTML=quotes[index].author;
});