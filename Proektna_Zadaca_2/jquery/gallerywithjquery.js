var number_posts = 6;

var countcomments = [];
for (var i = 0; i < number_posts; i++) {
    countcomments.push(0);
}

function addComment(i) {
    var textval = $(".commentsinput_text").eq(i).val();
    var nameval = $(".commentsinput_name").eq(i).val();
    var newnode = document.createElement("li");
    var boldtext = document.createElement("strong");
    var stringche = document.createTextNode(textval);

    if (nameval == "") {
        boldtext.innerHTML = "anonymous: ";
    } else {
        boldtext.innerHTML = nameval + ": ";
    }

    newnode.append(boldtext);
    newnode.append(stringche);

    $(".commentslist").eq(i).parent().append(newnode);
    var nodehr = document.createElement("hr");
    $(".commentslist").eq(i).parent().append(nodehr);

    $(".commentsinput_text").eq(i).val("");// resetira textarea field za vnesuvanje komentar i name
    $(".commentsinput_name").eq(i).val("");
}

function incrementCommentCount(i) {
    var com_count;
    var com_count = parseInt($(".comcount").eq(i).text());
    com_count++;
    $(".comcount").eq(i).text(String(com_count));
}

var koj = 0;
function addpost(i) {
    ++koj;
    $(".hideme").eq(i).show();
    if( i == 1 ) {
        $(".newpost").hide();
    }
}

function addLike() {
    var like_count;
    like_count = parseInt($(this).children(".likecount").text());
    like_count++;
    $(this).children(".likecount").text(String(like_count));
}

function start() {
    $("button.likebutton").on("click", addLike);

    var com_buttons = document.querySelectorAll(".commentbutton");
    com_buttons.forEach(function (item, index) {
        item.addEventListener("click", function () {
            incrementCommentCount(index), addComment(index);
        }, false);
    })

    $(".newpost").first().on("click", function () {
        if (koj == 0)
            addpost(0);
        else
            addpost(1);
    });
}

$(document).ready(function () { start() });