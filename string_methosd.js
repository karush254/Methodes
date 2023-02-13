alert("Hello GARUSH JAN This is a function of string,number and array:   ");

//length հատկությունը վերադարձնում է տողի երկարությունը՝

// let txt = "hello world 26 barv ashxarh es im an ush hayastani 25245    "
// let txt2 = txt.length
// console.log(txt2);

/*slice()-ը հանում է տողի մի մասը և վերադարձնում է արդյունահանված մասը նոր տողի մեջ:
Մեթոդը վերցնում է 2 պարամետր՝ մեկնարկային դիրք և վերջի դիրք (վերջը ներառված չէ):
և նաւ կարող է մինուսով արժեքներ վեևցնել և դա անում է վերջից։
*/

// let text = "barev, ashxarh, hello,1 hello world";
// let text2 = text.slice(-9,-6);
// console.log(text2);

/*
substring()-ը նման է slice(-ին):
Տարբերությունն այն է, որ 0-ից փոքր սկզբի և վերջի արժեքները ենթատողում () դիտարկվում են որպես 0:
*/

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(5,8);
// console.log(part);

//Replace() մեթոդը փոխարինում է նշված արժեքը տողի մեկ այլ արժեքով.

// let txt = "Es Im anush Hayastani"
// let txt2 = txt.replace("Im","barev")
// console.log(txt2);

// Տողը վերածվում է մեծատառի toUpperCase():

// let txt = "barev dzez im anush Joxovurd"
// let txt3 = txt.toUpperCase()
// console.log(txt3);

// Տողը վերածվում է փոքրատառի toLowerCase():

// let txt = "HELLO WORLD CRISTIANO RONALDO MY NAME IS KVARATSXELIA"
// let txt3 = txt.toLowerCase()
// console.log(txt3);

// JavaScript String concat() concat()-ը միացնում է երկու կամ ավելի տող.

// let hello = "hello"
// let world = "world"
// let barevAshxar = hello.concat("  ",world)
// console.log(barevAshxar);

//JavaScript տողերի կրճատում () Trim() մեթոդը հեռացնում է տողի երկու կողմերից բացատը.

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();

// console.log(text2);

//TrimStart() մեթոդը աշխատում է trim()-ի պես, բայց հեռացնում է բացատը միայն տողի սկզբից

// let trim = "      hello world                     "
// let trim2 = trim.trimStart()
// console.log(trim2);

//TrimEnd() մեթոդն աշխատում է trim()-ի պես, բայց հեռացնում է բացատը միայն տողի վերջից։

// let end = "       barev              "
// let result = end.trimEnd()
// console.log(result);

//padStart() մեթոդը լրացնում է տողը մեկ այլ տողով

// let padding = "6"
// let padding2 = padding.padStart(8, "x")
// console.log(padding2);

// let padding = "6"
// let padding2 = padding.padStart(4, "0")
// console.log(padding2);

// let numb = 5;
// let text = numb.toString();
// let padded = text.padStart(4,"0");
// console.log((padded));

// let numb = 5;
// let text = numb.toString();
// let padded = text.padEnd(4,"0");
// console.log((padded));

//CharAt() մեթոդը վերադարձնում է նիշը տողի նշված ինդեքսով (դիրքում).

// let text = "HELLO WORLD";
// let char = text.charAt(6);
// console.log(char);

// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// console.log(char);

// let text = "HELLO WORLD";
// let char = text[0];
// console.log(char);

// Տողը կարող է վերածվել զանգվածի split() մեթոդով.

// const str = "Ramos better than Van Dijk";

// let txt = str.split(' ');
// console.log(txt[3]);

// let chars = str.split('');
// console.log(chars[8]);

// let strCopy = str.split();
// console.log(strCopy);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let sum = function (arr) {
//   let aggr = 0
//   arr.forEach(function (value) {
//     aggr += value
//   });
//   return aggr
// };

// alert(sum([2,3,5,7]))

/////////////////////////////////////////////////////

// let sum2 = [9,3,4,10].reduce(function(aggr,value) {
//   return aggr + value;
// }, 0);

// alert(sum2)

/////////////////////////////////////////////////////////////////////////////////

// let a = [
//   {
//     name: "Hrant",
//   },

//   {
//     age: 43,
//   },

//   {
//     phone: "2546824",
//   },
// ];

// let b = a.reduce(function (aggr, value) {
//   if (value.name != undefined) {
//     aggr.name = value.name;
//   }
//   if (value.age != undefined) {
//     aggr.age = value.age;
//   }
//   if (value.phone != undefined) {
//     aggr.phone = value.phone;
//   }
//   return aggr
// }, {});

// alert(JSON.stringify(b,undefined,2))

// let map = function (arr,fun) {
//   return arr.reduce(function (aggr,value,i) {
//     aggr[i] = fun(value);
//     return aggr
//   }, []);
// };

// alert(map([3,8,1,0], function (value) {
//   return value * 2;
// }));

// function toNumber(binaryStr) {
//   return binaryStr.split("").map(function (numberStr) {
//     /return +numberStr
//   }).reverse().map(function (value,i) {
//     if (value === 1){
//       return Math.pow(2,i)
//     }
//     return 0;
//   }).reduce(function (aggr,value) {
//     return aggr + value;
//   },0)
// }

// alert(toNumber("101"));

// let a = "hello world";
// let b = a.toUpperCase()
// alert(a)
// console.log(b);

///////////////////////////////////////////////////////////

// function nameToUpper(name) {
//   return name.substring(0,1).toUpperCase()+name.substring(1, name.length).toLowerCase();
// }

// alert(nameToUpper("harutiK"))

// let a = "i went to the store"
// let b = a.split("t")
// alert(b)

//////////////////////////////////////////////////////////

// function foo(name) {
//   let names = name.split(" ");
//   let upperNmaes =  names.map(function (val) {
//     return (
//       val.substring(0, 1).toUpperCase() +
//       val.substring(1, val.length).toLowerCase()
//     );
//   });
//    return upperNmaes.join(" ")
// }

// alert(foo("cristian eriksen daniai"));

// let a = "who is the bomb ";
// let b = a.replaceAll("bomb", "best person ever");
// alert(b)

// let a  = "this person went to the store and purchesed a car :)"
// let b = a.search("store")
// alert(b)

// unshift methodov menq karox enq xangvacin element avelacnel demic
// let x = [7,10,22]

// let unshift = function (arr,val) {
//   let i = arr.length-1;
//   while (i >= 0) {
//     arr[+1]= arr[i]
//     i -= 1;
//   }
//   arr[0] = val
// }

// unshift(x,99)
// alert(x)
////////////////////////////

// let x = [7,10,22]
// x.unshift(99)
// alert(x)

// isk shifty jnjeky demic elementin u arancin zangvaci mej kpahe
// let x = [7,10,22];
// x.shift()
// alert(x)

/////////////////////////////////////

// Pushy elemente brtum etevnic

// let x = [7,10,22]
// x.push(999)
// alert(x)
// ////////////////////////// isk popy hanum e etevic nuyn shifti u unshifti logikane hamarya prosty etevic
// let x = [7,10,22]
// x.pop()
// alert(x)

//////////////////////////////////////////////////
// let x = [7, 10, 22, 23];
// let y = [8, 14, 56, 74];
// let concat = function (a, b) {
//   let result = [];
//   a.forEach(function (val) {
//     result.push(val);
//   });
//   b.forEach(function (val) {
//     result.push(val);
//   });
//   return result;
// };

// alert(concat(x,y))
////////////////////////////////////////////
//concat function vornor erku arraynery karegy irar
// let x = [7, 10, 22, 23];
// let y = [8, 14, 56, 74];
// alert((x.concat (y)))
//////////////////////////////////////////////
let x = [7, 10, 22, 23, 44, 100, 010, 54];
let findindex = function (arr, fun) {
  let i = 0;
  while (i < arr.length) {
    if (fun(arr[i])) {
      return i
    }
    i++;
  }
};

alert(findindex(x, function (val) {
  return val === 100
}))