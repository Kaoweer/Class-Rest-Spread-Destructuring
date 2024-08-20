// Class Lab
// Lab1
// class Calculator{
//   constructor(num1 = 0){
//     this.value = num1
//   }
//   add(num2){
//     this.value += num2
//   }
//   subtract(num2){
//     this.value -= num2
//   }
//   multiply(num2) {
//     this.value *= num2
//   }
//   divide(num2) {
//     this.value /= num2
//   }
//   show(){
//     console.log(this.value)
//   }
// }
// let cal = new Calculator(5)
// cal.add(9)
// console.log(cal.value)
// cal.add(3)
// console.log(cal.value)
// cal.subtract(9)
// console.log(cal.value)
// cal.divide(1)
// console.log(cal.value)
// cal.multiply(90)
// console.log(cal.value)
// cal.show()

// Lab02
// class Sale{
//   constructor(name,amount,price){
//     this.name = name
//     this.amount = amount
//     this.price = price
//   }
//   calcPrice(){
//     return this.amount * this.pricej
//   }
// }
// class Beverage extends Sale{
//   constructor(_name,_amount,_price){
//     super(_name,_amount,_price)
//   }
// }

// let result = new Beverage('Pepsi',5,20)
// console.log(result.calcPrice())

// Object keys, values, entries
// Lab01
// function isArray(input){
//   return Array.isArray(input)
// }

// console.log(isArray([]))
// console.log(isArray(5))
// console.log(isArray([1,2,3,4]))

// Object key value
// Lab01
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// let keys = Object.keys(salaries)
// let sumSalaries1 = keys.reduce((prv, cur) => { return prv += salaries[cur]},0)
// console.log(sumSalaries1)

// let values = Object.values(salaries)
// let sumSalaries2 = values.reduce((prv,cur) => {return prv += cur},0)
// console.log(sumSalaries2)

// Lab02
// function checkEmptyObj(obj){
//     return Object.keys(obj).length == 0 ? true : false
//   }
//   console.log(checkEmptyObj({}))
//   console.log(checkEmptyObj({key:'value'}))
  
  // Rest lab
  // Lab01
  // function multiply(...nums){
  //   return nums.reduce((prv,cur) => {return prv *= cur},1)
  // }
  // console.log(multiply(1,5,3,4,9))
  
  // Lab02
  // function filterOutOdds(...nums){
  //   let oddNum = nums.filter((num) => num%2 == 0)
  //   return oddNum
  // }
  // console.log(filterOutOdds(1,2,3,4,9,6,8))
  
  // Lab03 WHAT?????????????????????????????????????????????
  // function mergeObjects(...obj){
  //   let res = {}
  //   for (i of obj){
  //     Object.assign(res,i)
  //   }
  //   return res
  // }
  // console.log(mergeObjects({ name: 'a', nickname: 'B' }, { age: 22 }))
  // console.log(mergeObjects({ name: 'Sirawich' }, { nickname: 'Tonkaow' }))
  
  
  // Spread lab
  // Lab04
  // const nums1 = [1, -2, 3, 4];
  // const nums2 = [8, 3, -8, 1];
  // const nums3 = [5,...nums1, -6,-1 ,...nums2]
  // let sum = nums3.reduce((prv,cur) => {return prv += cur},0)
  // console.log(sum)
  
  // Lab05
  // const array1 = [1,2,3,4,5,6,8,6]
  // function powerThirdIndex(arr){
  //   let res = [...array1]
  //   res[3] **= 2
  //   return res
  // }
  // console.log(powerThirdIndex(array1))
  
  // Lab06
  // function userHobby(fname,lname,...hobby){
  //   let hobbyCount = [...hobby].length
  //   let res = [fname, lname, hobbyCount]
  //   return res
  // }
  // console.log(userHobby('Sirawich','Fonngchai','js','python','html','css'))
  
  // Lab07 
  // function doubleAndReturnArgs(arr,...nums){
  //   let mulNum = nums.map((n) => 2*n)
  //   return arr.concat(mulNum)
  // }
  // console.log(doubleAndReturnArgs([1, 2, 3], 4, 4))
  // console.log(doubleAndReturnArgs([2], 10, 4))
  
  // Lab09
  // function cloneArray(arr){
  //   let res = [...arr]
  //   console.log(res == arr)
  //   return res
  // }
  // console.log(cloneArray([1,2,5,3,6,7]))
  
  // Lab10
  // function cloneObject(obj){
  //   let res = {...obj}
  //   console.log(res == obj)
  //   return res
  // }
  // console.log(cloneObject({name:'John',surname:'Doe'}))
  
  // Destructure lab
  // Lab11
  // let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
  // console.log(first); // 'Maya'
  // console.log(second); // "Marisa"
  // console.log(third); // 'Chi'
  
  // Ans : Array destructuring is order-dependent,So variable first,second and third represent index 0,1,2 of the array respectively.
  
  // Lab12
  // let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  //   'Raindrops on roses',
  //   'whiskers on kittens',
  //   'Bright copper kettles',
  //   'warm woolen mittens',
  // ];
  // console.log(raindrops); // 'Raindrops on roses'
  // console.log(whiskers); // 'whiskers on kittens'
  // console.log(aFewOfMyFavoriteThings); // [Bright copper kettles ,warm woolen mittens]
  
  // Ans : raindrops and whiskers represent index 0,1 of the array respectively.
  // aFewOfMyFavoriteThings is a rest operator which in this case,Include all the remaining subarray that was not destructured
  
  // Lab13
  // let numbers = [10, 20, 30];
  // [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
  // console.log(numbers); //[10,30,20]
  // // Ans : We destructured numbers array and re-assign its own value,Which is:
  // // Replace index 1 with 30
  // // Replace index 2 with 20
  
  // Lab14
  // let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
  // let { numPlanets, yearNeptuneDiscovered } = facts;
  // console.log(numPlanets); //8
  // console.log(yearNeptuneDiscovered); //1846
  // Ans : When we desctructed object with the correct keys,We assign it's value to the variables so:
  // numPlanets == 8
  // yearNeptuneDiscovered == 1846
  
  // Lab15
  // let planetFacts = {
  //   numPlanets: 8,
  //   yearNeptuneDiscovered: 1846,
  //   yearMarsDiscovered: 1659
  // };
  // let { numPlanets, ...discoveryYears } = planetFacts;
  // console.log(discoveryYears); // { yearMarsDiscovered:1659,yearNeptuneDiscovered:1846 }
  // Ans : We use rest operator to get every key that is not numPlanets,Plus the name of "discoveryYears" is not exist as a key in planetFacts Object,
  // So the discoveryYears == the key and value that is not "numPlanets"
  
  // Lab16
  // function getUserData({ firstName, favoriteColor = 'green' }) {
  //   return `Your name is ${firstName} and you like ${favoriteColor}`;
  // }
  // console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // Your name is Alejandro and you like purple
  // // Ans : The argument got destructured into
  // // firstName = 'Alejandro'
  // // favoriteColor = 'purple'
  
  // console.log(getUserData({ firstName: 'Melissa' })); // Your name is Melissa and you like green
  // // Ans : The argument got destructured into
  // // firstName = 'Melissa'
  // // favoriteColor = 'green'(With no argument passed, We set the default value into 'green')
  
  // console.log(getUserData({})); // Your name is undefined and you like green
  // // Ans : The argument got destructured into
  // // firstName = 'undefined' (With no argument passed, And no default value it displays undefined)
  // // favoriteColor = 'green'(With no argument passed, We set the default value into 'green')
  
  // Lab17
  // let guest = 'Jane';
  // let admin = 'Pete';
  
  // [guest,admin] = [admin,guest]
  // console.log(guest,admin)
  
  // Lab18
  // function isEighteen({ firstName, lastName, age}){
  //   console.log(age > 18 ? `Welcome back ${firstName} ${lastName}` : 'You are not allowed')
  // }
  // isEighteen({ firstName:'Sirawich', lastName:'Fongchai', age : 23})
  // isEighteen({ firstName:'John', lastName:'Doe', age : 13})
  // isEighteen({ firstName:'Jane', lastName:'Doe', age : 21})
  
  // Lab19
  // let user = {
  //   name: 'John',
  //   years: 27
  // };
  // let { name: name, years:age,isAdmin=false} = user
  // console.log(name, age, isAdmin)
  
  // let admin = {
  //   name: 'Kaow',
  //   years: 23,
  //   isAdmin : true
  // };
  // console.log(admin)
  // let { name: name, years: age, isAdmin = false } = admin
  // console.log(name, age, isAdmin)
  
  // Lab21
  // let arr = [1, [2, [[[3, 4], 5], 6]]];
  // let [a, [b, [[[c, d], e], f]]] = arr
  // console.log(a,b,c,d,e,f)
  
  // Lab22
  // const obj = { prop: 5, prop2: 10 };
  // let { prop: a, prop2: b} = obj
  // console.log(a,b)
  
  // Lab23
  // let a, b;
  // ({ a, b } = { a: 1, b: 2 });
  // Ans : a == 1, b == 2
  
  // Lab24
  // const [, , , a, b] = [1, 2, 3];
  // Ans : a == undefined, b == undefined Because in there's not index 3,4 in the original array
  
  // Lab25
  // const q = { prop: 5, prop2: [10, 100] };
  // let { prop: x, prop2:[,y]} = q
  // console.log(x,y)
  
  // Lab26
  // const q = {
  //   prop: 'Hello',
  //   prop2: {
  //     prop2: {
  //       nested: ['a', 'b', 'c']
  //     }
  //   }
  // };
  
  // let {prop : x, prop2 : {prop2 : {nested : [,y,]}}} = q
  // console.log(x,y)
  
  // Lab27
  // const names = [
  //   { firstName: 'John', lastName: 'Doe' },
  //   { firstName: 'Jack', lastName: 'Dann' },
  //   { firstName: 'Joe', lastName: 'Dunne' }
  // ];
  // for ({ firstName: fname, lastName: lname} of names){
  //   console.log(`Your full name is ${fname} ${lname}`)
  // }
  
  // Lab28
  // const users = [
  //   { user: "Name1" },
  //   { user: "Name2", age: 2 },
  //   { user: "Name2" },
  //   { user: "Name3", age: 4 }
  // ];
  
  // for ({ user: userName, age: userAge = 'unknown' } of users){
  //   console.log(`Name : ${userName} ,Age : ${userAge}`)
  // }