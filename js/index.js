
//Tilfældige navne og aldre igennem array
let names = ["Karen", "Gertrud", "Paul", "Karsten", "Peder"];
let ages = [10, 20, 30, 40, 50];

let randomName = names[Math.floor(Math.random() * names.length)];
let randomAge = ages[Math.floor(Math.random() * ages.length)];

document.getElementById("aktuelle-person-navn").innerHTML = randomName;
document.getElementById("aktuelle-person-alder").innerHTML = randomAge + " år";

//Ændre tilfældigt farverne på div.
// Går ind og henter elemented ved ID. 
const element = document.getElementById("aktuelle-person-farve");

// Opretter eventlistner med klik funktion.
element.addEventListener("click", function() {
  const colors = ["red", "blue", "green", "yellow"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  element.style.backgroundColor = colors[randomIndex];
});

//

let name = ["John", "Jane", "Jim", "Joan"];
let age = [25, 30, 35, 40];

let currentIndex = 0;

function updatePerson() {
  document.getElementById("aktuelle-person-navn").innerHTML = names[currentIndex];
  document.getElementById("aktuelle-person-alder").innerHTML = ages[currentIndex] + " år";
}


document.getElementById("btn-person-forrige").addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = names.length - 1;
  }
  updatePerson();
});

document.getElementById("btn-person-naeste").addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= names.length) {
    currentIndex = 0;
  }
  updatePerson();
});

