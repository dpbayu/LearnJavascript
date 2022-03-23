var item = prompt('Masukkan nama makanan atau minuman : \n (Contoh: nasi, daging, susu, hamburger, softdrink )');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('Makanan / minuman SEHAT!');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('Makanan / minuman TIDAK SEHAT!');
        break;
    default:
        alert('Makanan / minuman yang anda masukan salah!');
        break;
}