/** 陣列的型別 - Array */
let num = 222;

let fibonacci: number[] = [1, 1, 2, 3, 5, num];
fibonacci.push(8);
console.log(fibonacci);
/** error: fibonacci1若定義裡面的值是number，所以不行有一個值若為string會報錯 */
/** result: array.ts:5:32 - error TS2322: Type 'string' is not assignable to type 'number'. */
// let fibonacci1: number[] = [1, "1", 2, 3, 5];

/** 陣列泛型（Array Generic）*/
let fibonacci2: Array<number | string> = [1, 1, 2, 3, 5, "dd"];

interface IArguments {
  [index: number]: string;
  length: number;
  callee: Function;
}

function sum() {
  let args: IArguments = arguments;
}
sum();

/** 陣列泛型（Array Generic）*/
let list: any[] = ["xcatliu", 25, { website: "http://xcatliu.com" }];
