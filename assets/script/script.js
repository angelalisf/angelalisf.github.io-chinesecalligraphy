var x1 = document.getElementById('tool1');
x1.style.display = "none";
document.getElementById('s1').onclick = function () {
    if (x1.style.display == "none") {
        x1.style.display = "block";
    } else {
        x1.style.display = "none";
    }
};

var x2 = document.getElementById('tool2');
x2.style.display = "none";
document.getElementById('s2').onclick = function () {
    if (x2.style.display == "none") {
        x2.style.display = "block";
    } else {
        x2.style.display = "none";
    }
}

var x3 = document.getElementById('tool3');
x3.style.display = "none";
document.getElementById('s3').onclick = function () {
    if (x3.style.display == "none") {
        x3.style.display = "block";
    } else {
        x3.style.display = "none";
    }
}

var images = ['yong1.png', 'yong2.png', 'yong3.png', 'yong4.png', 'yong5.png'];

var num = 0;
function rotate1() {
    while (num != images.length) {
        document.getElementById("rotator").src = 'assets/img/' + images[num];
        num++;
        setTimeout(rotate, 1);
    }
    num = 0;
    document.getElementById("rotator").src = 'assets/img/yong.png';
}
document.getElementById('rotator').onclick = rotate1;