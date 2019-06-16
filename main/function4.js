function countWords(message){
  // wirte your code here
  if(message.length>0){
  var arr=message.split(' ');
  return arr.length;
  }
  return 0;
}
countWords('Good morning, I love JavaScript.'); // should return 5