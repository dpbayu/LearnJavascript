// Bintang mengurut dari kecil ke besar //
// var s = '';
// var angka = '5';
// for (var i = 1; i <= angka; i++) {
//     for (var j = 0; j < i; j++) {
//         s += "*";
//     }
//     s += '\n';
// }
// console.log(s);
// Bintang mengurut dari kecil ke besar //
// Bintang mengurut dari besar ke kecil //
// var s = '';
// var angka = '5';
// for (var i = angka; i > 0; i--) {
//     for (var j = 0; j < i; j++) {
//         s += "*";
//     }
//     s += '\n';
// }
// console.log(s);
// Bintang mengurut dari besar ke kecil //
// Bintang dari kecil ke besar & dari besar ke kecil //
// var s = '';
// var angka = '5';
// for (var i = 1; i <= angka; i++) {
//     for (var j = 0; j < i; j++) {
//         s += "*";
//     }
//     s += '\n';
// }
// for (var i = angka; i > 0; i--) {
//     for (var j = 0; j < i; j++) {
//         s += "*";
//     }
//     s += '\n';
// }
// console.log(s);
// Bintang dari kecil ke besar & dari besar ke kecil //
// Bintang muncul dari kanan //
var s = '';
var angka = '5';
for (var i = 1; i <= angka; i++) {
    for (var j = angka - 1; j >= i; j--) {
        s += ' ';
    }
    for (var k = 1; k <= i; k++) {
        s += "*";
    }
    s += '\n';
}
console.log(s);
// Bintang muncul dari kanan //
// Bintang muncul dari kanan mengurut dari terbesar hingga terkecil //
var s = '';
var angka = '5';
for (var i = angka; i < 0; i--) {
    for (var j = angka - 1; j >= i; j++) {
        s += ' ';
    }
    for (var k = 1; k < i; k++) {
        s += "*";
    }
    s + '\n';
}
console.log(s);
// Bintang muncul dari kanan mengurut dari terbesar hingga terkecil //