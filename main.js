

const names = [
  "Adnan", "Chelsea", "Jamie", "Jyothsna", "Marcus", "Nehal", "Salem", "Stacy", "Benjamin", "Eric", "Josh", "Kevin", "Michael", "Rishikesh", "Sharon", "Tyrel", "Cemal", "Henry", "Justin", "Lucy", "Ned", "Rob", "Shreedhar"
];

const dice = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100" height="100"x="0px" y="0px" viewBox="0 0 100 100" fill="white" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M94.641,45.908l-8.516-20.842c-0.816-2.003-3.098-4.284-5.1-5.1l-20.842-8.516c-2.003-0.816-4.79-0.176-6.226,1.445  L37.855,30.971l-1.487-0.62c-1.992-0.836-5.223-0.836-7.216,0L8.393,39.064c-1.992,0.836-3.51,3.262-3.386,5.42l1.507,26.034  c0.124,2.158,1.734,4.811,3.582,5.926l19.314,11.624c1.848,1.114,4.852,1.114,6.71,0l19.293-11.624  c1.858-1.115,3.458-3.768,3.582-5.926l0.082-1.352l7.929,1.972c2.096,0.526,5.109-0.217,6.73-1.662l19.469-17.343  C94.816,50.698,95.467,47.911,94.641,45.908z M9.508,53.124c-0.289-1.662,0.826-3.014,2.488-3.014c1.672,0,3.262,1.352,3.551,3.014  c0.299,1.672-0.815,3.024-2.488,3.024C11.397,56.148,9.808,54.796,9.508,53.124z M14.37,72.686c-1.672,0-3.262-1.352-3.551-3.014  c-0.3-1.673,0.815-3.025,2.488-3.025c1.662,0,3.251,1.353,3.551,3.025C17.147,71.334,16.032,72.686,14.37,72.686z M21.338,60.277  c-0.289-1.672,0.826-3.024,2.488-3.024c1.672,0,3.262,1.353,3.551,3.024c0.299,1.662-0.815,3.015-2.488,3.015  C23.227,63.292,21.638,61.939,21.338,60.277z M26.2,79.829c-1.672,0-3.262-1.353-3.551-3.014c-0.299-1.673,0.816-3.025,2.488-3.025  c1.662,0,3.252,1.353,3.551,3.025C28.977,78.477,27.862,79.829,26.2,79.829z M32.766,43.699c-1.941,0-3.51-0.95-3.51-2.116  c0-1.177,1.569-2.126,3.51-2.126c0.95,0,1.807,0.237,2.436,0.599l0.63,2.529C35.243,43.245,34.097,43.699,32.766,43.699z   M40.787,64.5c-1.662,0-2.777-1.353-2.478-3.015c0.175-0.991,0.795-1.848,1.621-2.405l0.464,1.879  c0.279,1.115,1.022,2.24,1.961,3.128C41.87,64.345,41.333,64.5,40.787,64.5z M43.542,40.871c-1.177,1.177-2.921,1.012-3.892-0.372  c-0.97-1.394-0.795-3.468,0.382-4.646c1.177-1.187,2.911-1.011,3.881,0.372C44.885,37.609,44.72,39.694,43.542,40.871z   M55.435,69.641c-0.299,1.662-1.889,3.015-3.551,3.015c-1.672,0-2.788-1.353-2.488-3.015c0.176-1.022,0.836-1.91,1.703-2.457  l4.223,1.053C55.466,68.66,55.518,69.124,55.435,69.641z M58.542,40.179c-1.188,1.177-2.932,1.012-3.902-0.382  c-0.97-1.383-0.795-3.458,0.382-4.645c1.177-1.177,2.922-1.012,3.892,0.382C59.884,36.917,59.719,39.002,58.542,40.179z   M62.113,16.694c0.826-0.826,2.612-0.382,3.985,0.991c1.362,1.362,1.806,3.148,0.98,3.974c-0.826,0.826-2.612,0.393-3.985-0.98  C61.722,19.306,61.288,17.531,62.113,16.694z M70.939,32.912c1.373,1.363,1.807,3.148,0.98,3.975  c-0.825,0.826-2.611,0.392-3.984-0.981c-1.362-1.373-1.807-3.148-0.98-3.974C67.781,31.095,69.566,31.539,70.939,32.912z   M65.056,46.517c1.383-0.97,3.469-0.805,4.646,0.382c1.177,1.177,1.012,2.921-0.382,3.892c-1.384,0.971-3.459,0.805-4.646-0.382  C63.497,49.232,63.672,47.488,65.056,46.517z M66.47,54.91c1.384-0.971,3.469-0.806,4.646,0.371  c1.177,1.188,1.012,2.932-0.382,3.902c-1.384,0.971-3.458,0.805-4.646-0.382C64.911,57.625,65.076,55.88,66.47,54.91z   M71.951,67.772c-1.394,0.97-3.469,0.805-4.646-0.372s-1.012-2.921,0.372-3.892c1.383-0.971,3.469-0.806,4.646,0.372  C73.5,65.058,73.335,66.802,71.951,67.772z M71.404,23.972c-1.373-1.373-1.817-3.159-0.991-3.985  c0.836-0.826,2.611-0.392,3.984,0.981s1.807,3.159,0.981,3.984C74.553,25.779,72.767,25.335,71.404,23.972z M80.23,39.663  c-0.836,0.826-2.612,0.382-3.985-0.991c-1.372-1.363-1.806-3.148-0.98-3.974c0.826-0.836,2.612-0.393,3.975,0.98  C80.612,37.051,81.056,38.827,80.23,39.663z M79.704,27.079c-1.373-1.373-1.807-3.148-0.981-3.974  c0.826-0.836,2.612-0.392,3.985,0.98c1.362,1.373,1.807,3.149,0.98,3.985C82.862,28.896,81.077,28.452,79.704,27.079z M88.53,42.77  c-0.826,0.826-2.612,0.392-3.975-0.98c-1.373-1.373-1.817-3.148-0.991-3.985c0.826-0.826,2.611-0.382,3.984,0.991  C88.922,40.158,89.355,41.944,88.53,42.77z"/></svg>'

const students = [
    {
      name: "Stephen",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Josh P",
      hasUsedPAF: false,
      hasUsedAA: false,
      score: 0
    },
    {
      name: "Maria",
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

  const roll = document.querySelector(".roll");
  const points = document.querySelector(".points");
  const nameDiv = document.getElementById("name");
  
  window.onload = () => {
      roll.innerHTML += dice;
  }

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
