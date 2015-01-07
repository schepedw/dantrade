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
})();

//TODO: Hack out watch method
if (!Object.prototype.watch) {
  Object.defineProperty(Object.prototype, "watch", {
    enumerable: false
    , configurable: true
    , writable: false
    , value: function (prop, handler) {
  var
  oldval = this[prop]
    , newval = oldval
    , getter = function () {
  return newval;
    }
      , setter = function (val) {
    oldval = newval;
    return newval = handler.call(this, prop, oldval, val);
      }
      ;
      if (delete this[prop]) { // can't watch constants
        Object.defineProperty(this, prop, {
          get: getter
          , set: setter
          , enumerable: true
          , configurable: true
        });
      }
    }
  });
}

// object.unwatch
if (!Object.prototype.unwatch) {
  Object.defineProperty(Object.prototype, "unwatch", {
    enumerable: false
    , configurable: true
    , writable: false
    , value: function (prop) {
  var val = this[prop];
  delete this[prop]; // remove accessors
  this[prop] = val;
    }
  });
}

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
