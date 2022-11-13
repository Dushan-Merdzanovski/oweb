var count = 0;
var seconds = 0;
var miliseconds = 0;
var timerecenica = "";
var startnovreme = Date.now();

var harepos = 0;
var turtlepos = 0;

var harenum = 0;
var turtlenum = 0;

var hareold = 0;
var turtleold = 0;

var intervalrace;
var intervaltime

function start() {
    var recenica = "";
    for (var i = 0; i < 70; i++) {
        recenica += '<div class="blocky" id=b' + i + '></div>';
    }
    document.getElementsByClassName("racetrack")[0].innerHTML = recenica;
}


function startthetime() {
    intervaltime = setInterval("updateTime()", 10);
}

function updateTime() {
    var pominatovreme = Date.now() - startnovreme;
    document.getElementById("time").innerHTML = (pominatovreme / 1000).toFixed(3);
}


function startrace() {
    intervalrace = setInterval("racethem()", 1000);
}

function generatenumbers() {
    turtlenum = Math.floor(1 + Math.random() * 10);
    harenum = Math.floor(1 + Math.random() * 10);
}

function racethem() {
    turtleold = turtlepos;
    hareold = harepos;

    if (turtlepos > 70 || harepos > 70) {
        clearInterval(intervalrace);
        clearInterval(intervaltime);
        if (harepos > 70) {
            window.alert("THE HARE WON!");
        }
        else if (turtlepos > 70) {
            window.alert("THE TORTOISE WON!");
        } else {
            window.alert("THEY BOTH REACHED THE FINISH LINE AT THE SAME TIME!");
        }
    }
    else {
        generatenumbers();
        if (turtlenum <= 5) { // verojatnost 50% 3 squares to the right
            turtlepos += 3;
        } else if (turtlenum <= 7) { // verojatnost 20% 6 squares to the left
            if (!(turtlepos - 6 < 0))
                turtlepos -= 6;
        }
        else {
            turtlepos++; // verojatnost 30% 1 square to the right
        }

        if (harenum <= 2) { // 20% veroj sleep
            
        } else if (harenum <= 4) { // 20$ veroj 9 squares to the right;   
            harepos += 9;
        } else if (harenum <= 5) { // 10% veroj 12 squares to the left
            if (!(harepos - 12 < 0))
                harepos -= 12;
        }
        else if (harepos <= 8) { // 30% veroj 1 square to the right
            harepos++;
        }
        else {
            if (!(harepos - 2 < 0))
                harepos -= 2;
        }
        movepictures();
    }

    function movepictures() {

        if (turtlepos == harepos) {
            window.alert("OUCHHHHHH");
            document.getElementById("b" + turtlepos).style.backgroundColor = "red";
            document.getElementById("b" + turtleold).innerHTML = "";
            document.getElementById("b" + hareold).innerHTML = "";
        }
        else {
            var turtlediv = document.getElementById("b" + turtlepos);
            turtlediv.innerHTML = '<img id="turtlepic" src="turtlepic.png" alt="turtle">';
            document.getElementById("b" + turtleold).innerHTML = "";

            var harediv = document.getElementById("b" + harepos);
            harediv.innerHTML = '<img id="harepic" src="harepic.png" alt"hare">';
            document.getElementById("b" + hareold).innerHTML = "";
        }
    }
}   