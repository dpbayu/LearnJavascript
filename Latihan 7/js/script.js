// Tentukan pilihan player
var p = prompt('Pilih : Gajah, Manusia, Semut');
// Tentukan pilihan computer
var comp = Math.random();
if (comp > 0.34) {
    comp = 'Gajah';
} else if (comp >= 0.34 && comp < 0.67) {
    comp = 'Manusia';
} else {
    comp = 'Semut';
}
// Buat rules permainan
var hasil = '';
if (p == comp) {
    hasil = 'SERI';
} else if (p == 'Gajah') {
    hasil = (comp == 'Manusia') ? 'MENANG!' : 'KALAH!';
} else if (p == 'Manusia') {
    hasil = (comp = 'Gajah') ? 'KALAH!' : 'MENANG!';
} else if (p == 'Semut') {
    hasil(comp = 'Manusia') ? 'KALAH!' : 'MENANG!';
} else {
    hasil = 'Anda memasukkan pilihan yang salah!!';
}
// Tentukan hasil
alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\n Maka hasilnya : Kamu ' + hasil);