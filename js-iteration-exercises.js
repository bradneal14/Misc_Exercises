Array.prototype.bubbleSort = function() {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        var temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        sorted = false;
      }
    }
  }
};

var a = [3,6,1,8,5];
a.bubbleSort();
console.log(a);


var substrings = function (str) {
  var output = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j <= str.length; j++){
      output.push(str.substring(i , j));
    }
  }
  return output;
};

var c = "cat";
console.log(substrings(c));
