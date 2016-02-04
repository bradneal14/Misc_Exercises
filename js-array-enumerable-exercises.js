var unique = function(ary) {
  var uniqueAry = [];
  for (var i = 0; i < ary.length; i++) {
    if (uniqueAry.indexOf(ary[i]) === -1) {
      uniqueAry.push(ary[i]);
    }
  }
  return uniqueAry;
};
console.log(unique([1,2,3,3,3,4,1,4,5]));

var twoSum = function(ary) {
  var ansAry = [];
  for (var i = 0; i < ary.length - 1; i++) {
    for (var j = i + 1; j < ary.length; j++) {
      if (ary[i] + ary[j] === 0) {
        ansAry.push([i, j]);
      }
    }

  }
  return ansAry;
};
console.log(twoSum([1,2,3,4,5,6,-1,-3,-4]));

var transpose = function(ary) {
  var ansAry = [];
  for (var n = 0; n < ary[0].length; n++) {
    ansAry.push([]);
  }
  for (var i = 0; i < ary.length; i++) {
    for (var j = 0; j < ary[i].length; j++) {
      ansAry[j].push(ary[i][j]);
    }
  }
  return ansAry;
};

var rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [6, 7, 8]
  ];

  var rows2 = [
      [0, 1, 2, 4],
      [3, 4, 5, 7],
      [6, 7, 8, 6],
    ];

console.log(transpose(rows));
console.log(transpose(rows2));

Array.prototype.myEach = function(func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

var print = function(int) {
  console.log(int);
};
[1,2,3].myEach(print);


Array.prototype.myMap = function (func) {
  var output = [];
  // var toMap = function (num) {
  //   output.push(func(num));
  // };
  // this.myEach(toMap);
  this.myEach(function (num) {
      output.push(func(num));
    }
  );
  return output;
};

var add1 = function(num) {
  return num + 1;
};

console.log([1, 2, 3].myMap(add1));



Array.prototype.myInject = function (func) {
  var accum;
  this.myEach(function (el) {
    if (accum === undefined) {
      accum = el;
    }
    else {
      accum = func(accum, el);
    }
  });
  return accum;
};

var plus = function(base, num) {
  return base + num;
};

var multiply = function(base, num) {
  return base * num;
};

console.log([1,2,3,10].myInject(plus));
console.log([1,2,3,10].myInject(multiply));
