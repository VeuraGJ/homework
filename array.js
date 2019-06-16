// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a));
console.log(Array.isArray(b));

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var k=a.map(function(index, elem) {
    return (elem*2);
});
console.log(k);
// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(' '));
console.log(colors.join('+'));
console.log(colors.join());

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function compare(val1,val2){
    if(val1>val2){
        return -1;
    }else if(val1<val2){
        return 1;
    }else{
        return 0;
    }
}
console.log(a.sort(compare));
// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var maxEl;
var maxCou=1;
var temp=a.reduce(function(pre,curr){
pre[curr]?pre[curr]++:pre[curr]=1;
if(pre[curr]>maxCou){
    maxEl=curr;
    maxCou++;
}
return pre;
},{});
console.log(maxEl);
