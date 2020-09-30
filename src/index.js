exports.min = function min (array) {
  if(!array || array.length === 0){
    return 0;
  }
  let minEl = array[0];
  for (let i = 0; i < array.length; i++) {
    if(minEl>array[i]){
      minEl = array[i];
    }
  }
  return minEl;
}

exports.max = function max (array) {
  if(!array || array.length === 0){
    return 0;
  }
  let maxEl = 0;
  for (let i = 0; i < array.length; i++) {
    if(maxEl<array[i]){
      maxEl = array[i];
    }
  }
  return maxEl;
}

exports.avg = function avg (array) {
  if(!array || array.length === 0){
    return 0;
  }
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
    console.log(result)
  }
  return result/array.length;
}
