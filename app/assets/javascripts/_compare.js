$(function(){
  if (urlParams['symbols']){
    getStockObjects(urlParams['symbols'].split(','));
  }
});
