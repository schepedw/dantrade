function show(){
  getStocks(urlParams['tickers'], true);
  populateLeftTabs();
  createPerformanceBars();
}

function plotPoint(val, high, low, point, label){
  $(point).attr('data-tooltip', val);
  $(point).attr('data-tooltip', label + '($' + val + ')');
  range = high - low;
  loc = (val - low) / range * 100;
  $(point).css('left', loc + '%');
}

function plotPerformance(stockObject){
  $('.point-1.'+stockObject.Symbol).attr('data-tooltip', 'Low($' + stockObject.Low + ')');
  $('.point-4.'+stockObject.Symbol).attr('data-tooltip', 'High($' + stockObject.High + ')');
  plotPoint(stockObject.Open, stockObject.High, stockObject.Low, '.point-2.'+stockObject.Symbol, 'Open');
  plotPoint(stockObject.LastPrice, stockObject.High, stockObject.Low, '.point-3.'+stockObject.Symbol, 'Current');
}

function displayStock(stockObject){
  plotPerformance(stockObject);
  $('#'+stockObject.Symbol+'-price').text(' $' + stockObject.LastPrice);
}

function createPerformanceBars(){
  for (var i = 0; i < urlParams.tickers.length; i++){
    tickerName = urlParams.tickers[i];
    $(".timeline-area").append(
        $("<div class=row />").append(
          $("<span class='col-xs-3 timeline-label text-center' />").text(tickerName))
    .append($("<div class='timeline timeline-container col-xs-9' />")
    .append($("<div class=timeline-bar />")
            .append($("<div class='timeline-point point-1' data-tooltip='loading...' />").toggleClass(tickerName)
                   ).append($("<div class='timeline-point point-2' data-tooltip='loading...' />").toggleClass(tickerName)
                           ).append($("<div class='timeline-point point-3' data-tooltip='loading...' />").toggleClass(tickerName)
                                   ).append($("<div class='timeline-point point-4' data-tooltip='loading...' />").toggleClass(tickerName)
                                           ))
           ));
  }
}
