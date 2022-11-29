var number_posts = 4;

var countlikes = [];
for (var i = 0; i < number_posts; i++) {
    countlikes.push(0);
}

var countcomments = [];
for (var i = 0; i < number_posts; i++) {
    countcomments.push(0);
}

function addLike(i) {
    countlikes[i] += 1;
    var lista = document.getElementsByClassName("likecount");
    lista[i].innerHTML = countlikes[i];
}

function addComment(i) {
    var textnode = document.getElementsByClassName("commentsinput1")[i];
    var name = document.getElementsByClassName("commentsinput2")[i];
    var newnode = document.createElement("li");
    var boldtext = document.createElement("strong");
    var stringche = document.createTextNode(textnode.value);

    if (name.value == "") {
        boldtext.innerHTML = "anonymous: ";
    } else {
        boldtext.innerHTML = name.value + ": ";
    }

    newnode.append(boldtext);
    newnode.append(stringche);
    document.getElementsByClassName("commentslist")[i].parentNode.append(newnode);
    var nodehr = document.createElement("hr");
    document.getElementsByClassName("commentslist")[i].parentNode.append(nodehr);

    countcomments[i] += 1;
    var lista = document.getElementsByClassName("comcount");
    lista[i].innerHTML = countcomments[i];

    textnode.value = ""; // resetira textarea field za vnesuvanje komentar i name
    name.value = "";
}

var koj = 0;
function addpost(i) {
    ++koj;
    var elems = document.getElementsByClassName("hideme");
    elems[i].style.display = "block";

    if (i == 1)
        document.getElementsByClassName("newpost")[0].style.display = "none";
}

function start() {
    var like_buttons = document.getElementsByClassName("likebutton");
    var com_buttons = document.getElementsByClassName("commentbutton");

    like_buttons[0].addEventListener("click", function () { addLike(0) }, false);
    com_buttons[0].addEventListener("click", function () { addComment(0) }, false);

    like_buttons[1].addEventListener("click", function () { addLike(1) }, false);
    com_buttons[1].addEventListener("click", function () { addComment(1) }, false);

    like_buttons[2].addEventListener("click", function () { addLike(2) }, false);
    com_buttons[2].addEventListener("click", function () { addComment(2) }, false);

    like_buttons[3].addEventListener("click", function () { addLike(3) }, false);
    com_buttons[3].addEventListener("click", function () { addComment(3) }, false);

    like_buttons[4].addEventListener("click", function () { addLike(4) }, false);
    com_buttons[4].addEventListener("click", function () { addComment(4) }, false);

    like_buttons[5].addEventListener("click", function () { addLike(5) }, false);
    com_buttons[5].addEventListener("click", function () { addComment(5) }, false);

    document.getElementsByClassName("newpost")[0].addEventListener("click", function () {
        if (koj == 0)
            addpost(0);
        else 
            addpost(1);
    }, false);
}
window.addEventListener("load", start, false);
