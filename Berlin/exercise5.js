/*const sum = (...rest) => {
    return rest.reduce((prev, curr) => prev + curr);
  };
  
  const result1 = sum(1, 2, 3, 4, 5);
  console.log(result1); // 15
  
  const result2 = sum(5, 5, 5, 5, 5);
  console.log(result2); // 25
  
  const result3 = sum(20, 10, 50, 30);
  console.log(result3); // 110*/

//   const myFn = (a, b, c, ...args) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(...args);
//   };
  
//   myFn(1, 2, 3, 4, 5, 6);
//   /* output:
//   1
//   2
//   [ 3, 4, 5, 6 ]
//   */

let orang = {
    name: "Nefo",
    age: 22,
    kuliah: true,
    jurusan: "Sistem informasi",

    name1: "Alden",
    age1: 22,
    kuliah1: true,
    jurusan1: "informatika",
  };
  

  let { name: nama, age: umur, kuliah: kuliah, jurusan: jurusan, name1: nama1, age1: umur1, kuliah1: kuliah1, jurusan1: jurusan1  } = orang;
  // 
  
  console.log(nama); // Output: Nefo
  console.log(umur); // Output: 22
  console.log(kuliah); // Output: True
  console.log(jurusan); // Output: Sistem Informasi
  console.log(nama1); // Output: Alden
  console.log(umur1); // Output: 22
  console.log(kuliah1); // Output: True
  console.log(jurusan1); // Output: informatika
  
  