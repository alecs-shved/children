//let ff = "shved";
//console.log(ff);

//function getRandomInt(min, max) {
//  min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
//}
//console.log(getRandomInt(1, 100));
function alfavv() {
    location.href = "indexalfav.html";
}
function pishem() {
    location.href = "index.html";
}
function slogi() {
    location.href = "indexslogi.html";
}
function chit() {
    location.href = "indexchit.html";
}
function schit() {
    location.href = "indexschit.html";
}

var imagchit0 = ["image0/gora.jpeg", "image0/kasha.jpeg", "image0/mama.jpeg", "image0/masha.jpeg", "image0/mir.jpeg", "image0/nos.jpeg", "image0/papa.jpeg",
    "image0/popa.jpeg", "image0/rot.jpeg", "image0/sok.jpeg"
],
    imagchit1 = ["image1/bik.jpeg", "image1/chees.jpeg", "image1/dom.jpeg", "image1/ejik.jpeg", "image1/juk.jpeg", "image1/kit.jpeg", "image1/kot.jpeg",
        "image1/luk.jpeg", "image1/rak.jpeg", "image1/ula.jpeg"
    ],
    imagchit2 = ["image2/chasi.jpeg", "image2/chuka.jpeg", "image2/lisa.jpeg", "image2/morj.jpeg", "image2/pauk.jpeg", "image2/slon.jpeg", "image2/sova.jpeg",
        "image2/tort.jpeg", "image2/yaico.jpeg", "image2/ytka.jpeg"
    ],
    imagchit3 = ["image3/belka.jpeg", "image3/doctor.jpeg", "image3/fixk.jpeg", "image3/induk.jpeg", "image3/mishka.jpeg", "image3/pavlin.jpeg", "image3/petuh.jpeg",
        "image3/simka.png", "image3/sobaka.jpeg", "image3/zebra.jpeg"
    ],
    imamchit = imagchit1;

var worldchit0 = ["ГОРА", "КАША", "МАМА", "МАША", "МИР", "НОС", "ПАПА", "ПОПА", "РОТ", "СОК"],
    worldchit1 = ["БЫК", "СЫР", "ДОМ", "ЁЖ", "ЖУК", "КИТ", "КОТ", "ЛУК", "РАК", "ЮЛА"],
    worldchit2 = ["ЧАСЫ", "ЩУКА", "ЛИСА", "МОРЖ", "ПАУК", "СЛОН", "СОВА", "ТОРТ", "ЯЙЦО", "УТКА"],
    worldchit3 = ["БЕЛКА", "ДОКТОР", "ФИКСИК", "ИНДЮК", "МИШКА", "ПАВЛИН", "ПЕТУХ", "СИМКА", "СОБАКА", "ЗЕБРА"],
    wormchit = worldchit1,
    worldchit = wormchit[0];

var x = [];
x[0] = document.getElementById("buchit1");
x[1] = document.getElementById("buchit2");
x[2] = document.getElementById("buchit3");
x[3] = document.getElementById("buchit4");
x[4] = document.getElementById("buchit5");
x[5] = document.getElementById("buchit6");
x[6] = document.getElementById("buchit7");
x[7] = document.getElementById("buchit8");

//document.getElementById('myImg1').src = imag1[0];
document.getElementById('myImgchit2').src = imagchit1[0];
document.getElementById('myImgchit3').src = imagchit1[1];
document.getElementById('myImgchit4').src = imagchit1[2];
document.getElementById('myImgchit5').src = imagchit1[3];
document.getElementById('myImgchit6').src = imagchit1[4];
document.getElementById('myImgchit7').src = imagchit1[5];
document.getElementById('myImgchit8').src = imagchit1[6];
document.getElementById('myImgchit9').src = imagchit1[7];
document.getElementById('myImgchit10').src = imagchit1[8];
document.getElementById('myImgchit11').src = imagchit1[9];

var clx = function () {
    for (let i = 0; i < 8; ++i) {
        x[i].style.display = "none";
        x[i].innerText = ".";
    }
};

clx();

var smchit11 = document.getElementById("smchit11");
var smchit12 = document.getElementById("smchit12");
var smchit13 = document.getElementById("smchit13");

var smchit21 = document.getElementById("smchit21");
var smchit22 = document.getElementById("smchit22");
var smchit23 = document.getElementById("smchit23");

smchit11.style.display = "none";
smchit12.style.display = "none";
smchit13.style.display = "none";
smchit21.style.display = "none";
smchit22.style.display = "none";
smchit23.style.display = "none";


var fun = function (par) {
    let ss = "",
        tt = "";
    let sd = getRandomInt(1, 34);
    let mm = [];
    ss = ss + alfa[sd];
    ss = ss + par[0];
    sd = getRandomInt(1, 34);
    ss = ss + alfa[sd];
    if (typeof (par[1]) == "undefined") { } else { ss = ss + par[1]; }
    if (typeof (par[2]) == "undefined") { } else { ss = ss + par[2]; }
    if (typeof (par[3]) == "undefined") { } else { ss = ss + par[3]; }
    if (typeof (par[4]) == "undefined") { } else { ss = ss + par[4]; }
    if (typeof (par[5]) == "undefined") { } else { ss = ss + par[5]; }
    if (typeof (par[6]) == "undefined") { } else { ss = ss + par[6]; }
    if (typeof (par[7]) == "undefined") { } else { ss = ss + par[7]; }
    for (let i = 0; i < ss.length; ++i) { mm[i] = ss[i] };
    mm.sort();
    for (let i = 0; i < mm.length; ++i) { tt = tt + mm[i] };
    // alert(tt);
    return tt;
};

var fun1 = function () {
    let der = fun(worldchit);
    for (let i = 0; i < der.length; ++i) {
        y[i].style.display = "inline-block";
    }
    for (let i = 0; i < der.length; ++i) {
        y[i].innerText = der[i];
    }
    fun2();
};
//function myher111(par1, par2, ii) {
//clx();
//cly();
// per = ii;
// document.getElementById('myImgchit1').src = par1;
// wa = wavm[ii];
// world = worm[ii];
// document.getElementById('audio1').src = par2;
// clx();
// cly();
// fun1();
//document.getElementById('audio1').load();
// document.getElementById('audio1').play();
//}

function ddd3() {

};

function levelchit1() {
    document.getElementById('bbchit0').style.background = "#4CAF50";
    document.getElementById('bbchit1').style.background = "red";
    document.getElementById('bbchit2').style.background = "#4CAF50";
    document.getElementById('bbchit3').style.background = "#4CAF50";
    clx();
    //  worm = world1;
    //  world = worm[0];
    // imam = imag1;
    // wavm = wava1;
    //  per = 0;
    // cly();
    // fun1();
    //  document.getElementById('myImg1').src = imag1[0];
    document.getElementById('myImgchit2').src = imagchit1[0];
    document.getElementById('myImgchit3').src = imagchit1[1];
    document.getElementById('myImgchit4').src = imagchit1[2];
    document.getElementById('myImgchit5').src = imagchit1[3];
    document.getElementById('myImgchit6').src = imagchit1[4];
    document.getElementById('myImgchit7').src = imagchit1[5];
    document.getElementById('myImgchit8').src = imagchit1[6];
    document.getElementById('myImgchit9').src = imagchit1[7];
    document.getElementById('myImgchit10').src = imagchit1[8];
    document.getElementById('myImgchit11').src = imagchit1[9];
};
function levelchit0() {
    document.getElementById('bbchit0').style.background = "red";
    document.getElementById('bbchit1').style.background = "#4CAF50";
    document.getElementById('bbchit2').style.background = "#4CAF50";
    document.getElementById('bbchit3').style.background = "#4CAF50";
    clx();
    //  worm = world1;
    //  world = worm[0];
    // imam = imag1;
    // wavm = wava1;
    //  per = 0;
    // cly();
    // fun1();
    //  document.getElementById('myImg1').src = imag1[0];
    document.getElementById('myImgchit2').src = imagchit0[0];
    document.getElementById('myImgchit3').src = imagchit0[1];
    document.getElementById('myImgchit4').src = imagchit0[2];
    document.getElementById('myImgchit5').src = imagchit0[3];
    document.getElementById('myImgchit6').src = imagchit0[4];
    document.getElementById('myImgchit7').src = imagchit0[5];
    document.getElementById('myImgchit8').src = imagchit0[6];
    document.getElementById('myImgchit9').src = imagchit0[7];
    document.getElementById('myImgchit10').src = imagchit0[8];
    document.getElementById('myImgchit11').src = imagchit0[9];
};
function levelchit2() {
    document.getElementById('bbchit0').style.background = "#4CAF50";
    document.getElementById('bbchit1').style.background = "#4CAF50";
    document.getElementById('bbchit2').style.background = "red";
    document.getElementById('bbchit3').style.background = "#4CAF50";
    clx();
    //  worm = world1;
    //  world = worm[0];
    // imam = imag1;
    // wavm = wava1;
    //  per = 0;
    // cly();
    // fun1();
    //  document.getElementById('myImg1').src = imag1[0];
    document.getElementById('myImgchit2').src = imagchit2[0];
    document.getElementById('myImgchit3').src = imagchit2[1];
    document.getElementById('myImgchit4').src = imagchit2[2];
    document.getElementById('myImgchit5').src = imagchit2[3];
    document.getElementById('myImgchit6').src = imagchit2[4];
    document.getElementById('myImgchit7').src = imagchit2[5];
    document.getElementById('myImgchit8').src = imagchit2[6];
    document.getElementById('myImgchit9').src = imagchit2[7];
    document.getElementById('myImgchit10').src = imagchit2[8];
    document.getElementById('myImgchit11').src = imagchit2[9];
};
function levelchit3() {
    document.getElementById('bbchit0').style.background = "#4CAF50";
    document.getElementById('bbchit1').style.background = "#4CAF50";
    document.getElementById('bbchit2').style.background = "#4CAF50";
    document.getElementById('bbchit3').style.background = "red";
    clx();
    //  worm = world1;
    //  world = worm[0];
    // imam = imag1;
    // wavm = wava1;
    //  per = 0;
    // cly();
    // fun1();
    //  document.getElementById('myImg1').src = imag1[0];
    document.getElementById('myImgchit2').src = imagchit3[0];
    document.getElementById('myImgchit3').src = imagchit3[1];
    document.getElementById('myImgchit4').src = imagchit3[2];
    document.getElementById('myImgchit5').src = imagchit3[3];
    document.getElementById('myImgchit6').src = imagchit3[4];
    document.getElementById('myImgchit7').src = imagchit3[5];
    document.getElementById('myImgchit8').src = imagchit3[6];
    document.getElementById('myImgchit9').src = imagchit3[7];
    document.getElementById('myImgchit10').src = imagchit3[8];
    document.getElementById('myImgchit11').src = imagchit3[9];
};
var fun2 = function () {
    var inn = setInterval(fram, 300),
        i = 0,
        pid = worldchit.length;

    function fram() {
        if (i == pid) {
            clearInterval();
        } else {
            x[i].style.display = "inline-block";
            document.getElementById('qqww').src = "sound/drip.ogg";
            document.getElementById('qqww').load();
            document.getElementById('qqww').play();
            ++i
        }
    }
};
var fun35 = function () {
    var inn = setInterval(fram, 300),
        i = 0,
        pid = worldchit.length;

    function fram() {
        if (i == pid) {
            clearInterval();
        } else {
            if (i < 3) { smm5[i].style.display = "inline-block" };
            document.getElementById('qqww').src = "sound/drip.ogg";
            document.getElementById('qqww').load();
            document.getElementById('qqww').play();
            ++i
        }
    }
};
var fun32 = function () {
    var inn = setInterval(fram, 300),
        i = 0,
        pid = worldchit.length;

    function fram() {
        if (i == pid) {
            clearInterval();
        } else {
            if (i < 3) { smm2[i].style.display = "inline-block" };
            document.getElementById('qqww').src = "sound/drip.ogg";
            document.getElementById('qqww').load();
            document.getElementById('qqww').play();
            ++i
        }
    }
};

function alf() {
    var inn = setInterval(fram, 2000),
        i = 0;

    function fram() {
        if (i == alfavit.length) { clearInterval(add); } else {
            document.getElementById('ppp').src = "alfav/" + alfavit[i];
            document.getElementById('ppp').load();
            document.getElementById('ppp').play();
            ++i
        }
    };
}

//function alfi() {
 //   document.getElementById("myImg2").addEventListener("click", myher11);
//}