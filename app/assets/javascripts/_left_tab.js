$(function(){

  $('button.rm-stock').click(function(){
    tickerToDelete=$(this).data('ticker');
    urlParams.tickers.remove(tickerToDelete);
    if (urlParams.tickers.length )
      window.location='/?tickers='+urlParams.tickers.join(',');
    else
      window.location='/';
  });

  $('button.add-stock').click(function(){
    $('span.add-new').toggle(200);
    $('div.add-ticker-form').toggle(200);
    $(this).toggle(200);
  });

  $('button.cancel').click(function(){
    $('div.add-ticker-form').toggle(200);
    $('span.add-new').toggle(200);
    $('button.add-stock').toggle(200);
  });

  $('button.submit').click(function(){
    var newTicker = $('input.add-new').val().toLowerCase();
    window.location = '/?tickers=' + urlParams['tickers'].concat(newTicker);
  });

  $('div.add-ticker-form').toggle();
});

function populateLeftTabs(){
  for (var i = urlParams['tickers'].length -1; i >= 0; i--){
    tickerName=urlParams['tickers'][i];
    a = $("<div class='row ticker-container'/>").append($("<div class='col-xs-8'/>").append(
      $("<span class='ticker-symbol'>"+tickerName+"</span>")).append($("<span class='ticker-price' id='"+tickerName+"-price' />"))).append(
      $("<div class='col-xs-4 text-right' />").append(
        $("<button type='button' class='btn btn-danger btn-sm rm-stock' data-ticker='"+tickerName+"'></button>").append($("<i class='fa fa-remove'>"))));
        $('.left-tabs').prepend(a);
  }
}
