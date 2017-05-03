function newarray(arr) {
  var newarr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number"){
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
