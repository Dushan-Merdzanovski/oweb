

function displayTopic(i) {
    var cards = document.getElementsByClassName("textcard");

    if (cards[i].style.display == "none") {
        cards[i].style.display = "block";
    } else {
        cards[i].style.display = "none";
    }
}

function addCard() {
    console.log("WE GOT IN");
    var data = new Date();
    var sbjtext = document.getElementsByTagName("textarea");

    var parnode = document.createElement("div");
    parnode.setAttribute("class", "card textcard");
    parnode.setAttribute("id", "purpleblogpart");

    var body = document.createElement("div");
    body.setAttribute("class", "card-body");

    var title = document.createElement("h1");
    title.setAttribute("id", "usertitleformat");
    title.setAttribute("class", "card-title");

    var stringche = sbjtext[0].value;

    var strongtext = document.createElement("strong");
    strongtext.innerHTML = stringche;
    title.append(strongtext);

    var time = document.createElement("h5");
    time.style.textAlign = "left";
    time.style.color = "black";  /* 28/11/2022, 19:23:12 */
    time.style.fontStyle="normal";
    time.style.margin="10px 0px";
    var chas = ((data.getHours() < 10) ? ("0" + data.getHours()) : (data.getHours()) );
    var minuti = ((data.getMinutes() < 10) ? ("0" + data.getMinutes()) : (data.getMinutes()) );
    var sekundi = ((data.getSeconds() < 10) ? ("0" + data.getSeconds()) : (data.getSeconds()) );
    var den = ((data.getDate() < 10) ? ("0" + data.getDate()) : (data.getDate()) );
    time.innerHTML = den + "/" + (data.getMonth() + 1) + "/" + data.getFullYear() + ", " + chas + ":" + minuti + ":" + sekundi;
    title.append(time);

    body.append(title);
    var linija = document.createElement("hr");
    body.append(linija);

    var textot = document.createElement("h4");
    textot.setAttribute("class", "card-text");
    textot.setAttribute("id", "usertextformat");
    textot.innerHTML = sbjtext[1].value;
    body.append(textot);

    parnode.append(body);

    parnode.style.display = "block";
    document.getElementsByClassName("usergeneratedcontent")[0].style.display = "block";
    document.getElementsByClassName("blogdiv")[0].append(parnode);
}



var topicbuttons = document.getElementsByClassName("choicebutton");
topicbuttons[0].addEventListener("click", function () { displayTopic(0) }, false);
topicbuttons[1].addEventListener("click", function () { displayTopic(1) }, false);
topicbuttons[2].addEventListener("click", function () { displayTopic(2) }, false);

var closebuttons = document.getElementsByClassName("closebutton");
closebuttons[0].addEventListener("click", function () { displayTopic(0) }, false);
closebuttons[1].addEventListener("click", function () { displayTopic(1) }, false);
closebuttons[2].addEventListener("click", function () { displayTopic(2) }, false);

var pblshbutton = document.getElementById("publishbutton");
pblshbutton.addEventListener("click", function () { addCard() }, false);