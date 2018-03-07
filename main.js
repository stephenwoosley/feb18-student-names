const names = [
  "Bob Costas", "Jerry Seinfield", "Mark Cuban", "Michael Jordan", "Douglas Crockford"
];

const nameDiv = document.getElementById("name");

button.onclick = function() {
    let random = Math.floor(Math.random() * names.length);
    let currentName = names[random]
    nameDiv.innerHTML = `You're up ${currentName}!`;
}
