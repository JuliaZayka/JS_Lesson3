'use strict'

//min1
console.log('=========min1===========');
var products=['Bread','Milk','Water','Fruits','Meat','Cheese','Chocolate'];
console.log('total:' + products.length);
console.log('The last element is: ' + products.pop());
console.log('=========min2===========');

//min2
var styles=['Jazz','Blues'];
console.log(styles);
styles.push('Rock-n-roll');
console.log(styles);
styles.splice(-2,1,'Classic');
console.log(styles);
console.log('removed:  '+styles.shift());
console.log(styles);
styles.unshift('Pep','Peggy');
console.log(styles);

//min3
console.log('=========min3===========');
let a = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(a.indexOf('d'));  
console.log(a.indexOf('z'));   

console.log('=====min3==another version=====');
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
function find(arr,value){
	for (var i=0; i<arr.length; i++){
		if(arr[i] == value){
			return i;
		}
	}
	return -1;
}
console.log(find(arr, 'c'));
console.log(find(arr, 'a'));