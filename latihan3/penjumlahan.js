function penjumlahan(varPertama, varKedua) {
  return varPertama + varKedua;
}

function panggilNama() {
  return "woi siapa lo";
}

const exportVariabel = "telegram";

// cara export 1 function
// module.exports = penjumlahan;

// cara export 2 atau lebih function
module.exports = {
  penjumlahan,
  panggilNama,
  exportVariabel,
};
