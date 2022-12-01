// 分數宣告
var fivehikari = 0;
var fourhikari = 0;
var rainfourhikari = 0;
var threehikari = 0;
var hanawhite = 0;
var moonwhite = 0;
var cho = 0;
var redshort = 0;
var blueshort = 0;
var neta = 0;
var short = 0;
var kasu = 0;




var arr = [];
var json = {};
while (arr.length < 20) {
    var k = Math.round(Math.random() * 47 + 1);
    if (!json[k]) {
        json[k] = true;
        arr.push(k);
    }
}
console.log(arr)

//圖檔放入

document.getElementById("cardPlace1").src = "img/" + arr[0] + ".png";
document.getElementById("cardPlace2").src = "img/" + arr[1] + ".png";
document.getElementById("cardPlace3").src = "img/" + arr[2] + ".png";
document.getElementById("cardPlace4").src = "img/" + arr[3] + ".png";
document.getElementById("cardPlace5").src = "img/" + arr[4] + ".png";
document.getElementById("cardPlace6").src = "img/" + arr[5] + ".png";
document.getElementById("cardPlace7").src = "img/" + arr[6] + ".png";
document.getElementById("cardPlace8").src = "img/" + arr[7] + ".png";
document.getElementById("cardPlace9").src = "img/" + arr[8] + ".png";
document.getElementById("cardPlace10").src = "img/" + arr[9] + ".png";
document.getElementById("cardPlace11").src = "img/" + arr[10] + ".png";
document.getElementById("cardPlace12").src = "img/" + arr[11] + ".png";
document.getElementById("cardPlace13").src = "img/" + arr[12] + ".png";
document.getElementById("cardPlace14").src = "img/" + arr[13] + ".png";
document.getElementById("cardPlace15").src = "img/" + arr[14] + ".png";
document.getElementById("cardPlace16").src = "img/" + arr[15] + ".png";
document.getElementById("cardPlace17").src = "img/" + arr[16] + ".png";
document.getElementById("cardPlace18").src = "img/" + arr[17] + ".png";
document.getElementById("cardPlace19").src = "img/" + arr[18] + ".png";
document.getElementById("cardPlace20").src = "img/" + arr[19] + ".png";

//分數計算
if (arr.indexOf(1) != -1) {
    fivehikari = fivehikari + 1;
    fourhikari = fourhikari + 1
    rainfourhikari = rainfourhikari + 1;
    threehikari = threehikari + 1;
}
if (arr.indexOf(2) != -1) {
    redshort = redshort + 1;
    short = short + 1;
}
if (arr.indexOf(3) != -1) {
    kasu = kasu + 1;
}
if (arr.indexOf(4) != -1) {
    kasu = kasu + 1;
}
if (arr.indexOf(5) != -1) {
    neta = neta + 1;
}
if (arr.indexOf(6) != -1) {
    redshort = redshort + 1;
    short = short + 1;
}
if (arr.indexOf(7) != -1) {
    kasu = kasu + 1
}
if (arr.indexOf(8) != -1) {
    kasu = kasu + 1
}
if (arr.indexOf(9) != -1) {
    fivehikari = fivehikari + 1;
    fourhikari = fourhikari + 1;
    rainfourhikari = rainfourhikari + 1;
    threehikari = threehikari + 1;
    hanawhite = hanawhite + 1;
}
if (arr.indexOf(10) != -1) {
    redshort = redshort + 1;
    short = short + 1;
}
if (arr.indexOf(11) != -1) {
    kasu = kasu + 1
}
if (arr.indexOf(12) != -1) {
    kasu = kasu + 1
}
if (arr.indexOf(13) != -1) {
    neta = neta + 1;
}
if (arr.indexOf(14) != -1) {
    short = short + 1;
}
if (arr.indexOf(15) != -1) {
    kasu = kasu + 1
}
if (arr.indexOf(16) != -1) {
    kasu = kasu + 1
}
if (arr.indexOf(17) != -1) {
    neta = neta + 1;
}
if (arr.indexOf(18) != -1) {
    short = short + 1;
}
if (arr.indexOf(19) != -1) {
    kasu = kasu + 1
}
if (arr.indexOf(20) != -1) {
    kasu = kasu + 1
}
if (arr.indexOf(21) != -1) {
    cho = cho + 1;
    neta = neta + 1;
}
if (arr.indexOf(22) != -1) {
    blueshort = blueshort + 1;
    short = short + 1;
}
if (arr.indexOf(23) != -1) {
    kasu = kasu + 1
}
if (arr.indexOf(24) != -1) {
    kasu = kasu + 1
}
if (arr.indexOf(25) != -1) {
    cho = cho + 1;
    neta = neta + 1;
}
if (arr.indexOf(26) != -1) {
    short = short + 1;
}
if (arr.indexOf(27) != -1) {
    kasu = kasu + 1
}
if (arr.indexOf(28) != -1) {
    kasu = kasu + 1
}
if (arr.indexOf(29) != -1) {
    fivehikari = fivehikari + 1;
    fourhikari = fourhikari + 1;
    rainfourhikari = rainfourhikari + 1;
    threehikari = threehikari + 1;
    moonwhite = moonwhite + 1;
}
if (arr.indexOf(30) != -1) {
    neta = neta + 1;
}
if (arr.indexOf(31) != -1) {
    kasu = kasu + 1
}
if (arr.indexOf(32) != -1) {
    kasu = kasu + 1
}
if (arr.indexOf(33) != -1) {
    hanawhite = hanawhite + 1;
    moonwhite = moonwhite + 1;
    neta = neta + 1;
}
if (arr.indexOf(34) != -1) {
    blueshort = blueshort + 1;
    short = short + 1;
}
if (arr.indexOf(35) != -1) {
    kasu = kasu + 1;
}
if (arr.indexOf(36) != -1) {
    kasu = kasu + 1;
}
if (arr.indexOf(37) != -1) {
    cho = cho + 1;
    neta = neta + 1;
}
if (arr.indexOf(38) != -1) {
    short = short + 1;
    blueshort = blueshort + 1;
}
if (arr.indexOf(39) != -1) {
    kasu = kasu + 1;

}
if (arr.indexOf(40) != -1) {
    kasu = kasu + 1;

}
if (arr.indexOf(41) != -1) {
    fivehikari = fivehikari + 1;
    rainfourhikari = rainfourhikari + 10;
}
if (arr.indexOf(42) != -1) {
    neta = neta + 1;
}
if (arr.indexOf(43) != -1) {
    short = short + 1;
}
if (arr.indexOf(44) != -1) {
    kasu = kasu + 1;
}
if (arr.indexOf(45) != -1) {
    fivehikari = fivehikari + 1;
    fourhikari = fourhikari + 1;
    rainfourhikari = rainfourhikari + 1;
    threehikari = threehikari + 1;
}
if (arr.indexOf(46) != -1) {
    kasu = kasu + 1;
}
if (arr.indexOf(47) != -1) {
    kasu = kasu + 1;
}
if (arr.indexOf(48) != -1) {
    kasu = kasu + 1;
}



// 役
var finalfivehikari = 0;
var finalfourhikari = 0;
var finalrainfourhikari = 0;
var finalthreehikari = 0;
var finalhanawhite = 0;
var finalmoonwhite = 0;
var finalcho = 0;
var finalredshort = 0;
var finalblueshort = 0;
var finalneta = 0;
var finalshort = 0;
var finalkasu = 0;



if (fivehikari == 5) {
    finalfivehikari = finalfivehikari + 10;

}
if (fourhikari == 4) {
    finalfourhikari = finalfourhikari + 8;

}
if (rainfourhikari >= 13) {
    finalrainfourhikari = finalrainfourhikari + 7;

}
if (threehikari == 3) {
    finalthreehikari = finalthreehikari + 5;

}
if (hanawhite == 2) {
    finalhanawhite = finalhanawhite + 5;

}
if (moonwhite == 2) {
    finalmoonwhite = finalmoonwhite + 5;

}
if (cho == 3) {
    finalcho = finalcho + 5;

}
if (redshort == 3) {
    finalredshort = finalredshort + 5;

}
if (blueshort == 3) {
    finalblueshort = finalblueshort + 5;

}
if (neta >= 5) {
    finalneta = neta - 4;

}

if (short >= 5) {
    finalshort = short - 4;


}
if (kasu >= 10) {
    finalkasu = kasu - 9;

}


// 役種重疊
if (finalfivehikari * finalfourhikari > 0) {
    finalfourhikari = 0;
    document.getElementById("fourhikariscore").innerText = "";
}

if (finalfivehikari * finalrainfourhikari > 0) {
    finalrainfourhikari = 0;
    document.getElementById("rainfourhikariscore").innerText = "";
}
if (finalfivehikari * finalthreehikari > 0) {
    finalthreehikari = 0;
    document.getElementById("threehikariscore").innerText = "";
}

if (finalfourhikari * finalthreehikari > 0) {
    finalthreehikari = 0;
    document.getElementById("threehikariscore").innerText = "";
}

if (finalrainfourhikari * finalthreehikari > 0) {
    finalthreehikari = 0;
    document.getElementById("threehikariscore").innerText = "";
}


// 總分加給

var finalScore = finalfivehikari + finalfourhikari + finalrainfourhikari + finalthreehikari + finalhanawhite + finalmoonwhite + finalcho + finalredshort + finalblueshort + finalneta + finalshort + finalkasu;


if (finalScore >= 7) {
    finalScore = finalScore * 2;

}
console.log(finalScore);



// 分數確定
function couscore() {
    if (document.getElementById("ans").value == "") {
        alert("請填入答案");
    } else if (document.getElementById("ans").value == finalScore) {
        document.getElementById("rightAns").innerText = "答對了！";
        document.getElementById("wrong").innerText = "";
        document.getElementById("totalscore").innerText = `總分：${finalScore}`;
        if (finalfivehikari >= 1) {
            document.getElementById("fivehikariscore").innerText = "五光(10分)";
        }
        if (finalfourhikari >= 1) {
            document.getElementById("fourhikariscore").innerText = "四光(8分)";
        }
        if (finalrainfourhikari >= 1) {
            document.getElementById("rainfourhikariscore").innerText = "雨四光(7分)";
        }
        if (finalthreehikari >= 1) {
            document.getElementById("threehikariscore").innerText = "三光(5分)";
        }
        if (finalhanawhite >= 1) {
            document.getElementById("hanawhitescore").innerText = "賞花一浮白(5分)";
        }
        if (finalmoonwhite >= 1) {
            document.getElementById("moonwhitescore").innerText = "賞月一浮白(5分)";
        }
        if (finalcho >= 1) {
            document.getElementById("choscore").innerText = "豬鹿蝶(5分)";
        }
        if (finalredshort >= 1) {
            document.getElementById("redshortscore").innerText = "赤短(5分)";
        }
        if (finalblueshort >= 1) {
            document.getElementById("blueshortscore").innerText = "青短(5分)";
        }
        if (finalneta >= 1) {
            document.getElementById("netascore").innerText = `種(${finalneta}分)`;
        }
        if (finalshort >= 1) {
            document.getElementById("shortscore").innerText = `短(${finalshort}分)`;
        }
        if (finalkasu >= 1) {
            document.getElementById("kasushortscore").innerText = `雜(${finalkasu}分)`;
        }
        if (finalScore >= 7) {
            document.getElementById("sevenscore").innerText = "7分以上(2倍)";

        }
    }


    else {
        document.getElementById("wrong").innerText = "答錯了！";
        document.getElementById("rightAns").innerText = "";
        document.getElementById("totalscore").innerText = `總分：${finalScore}`;
        document.getElementById("fivehikariscore").innerText = "";
        document.getElementById("fourhikariscore").innerText = "";
        document.getElementById("rainfourhikariscore").innerText = "";
        document.getElementById("threehikariscore").innerText = "";
        document.getElementById("hanawhitescore").innerText = "";
        document.getElementById("moonwhitescore").innerText = "";
        document.getElementById("choscore").innerText = "";
        document.getElementById("redshortscore").innerText = "";
        document.getElementById("blueshortscore").innerText = "";
        document.getElementById("netascore").innerText = "";
        document.getElementById("shortscore").innerText = "";
        document.getElementById("kasushortscore").innerText = "";
        document.getElementById("sevenscore").innerText = "";



    }


}