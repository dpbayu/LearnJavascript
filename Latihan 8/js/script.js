function JmlVolumeKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;
    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;
    return total
}
console.log(JmlVolumeKubus(50, 45));
console.log(JmlVolumeKubus(45, 23));