// Put your code here

const names = [
  "Nashville", "Hong Kong", "The back yard", "Earth",
  "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

console.log("All Place Names");

for (const name of names) {
  console.log(name);
}

let theNames = names.filter(n => n.startsWith("The"));

console.log(`The' Places Names`);
names.forEach(name => {
  console.log(name);
})