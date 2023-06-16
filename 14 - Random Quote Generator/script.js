let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"Believe you can and you're halfway there." `,
    person: `Theodore Roosevelt`,
  },
  {
    quote: `"The only way to do great work is to love what you do."`,
    person: `Steve Jobs`,
  },
  {
    quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    person: `Winston Churchill`,
  },
  {
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    person: `Eleanor Roosevelt`,
  },
  {
    quote: `"Don't watch the clock; do what it does. Keep going." `,
    person: `Sam Levenson`,
  },
  {
    quote: `"The only limit to our realization of tomorrow will be our doubts of today."`,
    person: `Franklin D. Roosevelt`,
  },
  {
    quote: `"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."`,
    person: ` Christian D. Larson`,
  },
  {
    quote: `"The harder I work, the luckier I get."`,
    person: `Samuel Goldwyn`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
