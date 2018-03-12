const names = [
  "Adnan", "Chelsea", "Jamie", "Jyothsna", "Marcus", "Nehal", "Salem", "Stacy", "Benjamin", "Eric", "Josh", "Kevin", "Michael", "Rishikesh", "Sharon", "Tyrel", "Cemal", "Henry", "Justin", "Lucy", "Ned", "Rob", "Shreedhar"
];

const students = [
    {
      name: "Stephen",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Adnan",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Chelsea",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Jamie",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Jyothsna",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Marcus",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Nehal",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Salem",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Stacy",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Benjamin",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Eric",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Josh",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Kevin",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Michael",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Rishikesh",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Sharon",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Tyrel",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Cemal",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Henry",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Justin",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Lucy",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Ned",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Rob",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Shreedhar",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    }
  ]
  console.log(students);
  const button = document.querySelector(".btn");
  const nameDiv = document.getElementById("name");
  
  button.onclick = function() {
      let random = Math.floor(Math.random() * names.length);
      let currentName = students[random].name;
      console.log(`${random} : ${currentName}`);
      nameDiv.innerHTML = `You're up ${currentName}!`;
  }

// Get data from .json instead of names array

// incorporate object properties so that I can console.log them in the browser and have access to them

// play around with incrementing points
    // will need to have an incrementing UI element
    // will need to show the current points

// update the UI with CSS Grid and Flexbox and colors from the CSS Grid Firefox Example

// connect to a mongo db, and set so I can store historical point totals but refresh weekly point totals (guess that could just be two fields)