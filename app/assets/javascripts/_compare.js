$(function(){
  if (urlParams['tickers']){
    $('.no-stocks.hidden-xs').toggleClass('hidden-xs');
    $('.no-stocks.visible-xs').toggleClass('visible-xs');
    $('.no-stocks').toggle();
  }
});
