// 原始資料型別（Primitive data types）和物件型別（Object types）

/**
 * 1.原始資料型別 （Primitive data types）
 * (1) boolean (布林值)
 * (2) number (數值)
 * (3) string (字串)
 * (4) null (空值)
 * (5) undefined
 * (6) ES6 中的新型別 Symbol
 *
 * 2.物件型別（Object types）
 * (1)Interface (介面)
 *
 *
 *
 *
 * */

let isDone: boolean = false;

// let createdByNewBoolean: boolean = new Boolean(1);

let createdByNewBoolean: Boolean = new Boolean(1);
console.log(typeof createdByNewBoolean);

let createdByBoolean: boolean = Boolean(1);

let myFavoriteNumber: any = "seven";

myFavoriteNumber = 7;

let something;

let anyThing: any = "Tom";
anyThing.setName("Jerry");
anyThing.setName("Jerry").sayHello();
anyThing.myName.setFirstName("Cat");

function getLength(something: string | number): number {
  return typeof something === "string" ? something.length : something;
}

interface Person {
  name: string;
  age: number;
}

let Tom: Person = {
  name: "Tom",
  age: 25,
};

interface Person2 {
  name: string;
  age?: number;
  [propName: number]: any;
}

let Tom2: Person2 = {
  name: "Tom",
  1: 1,
};

interface NumberArray {
  [index: string]: number;
}

// let fibonacci: NumberArray = [1, 1, 2, 3, 5];
