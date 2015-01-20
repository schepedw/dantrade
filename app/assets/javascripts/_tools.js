var urlParams;

function getStocks(tickerNames, asynchronous){
  for (var i = 0; i < tickerNames.length; i++){
    $.ajax('/compare.json?ticker=' + tickerNames[i])
    .done( function(stockObject){
      stockObject['Symbol'] = stockObject['Symbol'].toUpperCase();
      displayStock(stockObject);
    })
  }
}

(window.onpopstate = function () {
  var match,
  pl     = /\+/g,  // Regex for replacing addition symbol with a space
  search = /([^&=]+)=?([^&]*)/g,
  decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
  query  = window.location.search.substring(1);

  urlParams = {};
  while (match = search.exec(query))
    urlParams[decode(match[1])] = decode(match[2]).toUpperCase().split(',');
  urlParams['tickers'] = urlParams['tickers'] || [];
})();

Array.prototype.remove = function(e) {
  var t, _ref;
  if ((t = this.indexOf(e)) > -1) {
    return ([].splice.apply(this, [t, t - t + 1].concat(_ref = [])), _ref);
  }
};

$(function(){
  $('#vertical-nav-toggle').click(function(){
    $('.vertical-nav').toggle('fast');
  });
});
