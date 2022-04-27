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
// Kesempatan Bermain
var attempt = 3;
// Intro
alert('Selamat Datang di Game Tebak Angka\nKamu akan diminta menebak angka 1 sampai 10\nKesempatan yang diberikan adalah sebanyak ' + attempt + ' kali\nLETS GO!!!');
var tebak = true;
while (tebak) {
    // Kesempatan Bermain
    var kesempatan = attempt;
    // Menangkap Pilihan User
    var p = prompt('Kesempatan Pertama\nMasukkan angka 1 sampai 10');
    // Menangkap Pilihan Komputer
    var comp = Math.floor(Math.random() * 10) + 1;
    // Menampilkan Hasil
    for (kesempatan; kesempatan > 1; kesempatan--) {
        if (p == comp) {
            ''
        } else if (p < comp && p > 0) {
            var p = prompt('Tebakan kamu kurang besar\nKesempatan ' + [kesempatan - 1] + ' kali lagi');
        } else if (p > comp && p <= 10) {
            var p = prompt('Tebakan kamu kurang kecil\nkesempatan = ' + [kesempatan - 1] + ' kali lagi');
        } else {
            var p = prompt('Harap masukkan angka 1 sampai 10\nkesempatan = ' + [kesempatan - 1] + ' kali lagi');
        }
    }
    // Hasil Akhir
    if (p == comp) {
        alert('HEBAT!!!\nTebakan kamu benar\nAngka yang dicari adalah ' + comp);
    } else {
        alert('GAME OVER\nAngka yang dicari adalah ' + comp);
    }
    var tebak = confirm('Ingin bermain lagi?');
}
alert('Terimakasih telah bermain');
// Game Tebak Angka //