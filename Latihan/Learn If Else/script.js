// Const (data gak bisa di deklarasi ulang)
// const nama = "bayu";
// const nama = "pian";
// console.log(nama);

// Let (data gak bisa di deklarasi ulang disaat sama function, klo berbeda function masih bisa)
// function text() {
//     let nama = "bayu";
//     // let nama = "pian";
//     console.log(nama);
// }
// text()
// function text1() {
//     let nama = "pian";
//     // let nama = "pian";
//     console.log(nama);
// }
// text1()

// Var (data bisa dideklarasi ulang di function sama jika variabel sama maka yang diambil variabel yang terakhir)
// var nama = "dwi";
// var nama = "putra";
// console.log(nama);

// Passing Parameter ke dalam fungsi
// function hidup(orang, pilihan1) {
//     if (orang == 'BAYU') {
//         var pil1 = 'Hidup'
//     } else {
//         var pil1 = 'Mati'
//     }
//     var data = [{
//         'orang': orang,
//         'pilihan': pil1,
//     }];
//     return data;
// }
// console.log(hidup('BAYU', 'Hidup'));