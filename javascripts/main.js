$(document).ready(function(){

$(".btn").click(function(e){
	console.log("event.target:", e.target);
	console.log("this:", $(this));
});



});

// this.a = 22;
// console.log(window.a);


// var apple = "apple";
// console.log(window.apple);

// Example 1

// var fubar = "42";

// function baz(){
// 	console.log("baz");
// 	bar();
// }

// function bar(){
// 	console.log("bar");
// 	foo();
// }

// function foo(){
// 	console.log("foo");
// 	var fubar = "13";
// 	console.error("this", this); //window
// 	console.error("fubar", this.fubar); //"42". Locally, fubar is 13. But it is returning window.fubar
// }

// baz();

//Example 2:

// var a = 3;
// function foo(){
// 	console.log("this", this); //obj. NOT window. 
// 	console.log("a", this.a); //2
// };

// var obj = {
// 	a: 2,
// 	monkey: foo
// };

// obj.monkey();

// Example 3

// function foo(){
// 	console.log("this", this); //
// 	console.log("a", this.a); //
// };

// var obj1 = {
// 	a: 2,
// 	obj2: obj2
// }

// var obj2 = {
// 	a: 32,
// 	foo: foo
// };

// obj1.obj2.foo();

// Example 4

// function foo(){
// 	console.log("this", this); 
// 	console.log("a", this.a);
// };

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var bar = obj.foo;

// var a = "global warming";

// obj.foo(); //obj, 2

// bar(); //window, global warming

// Example 5

// function foo(){
// 	console.log("this", this); 
// 	console.log("a", this.a);
// };

// function doFoo(fn){
// 	return fn();
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var a = "global"

// doFoo(obj.foo);
