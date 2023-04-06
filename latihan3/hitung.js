const { penjumlahan, panggilNama, exportVariabel } = require("./penjumlahan");

console.log(penjumlahan(5, 5));
console.log(panggilNama());
console.log(exportVariabel);

// bisa juga import dengan mengubah nama variabel, yang dikarenakan nama variabel nya sudah ada
// variabel penjumlahan di ganti nama menjadi a
// const { penjumlahan: a, panggilNama } = require("./penjumlahan");
// console.log(a(3, 6));

// saat import yang di panggil hanya 1 akan di kenali sebagai object jika, saat export function secara kelompok
// cara panggilnya ya tentu sesuai dengan cara pemanggilan sebuah object alias pake titik (.) misal penjumlahan.exportVaribel

// saat export :
// module.exports = {
//   penjumlahan,
//   panggilNama,
//   exportVariabel,
// };
// saat import
// const penjumlahan = require("./penjumlahan");
