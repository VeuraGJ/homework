function reverseString(message){
  // wirte your code here
  if(message.length>0){
  var arr=message.split('');
  return arr.reverse().join('');
  }
}
reverseString('hello');