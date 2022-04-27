var item = prompt('Masukkan nama makanan atau minuman : \n (Contoh: Nasi, Daging, Susu, Hamburger, Softdrink )');

switch (item) {
    case 'Nasi':
    case 'Daging':
    case 'Susu':
        alert('Makanan / minuman SEHAT!');
        break;
    case 'Hamburger':
    case 'Softdrink':
        alert('Makanan / minuman TIDAK SEHAT!');
        break;
    default:
        alert('Makanan / minuman yang anda masukan salah!');
        break;
}