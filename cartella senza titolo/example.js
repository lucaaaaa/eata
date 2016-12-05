$(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#show-data');

    $.getJSON('test.json', function (data) {
      console.log(data);

      var i;
      for(i=0; i<data.prodotti.length; i++){
        console.log(data.prodotti[i].id + " - " + data.prodotti[i].prezzo_norm);
}


/*
      var items = data.prodotti[i](function (item) {
        return item.key + ': ' + item.value;
      });



      showData.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }*/


    });

    showData.text('Loading the JSON file.');
  });
});
