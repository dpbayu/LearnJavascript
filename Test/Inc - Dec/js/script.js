// First
// let addBtn = document.querySelector('#add');
// let subBtn = document.querySelector('#sub');
// let qty = document.querySelector('#qtyBox');

// addBtn.addEventListener('click', () => {
//     qty.value = parseInt(qty.value) + 1;
// });
// subBtn.addEventListener('click', () => {
//     if (qty.value <= 0) {
//         qty.value = 0;
//     } else {
//         qty.value = parseInt(qty.value) - 1;
//     }
// });
// First

// Second
// function totalClick(click) {
//     const totalClicks = document.getElementById('totalClicks');
//     const sumvalue = parseInt(totalClicks.innerText) + click;
//     console.log(sumvalue + click);
//     totalClicks.innerText = sumvalue;
//     if (sumvalue < 0) {
//         totalClicks.innerText = 0;
//     }
// }
// function totalClick1(click) {
//     const totalClicks = document.getElementById('totalClicks1');
//     const sumvalue = parseInt(totalClicks.innerText) + click;
//     console.log(sumvalue + click);
//     totalClicks.innerText = sumvalue;
//     if (sumvalue < 0) {
//         totalClicks.innerText = 0;
//     }
// }
// Second

// Third
var incrementButton = document.getElementsByClassName('inc');
var decrementButton = document.getElementsByClassName('dec');
// Select Element
// console.log(incrementButton);
// console.log(decrementButton);
// INCREMENT
for (var i = 0; i < incrementButton.length; i++) {
    var button = incrementButton[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        // console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[2];
        // console.log(input)
        var inputValue = input.value;
        // console.log(inputValue)
        var newValue = parseInt(inputValue) + 1;
        // console.log(newValue)
        input.value = newValue;
    })
}
// DECREMENT
for (var i = 0; i < decrementButton.length; i++) {
    var button = decrementButton[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        // console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[2];
        // console.log(input)
        var inputValue = input.value;
        // console.log(inputValue)
        var newValue = parseInt(inputValue) - 1;
        // console.log(newValue)
        if (newValue >= 0) {
            input.value = newValue;
        } else {
            input.value = 0;
        }
    })
}
// Third