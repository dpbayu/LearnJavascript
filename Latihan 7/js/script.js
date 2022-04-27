var tanya = true;
while (tanya) {
    // Tentukan pilihan player
    var p = prompt('Pilih : GAJAH, MANUSIA, SEMUT');
    // Tentukan pilihan computer
    var comp = Math.random();
    if (comp > 0.34) {
        comp = 'GAJAH';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'MANUSIA';
    } else {
        comp = 'SEMUT';
    }
    // Buat rules permainan
    var hasil = '';
    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'GAJAH') {
        hasil = (comp == 'MANUSIA') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'MANUSIA') {
        hasil = (comp = 'GAJAH') ? 'KALAH!' : 'MENANG!';
    } else if (p == 'SEMUT') {
        hasil(comp = 'MANUSIA') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Anda memasukkan pilihan yang salah!!';
    }
    // Tentukan hasil
    alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\n Maka hasilnya : Kamu ' + hasil);
    // Konfirmasi
    tanya = confirm('Mau main lagi?')
}
alert('Terima Kasih telah bermain.')