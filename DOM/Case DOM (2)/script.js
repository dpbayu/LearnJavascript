function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG';
}

function putar() {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100);
};

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        // Set Pilihan Player/Computer
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        putar();
        setTimeout(function () {
            // Ganti gambar sesuai pilihan komputer
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
            // Munculin hasil            
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);
    });
});

// // Pilihan Player Gajah
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     // Set Pilihan Player/Computer
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     // Ganti gambar sesuai pilihan komputer
//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', '/DOM/Case DOM (2)/img/' + pilihanComputer + '.png');
//     // Munculin hasil
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
//     // console.log('comp :' + pilihanComputer);
//     // console.log('player :' + pilihanPlayer);
//     // console.log('hasil : ' + hasil);
// });

// // Pilihan Player Orang
// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//     // Set Pilihan Player/Computer
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     // Ganti gambar sesuai pilihan komputer
//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', '/DOM/Case DOM (2)/img/' + pilihanComputer + '.png');
//     // Munculin hasil
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
//     // console.log('comp :' + pilihanComputer);
//     // console.log('player :' + pilihanPlayer);
//     // console.log('hasil : ' + hasil);
// });

// // Pilihan Player Semut
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//     // Set Pilihan Player/Computer
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     // Ganti gambar sesuai pilihan komputer
//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', '/DOM/Case DOM (2)/img/' + pilihanComputer + '.png');
//     // Munculin hasil
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
//     // console.log('comp :' + pilihanComputer);
//     // console.log('player :' + pilihanPlayer);
//     // console.log('hasil : ' + hasil);
// });