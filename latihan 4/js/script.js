var jmlMobil = 20;
var mobilBeroperasi = 12;
var noMobil = 1;

// Version 1 //
// for (noMobil; noMobil <= jmlMobil; noMobil++) {
//     if (noMobil <= 12 && noMobil !== 7) {
//         console.log('Mobil no. ' + noMobil + ' beroperasi dengan baik')
//     } else if (noMobil === 18) {
//         console.log('Mobil no. ' + noMobil + ' sedang lembur')
//     } else if (noMobil === 20) {
//         console.log('Mobil no. ' + noMobil + ' sedang lembur')
//     } else if (noMobil === 7) {
//         console.log('Mobil no. ' + noMobil + ' sedang lembur')
//     } else {
//         console.log('Mobil no. ' + noMobil + ' sedang tidak beroperasi')
//     }
// }
// Version 1 //
// Version 2 //
for (noMobil; noMobil <= jmlMobil; noMobil++) {
    if (noMobil <= 12 && noMobil !== 7 && noMobil !== 3) {
        console.log('Mobil no. ' + noMobil + ' beroperasi dengan baik')
    } else if (noMobil === 18 || noMobil === 20 || noMobil === 7 || noMobil === 3) {
        console.log('Mobil no. ' + noMobil + ' sedang lembur')
    } else {
        console.log('Mobil no. ' + noMobil + ' sedang tidak beroperasi')
    }
}
// Version 2 //