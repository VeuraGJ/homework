// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
name=name.toUpperCase();
console.log(name);
// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
//1.先全部转成小写，然后split成数组；2使用replace和toUpperCase将首字母转成大写；3用join
var sArray=sentence.toLowerCase().split(' ');
var tArray=[];
for(var i=0;i<4;i++){
 tArray.push(sArray[i].replace(/\b[a-z]/g,function(s){return s.toUpperCase();}));
}
var sentence1=tArray.join(' ');
console.log(sentence1);
// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
console.log(money.substring(1));