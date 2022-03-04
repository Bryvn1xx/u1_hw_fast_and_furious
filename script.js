let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)
/////
// i could not figure out why i was getting an error on some fo my code, i went to ta-hours to have themtake a look at it and they said
// it should work, i think a bracket somewhere at the top got deleted but i am not sure 


/////

  // Part 1
  const heading = document.getElementById('main-title')
  heading.textContent = 'Family';
  
  // Part 2
  document.body.style.backgroundColor = 'tan'
  // Part 3
  const e = document.querySelector('#favorite-things li:last-child')
  e.parentElement.removeChild(e);
// Part 4
document.getElementByClassName('')
let specialTitle = document.querySelector('special-title').style.fontSize = '2em';
  // Part 5 // remove child / 
const backSpace = document.getElementById('past-races').children
backSpace[3].remove()


// create element
  // Part 6
const newLi = document.createElement('div')
const text = document.createTextNode('San Diego')
newList.appendChild(text)
document.getElementById('past-races').appendChild(newLi)
 // Part 7
 const newList = document.createElement('div')
 const newH = document.createElement('h1')
 const newP = document.createElement.Element('p')
 newDiv.className = 'blog-post'
 newDiv.style.backgroundColor = 'rebeccapurple'
 newH.innerText = 'San Diego'
 newP.innerText = 'Family Family Family Family Family'
 newP.style.color = 'black'
 newDiv.appendChild(newH)
 newH.appendChild(newP)
 document.querySelector('.main').appendChild
}
