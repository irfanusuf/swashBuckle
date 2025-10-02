
//   // const x = 3      // type infer 

// import type { Admin, Circle, Negate, Rectangle, Username } from "./assets/types/Types"



//   const isAdmin: Admin = false
//   const username: Username = "gjhgcjahsg"


//   const myRectangle: Rectangle = {

//     length: 3,
//     breadth: 2,
//   }

//   const Mycircle: Circle = {
//     radius: 0,
//   }

//   interface Car {
//     dateOfMake: Date, 
//     color: string,
//     engineCapcity: number
//   }


//   const mycar: Car = {
//     dateOfMake: new Date,
//     color: "red",
//     engineCapcity: 2000
//   }

//   const myCar2 : Car = {
//     dateOfMake: new Date,
//     color: "",
//     engineCapcity: 0
//   }



//   const myCar3 : Car ={
//     dateOfMake: new Date,
//     color: "",
//     engineCapcity: 0
//   }


//   const arr = []


//   arr.push(8)
//   arr.push('jhdgjhfdsg')




//   const myNUmArr: number[] = [4, 5, 6, 7, 0, 5]
//   myNUmArr.push(67)


//   const myArr: string[] = ["apple", "mango", "bananana"]


//   myArr.length
//   myArr.includes("banana")
//   myArr.push("jhgdsahjg")



//   let User: readonly [string, boolean, number, number, boolean]

//   User = ["jfdksj", false, 5, 6, false]


//   let TwoDCoordniates: [x: number, y: number] = [5, 6]




//   TwoDCoordniates = [3, 4]





//   let ThreeDCoordniates: [x: number, y: number, z: number] = [3, 4, 7]


//   const [x, y, z] = ThreeDCoordniates

//   console.log(x + y + z)








//   function add(a: number, b: number): number {
//     return a + b
//   }

//   add(3, 6)


//   const myFunction: Negate = (a: number) => {
//     if (a > 0) {
//       return -a
//     } else {
//       return a
//     }

//   }



//   myFunction(-5)


// class Person {
//   private name: string;

//   public constructor(name: string) {
//     this.name = name;
//   }

//   public getName(): string {
//     return this.name;
//   }
// }


// const person1 = new Person("tehleeem ")


// person1.getName()


// interface Shape {
//   getArea: () => number;
// }



// class RectangleClass implements Shape {
//   public width : number
//   public height : number

//   public constructor( width: number,  height: number) {
//     this.width =  width
//     this.height = height
//   }

//   public getArea(): number {
//     return this.width * this.height;
//   }
// }




// class SquareClass extends RectangleClass{


 
// }

// const rectangle = new RectangleClass(4 , 8)
// const area  =  rectangle.getArea()

// console.log(area)









