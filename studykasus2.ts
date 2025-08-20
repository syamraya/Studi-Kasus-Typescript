
interface Book {
    id: number;
    judul: string;
    kategori: string;
    harga: number;
    stok: number;
}
const books: Book[] = [
    { id: 1, judul: "Belajar TypeScript", kategori: "Programming", harga: 100000, stok: 5 },
    { id: 2, judul: "Dasar-dasar JavaScript", kategori: "Programming", harga: 75000, stok: 10 },
    { id: 3, judul: "Pemrograman Web dengan HTML & CSS", kategori: "Web", harga: 85000, stok: 8 },
    { id: 4, judul: "Pengantar Database", kategori: "Database", harga: 90000, stok: 6 },
    { id:5, judul: "Harry poaah", kategori: "Novel", harga: 120000, stok: 3 },
    { id: 6, judul: "Will you be my heart", kategori: "Novel", harga: 95000, stok: 4 },
    { id: 7, judul: "Belajar React", kategori: "Web", harga: 110000, stok: 2 },
    { id: 8, judul: "Istriku ternyata ibu dari anak ku", kategori: "Halu", harga: 1500000, stok: 1 },
];

//SOAL 1

function byCategory(kategori: string): Book[] {
    return books.filter((book) => book.kategori === kategori);
}
console.log("Soal nomer 1 Daftar buku Kategori");
console.log(byCategory("Novel"));

console.log("")

console.log("Soal nomer 2 Total nilai gudang");
//SOAL 2
const totalNilaigudang= books.map((book) => ({
    ...book,
    totalNilai: book.harga * book.stok,
}))
console.log("Total nilai gudang", totalNilaigudang);

console.log("")

console.log("Soal nomer 3 Tambah stok");
//SOAL 3
books.sort((a, b) => b.stok - a.stok);
let bukuStokMax = books[0];
if (bukuStokMax) {
    bukuStokMax.stok += 10;
}
console.log(bukuStokMax);

console.log("")

console.log("Soal nomer 4 Format ringkas");
//SOAL 4
const ringkas = books.map((book, index) => {
  return `${index + 1}. ${book.judul} — Rp${book.harga} (Stok: ${book.stok})`;
});

console.log(ringkas.join("\n"));
console.log("")

//SOAL 5
console.log("Soal nomer 5 Judul");
books.forEach((book, index)=> {
  console.log(`${index + 1}. ${book.judul}`);
});