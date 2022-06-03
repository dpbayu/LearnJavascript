// Buat element (appendChild)
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragarf Baru');
// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// Simpan paragraf yang sudah diisi ke sebuah section
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// Buat element untuk item baru (insertBefore)
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
// Simpan tulisan
liBaru.appendChild(teksLiBaru);
// Masukan element ke tempat 
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

// Menghapus elemen
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// Mengganti elemen
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');
// Simpan tulisan
h2Baru.appendChild(teksH2Baru);
// Ganti elemen
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'lightyellow';