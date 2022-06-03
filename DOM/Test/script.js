const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.addEventListener('click', function () {
    // document.body.style.backgroundColor='darkblue';
    // document.body.style.color='white';
    document.body.classList.toggle('darkblue');
});

const tWarnaRandom = document.createElement('button');
const teksTombol = document.createTextNode('Warna Random');
tWarnaRandom.appendChild(teksTombol);
tWarnaRandom.setAttribute('type', 'button');
tUbahWarna.after(tWarnaRandom);

tWarnaRandom.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1)
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});