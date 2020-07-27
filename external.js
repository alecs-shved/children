document.getElementById('id121222').style.display = "none";
function startRecognizer() {
    var tecct = "";
    if ('webkitSpeechRecognition' in window) {
        var recognition = new webkitSpeechRecognition();
        recognition.lang = 'ru';

        recognition.onresult = function (event) {
            var result = event.results[event.resultIndex];
            // console.clear();
            // console.log(result[0].transcript);
            tecct = result[0].transcript;
            document.getElementById('id121222').value = tecct;
        };

        recognition.onend = function () {

            var pr = worldchit;
            document.getElementById('id121222').style.display = "inline-block";
            document.getElementById('myImg1').style.display = "inline-block";
            if (pr == "БЫК") {
                document.getElementById('myImg1').src = "image1/bik.jpeg";
            }
            if (pr == "СЫР") {
                document.getElementById('myImg1').src = "image1/chees.jpeg";
            }
            if (pr == "ДОМ") {
                document.getElementById('myImg1').src = "image1/dom.jpeg";
            }
            if (pr == "ЕЖ") {
                document.getElementById('myImg1').src = "image1/ejik.jpeg";
            }
            if (pr == "ЖУК") {
                document.getElementById('myImg1').src = "image1/juk.jpeg";
            }
            if (pr == "КИТ") {
                document.getElementById('myImg1').src = "image1/kit.jpeg";
            }
            if (pr == "КОТ") {
                document.getElementById('myImg1').src = "image1/kot.jpeg";
            }
            if (pr == "ЛУК") {
                document.getElementById('myImg1').src = "image1/luk.jpeg";
            }
            if (pr == "РАК") {
                document.getElementById('myImg1').src = "image1/rak.jpeg";
            }
            if (pr == "ЮЛА") {
                document.getElementById('myImg1').src = "image1/ula.jpeg";
            }
            console.log('Распознавание завершилось.', pr);
        };

        recognition.start();


    } else 
        console.log('webkitSpeechRecognition не поддерживается :(')


    


};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
};

function alfavv() {
    location.href = "indexalfav.html";
}
function pishem() {
    location.href = "index.html";
}
function slogi() {
    location.href = "indexslogi.html";
}

function schit() {
    location.href = "indexschit.html";
}
var wava0 = [
        "sound0/gora.wav",
        "sound0/kasha.wav",
        "sound0/mama.wav",
        "sound0/masha.wav",
        "sound0/mir.wav",
        "sound0/nos.wav",
        "sound0/papa.wav",
        "sound0/popa.wav",
        "sound0/rot.wav",
        "sound0/sok.wav"
    ],

    wava1 = [
        "sound1/bik.wav",
        "sound1/chees.wav",
        "sound1/dom.wav",
        "sound1/ejik.wav",
        "sound1/juk.wav",
        "sound1/kit.wav",
        "sound1/kot.wav",
        "sound1/luk.wav",
        "sound1/rak.wav",
        "sound1/ula.wav"
    ],
    wava2 = [
        "sound2/chasi.wav",
        "sound2/chuka.wav",
        "sound2/lisa.wav",
        "sound2/morj.wav",
        "sound2/pauk.wav",
        "sound2/slon.wav",
        "sound2/sova.wav",
        "sound2/tort.wav",
        "sound2/yaico.wav",
        "sound2/ytka.wav"
    ],
    wava3 = [
        "sound3/belka.wav",
        "sound3/doctor.wav",
        "sound3/fixk.wav",
        "sound3/induk.wav",
        "sound3/mishka.wav",
        "sound3/pavlin.wav",
        "sound3/petuh.wav",
        "sound3/simka.wav",
        "sound3/sobaka.wav",
        "sound3/zebra.wav"
    ],
    wavm = wava1;
var imagchit0 = [
        "image0/gora.jpeg",
        "image0/kasha.jpeg",
        "image0/mama.jpeg",
        "image0/masha.jpeg",
        "image0/mir.jpeg",
        "image0/nos.jpeg",
        "image0/papa.jpeg",
        "image0/popa.jpeg",
        "image0/rot.jpeg",
        "image0/sok.jpeg"
    ],
    imagchit1 = [
        "image1/bik.jpeg",
        "image1/chees.jpeg",
        "image1/dom.jpeg",
        "image1/ejik.jpeg",
        "image1/juk.jpeg",
        "image1/kit.jpeg",
        "image1/kot.jpeg",
        "image1/luk.jpeg",
        "image1/rak.jpeg",
        "image1/ula.jpeg"
    ],
    imagchit2 = [
        "image2/chasi.jpeg",
        "image2/chuka.jpeg",
        "image2/lisa.jpeg",
        "image2/morj.jpeg",
        "image2/pauk.jpeg",
        "image2/slon.jpeg",
        "image2/sova.jpeg",
        "image2/tort.jpeg",
        "image2/yaico.jpeg",
        "image2/ytka.jpeg"
    ],
    imagchit3 = [
        "image3/belka.jpeg",
        "image3/doctor.jpeg",
        "image3/fixk.jpeg",
        "image3/induk.jpeg",
        "image3/mishka.jpeg",
        "image3/pavlin.jpeg",
        "image3/petuh.jpeg",
        "image3/simka.png",
        "image3/sobaka.jpeg",
        "image3/zebra.jpeg"
    ],
    imamchit = imagchit1;

var worldchit0 = [
        "ГОРА",
        "КАША",
        "МАМА",
        "МАША",
        "МИР",
        "НОС",
        "ПАПА",
        "ПОПА",
        "РОТ",
        "СОК"
    ],
    worldchit1 = [
        "БЫК",
        "СЫР",
        "ДОМ",
        "ЁЖ",
        "ЖУК",
        "КИТ",
        "КОТ",
        "ЛУК",
        "РАК",
        "ЮЛА"
    ],
    worldchit2 = [
        "ЧАСЫ",
        "ЩУКА",
        "ЛИСА",
        "МОРЖ",
        "ПАУК",
        "СЛОН",
        "СОВА",
        "ТОРТ",
        "ЯЙЦО",
        "УТКА"
    ],
    worldchit3 = [
        "БЕЛКА",
        "ДОКТОР",
        "ФИКСИК",
        "ИНДЮК",
        "МИШКА",
        "ПАВЛИН",
        "ПЕТУХ",
        "СИМКА",
        "СОБАКА",
        "ЗЕБРА"
    ],
    wormchit = worldchit1,
    worldchit = wormchit[0];

document.getElementById('bbchit1').style.background = "red";
document.getElementById('myImg1').style.display = "none";

var fgonchit = function (funn) {
    return wormchit[funn]
};

function ddd3() {
    document.getElementById('myImg1').style.display = "none";
    document.getElementById('worldchitt').innerText = fgonchit(getRandomInt(0, 10));
    clx();
    worldchit = document.getElementById('worldchitt').innerText;
    fun1();
    document.getElementById('id121222').style.display = "none";
    startRecognizer();
};


var x = [];
x[0] = document.getElementById("buchit1");
x[1] = document.getElementById("buchit2");
x[2] = document.getElementById("buchit3");
x[3] = document.getElementById("buchit4");
x[4] = document.getElementById("buchit5");
x[5] = document.getElementById("buchit6");
x[6] = document.getElementById("buchit7");
x[7] = document.getElementById("buchit8");

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


var smm5 = [];
smm5[0] = document.getElementById("smchit11");
smm5[1] = document.getElementById("smchit12");
smm5[2] = document.getElementById("smchit13");
var smm2 = [];
smm2[0] = document.getElementById("smchit21");
smm2[1] = document.getElementById("smchit22");
smm2[2] = document.getElementById("smchit23");

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

var clx = function () {
    smm5[0].style.display = "none";
    smm5[1].style.display = "none";
    smm5[2].style.display = "none";
    smm2[0].style.display = "none";
    smm2[1].style.display = "none";
    smm2[2].style.display = "none";
    for (let i = 0; i < 8; ++ i) {
        x[i].style.display = "none";
        x[i].innerText = ".";
    }
};

clx();
var fun1 = function () {
    let der = worldchit;
    fun2();
    for (let i = 0; i < der.length; ++ i) {
        x[i].innerText = der[i].toLowerCase();
    }
};

function chit() {
    location.href = "indexchit.html";
    document.getElementById('worldchitt').innerText = fgonchit(getRandomInt(0, 10));
}
function myher110(par1, par2, ii) {
    smm5[0].style.display = "none";
    smm5[1].style.display = "none";
    smm5[2].style.display = "none";
    smm2[0].style.display = "none";
    smm2[1].style.display = "none";
    smm2[2].style.display = "none";
    document.getElementById('myImg1').style.display = "inline-block";
    document.getElementById('myImg1').src = par1;

    // if (par2 == worldchit) {
    // fun35(); document.getElementById('kk').src = "sound/oc5.wav";
    // document.getElementById('kk').load();
    // document.getElementById('kk').play(); document.getElementById('worldchitt').innerText = "Молодец, умничка, так держать!"
    // }
    // else {
    // fun32(); document.getElementById('kk').src = "sound/oc2.wav";
    // document.getElementById('kk').load();
    // document.getElementById('kk').play(); document.getElementById('worldchitt').innerText = "Ой, ой, ой! Надо ещё подумать!"
    // };
    // startRecognizer();
}

function levelchit1() {
    document.getElementById('myImg1').style.display = "none";
    document.getElementById('bbchit0').style.background = "#4CAF50";
    document.getElementById('bbchit1').style.background = "red";
    document.getElementById('bbchit2').style.background = "#4CAF50";
    document.getElementById('bbchit3').style.background = "#4CAF50";
    clx();
    imamchit = imagchit1;
    wormchit = worldchit1;
    worldchit = worldchit1[0];
    fun1();
    document.getElementById('worldchitt').innerText = worldchit;
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
    document.getElementById('myImg1').style.display = "none";
    document.getElementById('bbchit0').style.background = "red";
    document.getElementById('bbchit1').style.background = "#4CAF50";
    document.getElementById('bbchit2').style.background = "#4CAF50";
    document.getElementById('bbchit3').style.background = "#4CAF50";
    clx();
    imamchit = imagchit0;
    wormchit = worldchit0;
    worldchit = worldchit0[0];
    fun1();
    document.getElementById('worldchitt').innerText = worldchit;
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
    document.getElementById('myImg1').style.display = "none";
    document.getElementById('bbchit0').style.background = "#4CAF50";
    document.getElementById('bbchit1').style.background = "#4CAF50";
    document.getElementById('bbchit2').style.background = "red";
    document.getElementById('bbchit3').style.background = "#4CAF50";
    clx();
    imamchit = imagchit2;
    wormchit = worldchit2;
    worldchit = worldchit2[0];
    fun1();
    document.getElementById('worldchitt').innerText = worldchit;
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
    document.getElementById('myImg1').style.display = "none";
    document.getElementById('bbchit0').style.background = "#4CAF50";
    document.getElementById('bbchit1').style.background = "#4CAF50";
    document.getElementById('bbchit2').style.background = "#4CAF50";
    document.getElementById('bbchit3').style.background = "red";
    clx();
    imamchit = imagchit3;
    wormchit = worldchit3;
    worldchit = worldchit3[0];
    fun1();
    document.getElementById('worldchitt').innerText = worldchit;
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
            ++ i
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
            if (i < 3) {
                smm5[i].style.display = "inline-block"
            };
            document.getElementById('qqww').src = "sound/drip.ogg";
            document.getElementById('qqww').load();
            document.getElementById('qqww').play();
            ++ i
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
            if (i < 3) {
                smm2[i].style.display = "inline-block"
            };
            document.getElementById('qqww').src = "sound/drip.ogg";
            document.getElementById('qqww').load();
            document.getElementById('qqww').play();
            ++ i
        }
    }
};

function alf() {
    var inn = setInterval(fram, 2000),
        i = 0;

    function fram() {
        if (i == alfavit.length) {
            clearInterval(add);
        } else {
            document.getElementById('ppp').src = "alfav/" + alfavit[i];
            document.getElementById('ppp').load();
            document.getElementById('ppp').play();
            ++ i
        }
    };
}
// i am stamp strong and cat&&&&&
