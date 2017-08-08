// myNum = 5;
// myString = "Hello Universe";
// myArr = [1,2,3,4];
// myObj = { name:'Bill'};
// anythingVariable = "Hey";
// anythingVariable = 25;
// arrayOne = [true, false, true, true];
// arrayTwo = [1, 'abc', true, 2];
// myObj = { x: 5, y: 10 };
// // object constructor
// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());
// myNodeInstnace = new MyNode(1);
// console.log(myNodeInstnace.val);
// function myFunction() {
//     console.log("Hello World");
//     return;
// }
// function sendingErrors() {
// 	throw new Error('Error message');
// }

//change all this js to typescript
var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array<number> = [1,2,3,4];
var myObj: {name: string } = { name:'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
var arrayOne: Array<boolean> or Boolean[] = [true, false, true, true];
var arrayTwo: Array<any> = [1, 'abc', true, 2];
var myObj: any{ x: 5, y: 10 } = { x: 5, y: 10 };
// object constructor

class MyNode {
    val: Number = 0;
    _priv: Number;
    constructor(val){
        this.val = val;
    }

    doSomething() {
        this._priv = 10;
    }
}

let myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);

function myFunction(): void {
    console.log("Hello World");
    return;
}
function sendingErrors(): never {
    throw new Error('Error message');
}
