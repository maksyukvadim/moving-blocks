/**
 * Created by Вадим on 21.06.2016.
 */

$(function () {
    $('#flowerContainer').sortable({

        sort: function (event, ui) {
            $('#itemId').text(ui.item.attr("id"))
        },
        change: function (event, ui) {
            $('#pos').text($('#flowerContainer *').index(ui.placeholder))
        }
    });

});

$(function () {


    var rang = JSON.parse(localStorage.getItem('rang')) || [],
        div = $("#flowerContainer div"),
        arr = [];

    for (var i = 0; i < rang.length; i++) {
        arr.push(div[rang[i] - 1])
    }
    rang.length && $(arr)
        .appendTo($("#flowerContainer")) && $(".out")
        .text(rang);;
    $("#flowerContainer")
        .sortable({
            stop: function (event, ui) {
                rang = [];
                $("#flowerContainer div")
                    .each(function (indx, element) {
                        rang.push(1 + div.index(element) + " ");
                    });
                $(".out")
                    .text(rang);
                localStorage.setItem('rang', JSON.stringify(rang));
            }
        });
    $("#flowerContainer")
        .disableSelection();
});

$(function () {
$("#btn").click(function () {


    var rang = ["1 ","2 ","3 ","4 ","5 ","6 ","7 ","8 ","9 ","10 "],
        div = $("#flowerContainer div"),
        arr = [];
    localStorage.setItem('rang', JSON.stringify(rang));


});
});