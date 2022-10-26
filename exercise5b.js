// Rest dan Spread sama" menggunakan titik tiga (...) pada sintaxnya.

// REST PARAMETER-------------------------------------------------------------------------------------------------------------
const foo = (...params) => { // params = res parameter yang akan mewakili semua argument yang diberikan
    console.log(params)
}

foo("A", "B", "C"); // argument" yang akan diberikan ke parameter "params"

// --------------Parameter terakhir--------------------------------------------------------------------------------------------
// res parameter dapat mewakili sisa argumen yang belum dipetakan ke parameter" sebelumnya
// res parameter harus ditempatkan di paling belakang, jika tidak akan terjadi error!
const bar = (param1, param2, ...params) => {
    console.log("Argument pertama ", param1);
    console.log("Argument pertama ", param2);
    console.log("Sisa argument ", params);
}

bar("A", "B", "C", "D", "E");

// A dan B sudah dipetakan ke parameter param1 dan param2
// sedangkan C,D,E belum dipetakan
// res params dapat mewakili C,D,E yang belum dipetakan

// SPREAD OPERATOR---------------------------------------------------------------------------------------------------------------

// ---------------menggunakan Array----------------------------------------------------------------------------------------------
let arrayBilangan = [1, 2, 3, 4, 5];

// tanpa spread operator
console.log(arrayBilangan);

// pakai spread operator
console.log(...arrayBilangan);

// spread operator akan memisahkan elemen dalam array dan membuatnya berdiri sendiri/individu
// sehingga yang ditampilkan bukan lagi array melainkan masing" nilai dalam array.

// ---------------Array duplikat-------------------------------------------------------------------------------------------------
// spread dapat digunakan untuk menduplikasi nilai dari array asli
let arrayAsli1 = [1, 2, 3];
let arrayAsli2 = [1, 2, 3];

let arrayDuplikat1 = [...arrayAsli1, 4, 5, 6];
arrayDuplikat1[0] = 0; 

let arrayDuplikat2 = arrayAsli2;
arrayDuplikat2[0] = 0; 

console.log("Array asli (spread): "+ arrayAsli1);
console.log("Array duplikat (spread): " + arrayDuplikat1);
// jika memakai spread maka perubahan nilai arrayDuplikat tidak akan mempengaruhi arrayAsli

console.log("Array asli (tanpa spread): "+ arrayAsli2);
console.log("Array duplikat (tanpa spread): " + arrayDuplikat2);
// jika tidak memakai spread maka perubahan nilai arrayDuplikat akan ikut merubah nilai dari arrayAsli;

// --------------Array concatenate "+"--------------------------------------------------------------------------------
// spread juga dapat menggabungkan lebih dari 1 variable
let array1 = ["foo", "bar"];
let array2 = ["fizz", "buzz"];

// menggunakan spread operator
array1 = [...array1, ...array2]; // array1 dapat menyimpan nilai dari array1 dan array2 dengan menggunakan spread

console.log(array1);

// -------------Objek-------------------------------------------------------------------------------------------------
// menambahkan properti kedalam objek
let orang = {
    nama: "Franky",
    umur: 32
};

/*
cara tanpa spread:
    orang.pekerjaan = "guru";
    orang.pendidikan = "S1";
*/

orang = {...orang, pekerjaan: "guru", pendidikan: "S1"};
console.log(orang);
// spread dapat menambahkan properti kedalam objek
// spread dapat ditempatkan di depan, tengah, atau belakang








