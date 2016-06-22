/**
 * Created by Вадим on 21.06.2016.
 */

$(function () {
    $('#blockContainer').sortable({


    });

});

$(function () {
    var rang = JSON.parse(localStorage.getItem('rang')) || [],
        div = $("#blockContainer div"),
        arr = [];

    for (var i = 0; i < rang.length; i++) {
        arr.push(div[rang[i] - 1])
    }
    rang.length && $(arr)
        .appendTo($("#blockContainer")) && $(".out")
        .text(rang);;
    $("#blockContainer")
        .sortable({
            stop: function (event, ui) {
                rang = [];
                $("#blockContainer div")
                    .each(function (indx, element) {
                        rang.push(1 + div.index(element) + " ");
                    });
                $(".out")
                    .text(rang);
                localStorage.setItem('rang', JSON.stringify(rang));
            }
        });
    $("#blockContainer")
        .disableSelection();
});

$(function () {

});

$(function () {



    $("#btn").click(function () {
        var rang = ["1 ","2 ","3 ","4 ","5 ","6 ","7 ","8 ","9 ","10 "],
            div = $("#blockContainer div"),
            arr = [];
        localStorage.setItem('rang', JSON.stringify(rang));
        var containerBlock = $("#blockContainer");
        for(var i = 0; i < containerBlock.children().length; i++ ){
            containerBlock.children().eq[i] = $("#block"+ (i+1)).css({'position':'static'});
            console.log(containerBlock.children().eq[i]);
        }

        $('#blockContainer:only-child').remove();
        for(var i = 0; i < containerBlock.children().length; i++ ){
            $('#blockContainer').append(containerBlock.children().eq[i]);
        }
        $('#blockContainer').sortable({
            
        });
        console.log(containerBlock);
    });








    });
