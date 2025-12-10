// Kesusahan banget, tanya AI untuk bantuan.
// Setelah bantuan, lebih mengerti logika for loop dan while.
// Masih kesusahan bagian pseudocode untuk rencanain codingnya.

function pengaturanTempatDuduk(karyawan, kolom) {
  let totalRow = [];
  if (kolom <= 0) {
    return "Invalid number";
  }
  // Tidak kepikiran bisa for loop untuk Slice dan Push
  for (let i = 0; i < karyawan.length; i += kolom) {
    let row = karyawan.slice(i, i + kolom);
    totalRow.push(row);
  }
  // Mengerti While, tapi gak sangka bisa gunakan totalRow[totalRow.length-1] .length .push
  while (totalRow[totalRow.length - 1].length < kolom) {
    totalRow[totalRow.length - 1].push("Kursi Kosong");
  }
  return totalRow;
}

// DRIVER CODE
console.log(pengaturanTempatDuduk(["John", "Mary", "Sarah"], 0));
// 'Invalid number'

console.log(
  pengaturanTempatDuduk(["John", "Mary", "Sarah", "Jake", "Anna"], 2)
);
// [['John', 'Mary'], ['Sarah', 'Jake'], ['Anna', 'Kursi Kosong']]

console.log(pengaturanTempatDuduk(["Emma", "Noah", "Liam"], 3));
// [['Emma', 'Noah', 'Liam']]

console.log(
  pengaturanTempatDuduk(["Alice", "Bob", "Charlie", "David", "Eve", "Frank"], 4)
);
// [['Alice', 'Bob', 'Charlie', 'David'], ['Eve', 'Frank', 'Kursi Kosong', 'Kursi Kosong']]
