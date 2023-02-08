function displayTopic(i) {
    $(".textcard").eq(i).toggleClass("showme");
}

function addCard() {
    var data = new Date();
    var $parnode = $("<div>", {
        id: "purpleblogpart",
        class: "card textcard"
    });
    
    var $body = $("<div>", { class: "card-body" });
    var $title = $("<h1>", {
        id: "usertitleformat",
        class: "card-title"
    });
    var stringche = $("textarea").first().val();
    $("<strong>", { text: stringche }).appendTo($title);

    $time = $("<h5>").css({ "textAlign": "left", "color": "black", "fontStyle": "normal", "margin": "10px 0px" });
    var chas = ((data.getHours() < 10) ? ("0" + data.getHours()) : (data.getHours()));
    var minuti = ((data.getMinutes() < 10) ? ("0" + data.getMinutes()) : (data.getMinutes()));
    var sekundi = ((data.getSeconds() < 10) ? ("0" + data.getSeconds()) : (data.getSeconds()));
    var den = ((data.getDate() < 10) ? ("0" + data.getDate()) : (data.getDate()));
    var mesec = data.getMonth() + 1;
    mesec = ((parseInt(mesec) < 10) ? ("0" + parseInt(mesec)) : (parseInt(mesec)));
    $time.text(den + "/" + mesec + "/" + data.getFullYear() + ", " + chas + ":" + minuti + ":" + sekundi);

    $title.append($time);
    $body.append($title);
    $("<hr>").appendTo($body);
    var $textot = $("<h4>", {
        class: "card-text",
        id: "usertextformat"
    })
    $textot.text($("textarea").eq(1).val());

    $body.append($textot);
    $parnode.append($body);
    $parnode.css("display", "block");
    $(".usergeneratedcontent").first().css("display", "block");
    $(".blogdiv").first().append($parnode);
}

$(document).ready(function () {
    var topicbuttons = document.querySelectorAll(".choicebutton");
    topicbuttons.forEach(function (item, index) {
        item.addEventListener("click", function () {
            displayTopic(index)
        }, false);
    })
});

$(document).ready(function () {
    var closebuttons = document.querySelectorAll(".closebutton");
    closebuttons.forEach(function (item, index) {
        item.addEventListener("click", function () {
            displayTopic(index)
        }, false);
    })
});

$(document).ready(function () {
    $("#publishbutton").click(function () { addCard() });
});