// Event P2
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

function ubahWarnaP2() {
    p2.style.backgroundColor = 'green';
    p2.style.color = 'white';
    p2.style.fontWeight = '800';
}

// Event P3
const p3 = document.querySelector('.p3');
// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
//     p3.style.color = 'white';
// }
p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = 'darkblue';
    p3.style.color = 'white'
})
p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'white';
    p3.style.color = 'black';
})

// Event P4
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item Baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});