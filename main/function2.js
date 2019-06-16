function palindrome(message){
  // wirte your code here
  if(message.length>0){
  var arr=message.split('').reverse();
  var message1=arr.join('');
  if(message1==message){
  return true;
  }else return false;
  }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true