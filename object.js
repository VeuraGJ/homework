var user={};
user.name='John';
user.surname='Mike';
console.log(user);
user.name='Peter';
console.log(user);
delete user.name;
console.log(user);
var fruit={
    apple: 20,
    pear: 20,
    peach:10
};
var sum=0;
for(let key in fruit){
    sum+=fruit[key];
}
console.log(sum);