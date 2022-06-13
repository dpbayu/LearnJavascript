// Event Handling (DOM Selection & Manipulation)
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');
// close.addEventListener('click', function () {
//     card.style.display = 'none';
// });

// const card = document.querySelectorAll('.card');
// const close = document.querySelectorAll('.close');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function () {
//         card[i].style.display = 'none';
//     });
// }

// DOM Traversal (Class close adalah Node List)
// const close = document.querySelectorAll('.close');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

const close = document.querySelectorAll('.close');
close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
    })
});

// DOM Traversal Method:
// parentNode(node)
// parentElement(element)
// nextSibling(node)
// nextElementSibling(element)
// previousSibling(node)
// previousElementSibling(element)

const nama = document.querySelector('.nama');
console.log(nama.nextElementSibling);