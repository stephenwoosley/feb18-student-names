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
