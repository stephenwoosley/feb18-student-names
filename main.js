const names = [
  "Adnan", "Chelsea", "Jamie", "Jyothsna", "Marcus", "Nehal", "Salem", "Stacy", "Benjamin", "Eric", "Josh", "Kevin", "Michael", "Rishikesh", "Sharon", "Tyrel", "Cemal", "Henry", "Justin", "Lucy", "Ned", "Rob", "Shreedhar"
];

const button = document.querySelector(".btn");
const nameDiv = document.getElementById("name");

button.onclick = function() {
    let random = Math.floor(Math.random() * names.length);
    console.log(random);
    let currentName = names[random]
    nameDiv.innerHTML = `You're up ${currentName}!`;
}

// Get data from .json instead of names array

// incorporate object properties so that I can console.log them in the browser and have access to them

// play around with incrementing points
    // will need to have an incrementing UI element
    // will need to show the current points

// update the UI with CSS Grid and Flexbox and colors from the CSS Grid Firefox Example

// connect to a mongo db, and set so I can store historical point totals but refresh weekly point totals (guess that could just be two fields)
