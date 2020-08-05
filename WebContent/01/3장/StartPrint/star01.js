function add(a,b){
    var c=a+b;
    return c;
  }
  
  
  var line = 5;
  var result = "";
  
  var c = add(4,3);
  
  for (var i = line; i >= 1; i--) {
    for (var j = 1; j < 6 - i; j++) { //6-4 =2 j=1
      result += " ";
    }
    for (var k = 1; k <= i; k++) { // k=1, i=5
      result += "*";
    }
    result += "\n";
  }
  console.log(result);



