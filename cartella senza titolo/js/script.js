
$(document).ready(function(){



  









  $.fn.followTo = function (pos) {
    var $this = this,
    $window = $(window);

    $window.scroll(function (e) {
      if ($window.scrollTop() > pos) {
        $this.css({
          position: 'fixed',
          top: 210
        });
      } else {
        $this.css({
          position: 'relative',
          top: 200
        });
      }
    });
  };

  $('.container_filtri').followTo(280);

  $( ".carrello_newProducts" ).click(function() {

    var id = $(this).parents("div").attr("id");


    var price = $("#"+id+" .new_price").html();
    var name =  $("#"+id+" .text_description").html();



    $(".popup .name").append(name);
    $(".popup .price").append(price+"<br>");
  });


  $('.carrello').on('click', function() {
    if($(".popup").hasClass('selected')) {
      $(".popup").removeClass('selected');
      $(".overlay").removeClass("overlay-active")
    } else {
      $(".popup").addClass('selected');
      $(".overlay").addClass("overlay-active")
    }

  });


});






/*
$(document).ready(function(){
$('#button_send').on('click', function () {
$.ajax({
type: 'POST',
url: 'agenda.json',
data: { get_param: 'value' },
dataType: 'json',
success: function (data) {
$( "#send" ).remove();
$.each(data, function(index, element) {
$('body').append($('<div>', {
text: element.Nome + " " + element.Cognome
}));
});
}
});
});
});


/*
$.getJSON( "test.json", function( data ) {
var items = [];
$.each( data, function( key, val ) {
items.push( "<li id='" + key + "'>" + val + "</li>" );
});

$( "<ul/>", {
"class": "my-new-list",
html: items.join( "" )
}).appendTo( "body" );
});




/*
$(document).ready(function () {
$.getJSON(url,
function (json) {
var tr;
for (var i = 0; i < json.length; i++) {
tr = $('<tr/>');
tr.append("<td>" + json[i].User_Name + "</td>");
tr.append("<td>" + json[i].score + "</td>");
tr.append("<td>" + json[i].team + "</td>");
$('table').append(tr);
}
});
});

*/
/*
$(document).ready(function() {
function myFunction(arr) {
var out = "";
var i;
for(i = 0; i<arr.length; i++) {
out +=
'<a href="#">' +
arr[i].name + arr[i].cat + arr[i].price + '</a><br>';
}
document.getElementById("cell").innerHTML = out;
};

});

/*

$(document).ready(function() {

$.getJSON( "js/json.json", function( data ) {
var items = [];
$.each( data, function( name, cat, price ) {
items.push( "<span>" + name + "</span>"
+ "<span>" + cat + "</span>"
+ "<span>" + price + "</span>");
});

$("#cell").html.appendTo("ciao");

});
});
/*
$( "<ul/>", {
"class": "my-new-list",
html: items.join( "" )
}).appendTo( "body" );
});
*/
