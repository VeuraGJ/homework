function alphabetSort(message){
  // wirte your code here
  if(message.length>0){
  var arr=message.split('');
  return arr.sort().join('');
  }
}
alphabetSort('hello'); // should return 'ehllo'