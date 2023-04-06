const fs = require("fs");

//cara baca file secara synchronous
const baca = fs.readFileSync("./text.txt", "utf-8");

//nulis file
const kalimat = "reset kata";
const tulis = fs.writeFileSync("./text.txt", kalimat);

console.log(baca);
console.log(kalimat);
