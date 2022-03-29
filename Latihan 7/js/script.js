// Tentukan pilihan player
var p = prompt('Pilih : gajah, manusia, semut');
// Tentukan pilihan computer
var comp = Math.random();
if (comp > 0.34) {
    comp = 'gajah';
} else if (comp >= 0.34 && comp < 0.67) {
    comp = 'manusia';
} else {
    comp = 'semut';
}
// Buat rules permainan
var hasil = '';
if (p == comp) {
    hasil = 'SERI';
} else if (p == 'gajah') {
    hasil = ( comp == 'manusia' ) ? 'MENANG!' : 'KALAH!';
} else if (p == 'manusia') {
    hasil = ( comp = 'gajah' ) ? 'KALAH!' : 'MENANG!';
} else if (p == 'semut') {
    hasil( comp = 'manusia' ) ? 'KALAH!' : 'MENANG!';
} else {
    hasil = 'Anda memasukkan pilihan yang salah!!';
}
// Tentukan hasil
alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\n Maka hasilnya : Kamu ' + hasil);