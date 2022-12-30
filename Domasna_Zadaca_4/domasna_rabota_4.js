$(document).ready(function () { // loading na iminjata na stadionite
    $("td").text(function () {
        switch ($(this).text()) {
            case "ats": return "Al Thumama Stadium";
            case "abs": return "Al Bayt Stadium";
            case "lus": return "Lusail Stadium";
            case "974": return "974 Stadium";
            case "aba": return "Ahmed bin Ali Stadium";
            case "abs": return "Al Bayt Stadium";
            case "ajs": return "Al Janoub Stadium";
            case "kha": return "Khalifa International Stadium";
            case "edu": return "Education City Stadium";
        }
    })
});

$(document).ready(function () { // loading na boite na sekoja faza na natprevari na tabelata
    $("td:contains('Group')").parent().addClass("group");
    $("td:contains('Round of 16')").parent().addClass("roundof16");
    $("td:contains('Quarter-final')").parent().addClass("quarterfinal");
    $("td:contains('Semi-final')").parent().addClass("semifinal");
    $("td:contains('Final')").parent().addClass("final");
})

$(document).ready(function () {
    $("#input-pole").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#worldcup-tabela tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});