$(function(){
  if (urlParams['tickers'].length){
    $('.no-stocks.hidden-xs').toggleClass('hidden-xs');
    $('.no-stocks.visible-xs').toggleClass('visible-xs');
    $('.no-stocks').toggle();
  }
});
