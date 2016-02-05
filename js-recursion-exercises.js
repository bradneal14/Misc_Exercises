var range = function(start, end){
  var output = [];
  if (start >= end) {
    output.push(start);
    // console.log(output);
    return output;
  }
  // console.log(output);
  output = (range(start, end-1));
  output.push(output[output.length - 1] + 1);
  // output.push(start);
  return output;
};

console.log(range(3,8));


var expon = function(base, power) {
  if (power === 0) {
    return 1;
  }

  var output = base * expon(base, power - 1);
  return output;
};

console.log(expon(5,3));


var fib = function(num) {
  if (num <= 2) {
    var ary = [1, 1];
    return ary.slice(0, num);
  }
  var output = [];
  output =  fib(num - 1);
  output.push(output[output.length -1] + output[output.length - 2]);
  return output;
};

console.log(fib(5));
