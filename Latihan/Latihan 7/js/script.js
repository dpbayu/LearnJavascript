// Game Suit //
// var tanya = true;
// while (tanya) {
//     // Tentukan pilihan player
//     var p = prompt('Pilih : Gajah, Manusia, Semut');
//     // Tentukan pilihan computer
//     var comp = Math.random();
//     if (comp > 0.34) {
//         comp = 'Gajah';
//     } else if (comp >= 0.34 && comp < 0.67) {
//         comp = 'Manusia';
//     } else {
//         comp = 'Semut';
//     }
//     // Buat rules permainan
//     var hasil = '';
//     if (p == comp) {
//         hasil = 'SERI';
//     } else if (p == 'Gajah') {
//         hasil = (comp == 'Manusia') ? 'MENANG!' : 'KALAH!';
//     } else if (p == 'Manusia') {
//         hasil = (comp = 'Gajah') ? 'KALAH!' : 'MENANG!';
//     } else if (p == 'Semut') {
//         hasil(comp = 'Manusia') ? 'KALAH!' : 'MENANG!';
//     } else {
//         hasil = 'Anda memasukkan pilihan yang salah!!';
//     }
//     // Tentukan hasil
//     alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\n Maka hasilnya : Kamu ' + hasil);

//     // Konfirmasi
//     tanya = confirm('Mau main lagi?')
// }
// alert('Terima Kasih telah bermain.');
// Game Suit //

// Game Tebak Angka //
var attempt = 3;
var tanya = true;
while (tanya) {
    var kesempatan = attempt;
    var p = prompt('Kesempatan pertama \nPilihlah angka dari 1 hingga 10');
    var compt = Math.floor(Math.random() * 10) + 1;
    for (kesempatan; kesempatan > 1; kesempatan--) {
        if (p == compt) {
            '';
        } else if (p < compt) {
            var p = prompt('Tebakan yang anda masukan terlalu RENDAH \n' + [kesempatan - 1] + ' kesempatan lagi');
        } else if (p > compt) {
            var p = prompt('Tebakan yang anda masukan terlalu TINGGI \n' + [kesempatan - 1] + ' kesempatan lagi');
        } else {
            var p = prompt('Anda memasukan angka yang salah');
        }
    }
    if (p == compt) {
        alert('Anda BENAR \nAnda memasukan angka yang tepat yaitu ' + compt);
    } else {
        alert('GAME OVER\nAngka yang dicari adalah ' + compt);
    }
    tanya = confirm('Anda mau main lagi ?')
}
alert('Terima Kasih telah bermain.');
// Tebak Angka //