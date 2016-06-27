$(function () {
    var rang = JSON.parse(localStorage.getItem('rang')) || [],
        div = $("#blockContainer div"),
        arr = [];
    for (var i = 0; i < rang.length; i++) {
        arr.push(div[rang[i] - 1])
    }
    rang.length && $(arr)
        .appendTo($("#blockContainer")) && $(".out")
        .text(rang);
    var blockClass = " ui-corner-all portlet-placeholder";
    function clas() {
        return function () {
            $('#blockContainer div').mousedown(function () {
                console.log($(this).attr('id'));
                if($(this).attr('id') == "block10") {
                    blockClass = " ui-corner-all portlet-placeholderBig";
                }else {
                    blockClass = " ui-corner-all portlet-placeholder";
                }
            });
            return blockClass;
        }
    }

    var b = clas();
    var c = clas();
    $("#blockContainer")
        .sortable(

    {
        placeholder: c(),
        start: function (event, ui) {
            ui.item.css("height","200px");
            if(ui.item.attr('id')=="block10"){
                ui.placeholder.addClass("col-md-6  portlet-placeholderBig");
            } else {
                ui.placeholder.addClass("col-md-3 square portlet-placeholder");
            }
            $('div .ui-corner-all').removeClass('ui-corner-all ')
        },
                containment:'body',
                dropOnEmpty: false,
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
    $('#blockContainer').sortable('disable');
    $("#blockContainer").disableSelection();
});


$(function () {
    $("#btn1").click(function () {
        var rang = ["1 ", "2 ", "3 ", "4 ", "5 ", "6 ", "7 ", "8 ", "9 ", "10 "],
            div = $("#blockContainer div"),
            arr = [];
        localStorage.setItem('rang', JSON.stringify(rang));
        var containerBlock = $("#blockContainer");
        for (var i = 0; i < containerBlock.children().length; i++) {
            containerBlock.children().eq[i] = $("#block" + (i + 1)).css({'position': 'static'});
        }

        $('#blockContainer:only-child').remove();
        for (var i = 0; i < containerBlock.children().length; i++) {
            $('#blockContainer').append(containerBlock.children().eq[i]);
        }
        $("#blockContainer").sortable();
    });
    $("#btn2").click(function () {
        var i = 1;

        function test() {
            if (i <= 10) {
                test2();
                setTimeout(test, 20);
            }
        }

        function test2() {
            $('#block' + i).addClass("shake shake-constant");
            i++;
        }

        test();
        $('#blockContainer').sortable('enable');
        $("#btn2").hide();
        $("#btn3").show();
    });
    $("#btn3").click(function () {
        $('#blockContainer div').removeClass("shake shake-constant");
        $('#blockContainer').sortable('disable');
        $("#btn2").show();
        $("#btn3").hide();
    });
});

