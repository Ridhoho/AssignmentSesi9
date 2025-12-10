// Bisa setengah hasil bagian nasabah.forEach() dan if(element.nilaiKredit>75)
// Kesusahan bagian if(!result[element.kelasKredit]){result[element.kelasKredit]=[]}
// Baru tau cara bikin array sebagai property didalem object
// Ada bantuan AI setengah latihan untuk bantu mempermudah dan refactor

function daftarNasabahLolos(nasabah) {
  let result = {};
  nasabah.forEach((element) => {
    if (element.nilaiKredit > 75) {
      //Pembelajaran baru untuk bisa bikin array kosong dalem object
      if (!result[element.kelasKredit]) {
        result[element.kelasKredit] = [];
      }
      //Sempat pikirin beda cara untuk tambah element.nama dan element.nilaiKredit
      //Tapi gak sangka bisa di refactor lebih singkat
      result[element.kelasKredit].push({
        nama: element.nama,
        nilaiKredit: element.nilaiKredit,
      });
    }
  });
  return result;
}

// DRIVER CODE
console.log(
  daftarNasabahLolos([
    { nama: "John", nilaiKredit: 80, kelasKredit: "Platinum" },
    { nama: "Jane", nilaiKredit: 60, kelasKredit: "Gold" },
    { nama: "Doe", nilaiKredit: 85, kelasKredit: "Platinum" },
    { nama: "Smith", nilaiKredit: 77, kelasKredit: "Silver" },
  ])
);
