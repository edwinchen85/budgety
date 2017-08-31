var budgetController = (function() {

  var x = 23;

  var add = function(a) {
    return x + a;
  }

  return {
    publicTest: function() {
      return add(a);
    }
  }

})();

var UIController = (function() {

  // Some code

})();
