var jmlMobil = 20;
var noMobil = 1;
var mobilBeroperasi = 12;

while (noMobil <= mobilBeroperasi) {
    console.log('Mobil no. ' + noMobil + ' beroperasi dengan baik');
    noMobil++;
};

for (noMobil = mobilBeroperasi + 1; noMobil <= jmlMobil; noMobil++){
    console.log('Mobil no. '+ noMobil + ' sedang tidak beroperasi dengan baik');
    noMobil++;
};