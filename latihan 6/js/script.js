// Bintang mengurut dari kecil ke besar //
var s = '';
var angka = '5';
for (var i = 1; i <= angka; i++) {
    for (var j = 0; j < i; j++) {
        s += "*";
    }
    s += '\n';
}
console.log(s);
// Bintang mengurut dari kecil ke besar //
// Bintang mengurut dari besar ke kecil //
var s = '';
var angka = '5';
for (var i = angka; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += "*";
    }
    s += '\n';
}
console.log(s);
// Bintang mengurut dari besar ke kecil //
// Bintang dari kecil ke besar & dari besar ke kecil //
var s = '';
var angka = '5';
for (var i = 1; i <= angka; i++) {
    for (var j = 0; j < i; j++) {
        s += "*";
    }
    s += '\n';
}
for (var i = angka; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += "*";
    }
    s += '\n';
}
console.log(s);
// Bintang dari kecil ke besar & dari besar ke kecil //
// Bintang muncul dari kanan //
var s = '';
var angka = '5';
for (var i = 1; i <= angka; i++) {
    for (var j = angka - 1; j >= i; j--) {
        s += ' ';
    }
    for (var k = 1; k <= i; k++) {
        s += "*";
    }
    s += '\n';
}
console.log(s);
// Bintang muncul dari kanan //
// Bintang muncul dari kanan mengurut dari terbesar hingga terkecil //
var s = '';
var angka = '5';
for (var i = 1; i <= angka; i++) {
    for (j = 1; j <= i - 1; j++) {
        s += " ";
    }
    for (k = 1; k <= angka - i + 1; k++) {
        s += "*";
    }
    s += '\n';
}
console.log(s);
// Bintang muncul dari kanan mengurut dari terbesar hingga terkecil //
// Bintang muncul dari kanan dan dari kecil ke besar & dari besar ke kecil //
var s = '';
var angka = '5';
for (var i = 1; i <= angka; i++) {
    for (var j = angka - 1; j >= i; j--) {
        s += ' ';
    }
    for (var k = 1; k <= i; k++) {
        s += "*";
    }
    s += '\n';
}
for (var i = 1; i <= angka; i++) {
    for (j = 1; j <= i - 1; j++) {
        s += " ";
    }
    for (k = 1; k <= angka - i + 1; k++) {
        s += "*";
    }
    s += '\n';
}
console.log(s);
// Bintang muncul dari kanan dan dari kecil ke besar & dari besar ke kecil //
// Segitiga sama kaki //
var s = '';
var angka = '5';
for (var i = 1; i <= angka; i++) {
    for (var j = 1; j <= angka - i; j++) {
        s += " ";
    }
    for (var k = 1; k <= i + (i - 1); k++) {
        s += "*";
    }
    s += '\n';
}
console.log(s);
// Segitiga sama kaki //
// Segita sama kaki terbalik //
var s = '';
var angka = '5';
for (var i = 1; i <= angka; i++) {
    for (var j = 1; j < i; j++) {
        s += " ";
    }
    for (var k = angka; k >= (2 * i - angka); k--) {
        s += "*"
    }
    s += '\n';
}
console.log(s);
// Segitiga sama kaki terbalik //
// Belah Ketupat //
var s = '';
var angka = '5';
for (var i = 1; i <= angka; i++) {
    for (var j = 1; j <= angka - i; j++) {
        s += " ";
    }
    for (var k = 1; k <= i + (i - 1); k++) {
        s += "*";
    }
    s += '\n';
}
for (var i = 1; i <= angka; i++) {
    for (var j = 1; j < i; j++) {
        s += " ";
    }
    for (var k = angka; k >= (2 * i - angka); k--) {
        s += "*"
    }
    s += '\n';
}
console.log(s);
// Belah Ketupat //