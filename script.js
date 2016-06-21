/**
 * Created by Вадим on 21.06.2016.
 */

    $(function() {

        $('#flowerContainer').sortable({
            connectWith: '#fruitContainer',
            sort: function(event, ui) {
                $('#itemId').text(ui.item.attr("id"))
            },
            change: function(event, ui) {
                $('#pos').text($('#flowerContainer *').index(ui.placeholder))
            }
        });

    });
$(function() {

    $('#sortContainer').sortable();

    $('<div id=buttonDiv><button>Получить порядок</button></div>').appendTo('body');

    $('button').button().click(function() {
        var order = $('#sortContainer').sortable("toArray");
        for (var i = 0; i < order.length; i++) {
            console.log("Position: " + i + " ID: " + order[i]);
        }
    })

});