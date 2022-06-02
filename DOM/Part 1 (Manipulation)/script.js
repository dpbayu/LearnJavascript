// Buat element
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragarf Baru');
// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// Simpan paragraf yang sudah diisi ke sebuah section
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// Buat element untuk item baru
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);
// Masukan element ke tempat 
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);