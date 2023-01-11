
console.clear();
console.log("-------Comparison Operation--------"); // مقارنة
/*
    == Equal متساوي
    != Not Equal غير متساوي


    === Identical تطابق
    !== Not Identical لم تكن متطابقة

     > Larger  أكبر
     <= Larger Than or Equal أكبر من أو يساوي

      < Smaller Than  اصغر من
      <= Smaller Than or equal أصغر من أو يساوي
*/

console.log(100 == "100"); // compare value  equal  ----> true
console.log(-100 == "-100"); // compare value only ---> true

console.log(100 != "100"); // false
console.log(100 === "100"); // false  compare value +  type

console.log(100 !== "100"); // true  becouse not identical
console.log(100 !== 100); // flase becouse nicht right, becouse we have 100 seem

console.log(10 > 20);
console.log(10 > 100);
console.log(10 >= 10);

console.log(10 < 20);
console.log(30 < 30);
console.log(30 <= 30);

console.log("Omer".length === "Imad".length);

console.log("------Logical Operator---");

/*

Logical Operators منطقي
-- ! Not 
-- && And 
-- || or

*/

console.log(true); // true
console.log(!true); // false
console.log(10 == "10"); // true
console.log(!(10 == "10")); //false

console.log((10 == "10" && 10 > 8) || 10 > 10);

console.log(100 !== "100" || 10 >= 12);
console.log(100 !== "100" && 20 < 30);

console.log("-----if conditions -------");
let price = 100;
let dicount = true;
let country = "Deutland";
let heimat = "berlin";
let rabat = 20;
let übernachten = "drei tage";
let age = 21;

if (dicount === false) {
    price -= rabat;
} else if (heimat !== "berlin") {
    if (age >= 21 && übernachten === "vier tage") {
        price -= rabat;
    } else age === 21;
    price -= rabat;
} else if (country !== "Deutland") {
    price -= rabat + 30;
} else if (dicount === true) {
    price -= rabat;
}
console.log(price);

console.log("----Nested if conditions-------");

// nesdet bedeutet machen wir  if condition in dem if  z.b ^

console.log("---------conditional Ternary  Operator------");
/*
conditional Ternary  Operator
*/
let name = "Alisawi Imad Ali and Omer Ali";
let firstNmae = " Omer ";
let ageI = 30;

name === "imad" ? console.log(" omer ") : console.log(ageI);
// wir können es verkuzen und es war

let result = name !== "Imad" ? " Omer " : ageI;
console.log(result);
console.log(`Hallo beide in berlin ${firstNmae === "Omer" ? 30 : name}`);

ageI < 20
    ? console.log(20)
    : ageI > 20 && ageI < 50
        ? console.log("20 between 50")
        : ageI <= 70
            ? console.log("Larger Then 70")
            : console.log("Unknown");

console.log("---------nullish Coalescing Operator And Logical or---------");
/*
nullish Coalescing Operator And Logical or
Locical or || منطقي أو
Null + Undefined  + Any Falsy  value
Nullish Coalesing Operator ?? عامل الائتلاف لاغي
 --- Null + Undefined 

*/

console.log(Boolean(100));
console.log(Boolean(0));
console.log(Boolean(-100));
console.log(null);
console.log(undefined);
let kostet = 0;

console.log(`The Price is ${kostet ?? 200}`);
console.log(`The Price is ${kostet || 200}`);








console.log("----------if challenge----------");
const c = 10;

if (c === 100) {
    console.log(20);
} else if (c > 11 && c <= 30) {
    console.log(" 10 to 30");
} else if (c < 55) {
    console.log("onknow");
}

console.log("<--------challenge----->");

let st = "liebe imad Alisawi";

if ((st.length * 2).toString() === "22") {
    console.log("Good");
} else if ((st.length * 3).toString() === "54") {
    console.log("54 buchstahben ");
}

if ((st.slice(6, 10).repeat(2)) === "imadimad") {
    console.log("imad imad");
}

if (st[st.indexOf("m")].toLowerCase() === "m") {
    console.log("Gut m");
}



// if(st.toString() === st){
//     console.log("good string ")
// }

if (typeof st !== st) {
    console.log("not string")
}

// ohne typeof wechselt es nicht die nummber zu zeigen
if (typeof st.toString() === "number") {
    console.log("string ist nicht  sicher");
} else if (typeof st.length === "number") {

    if (st.slice(0, 10).toUpperCase() !== "LIEBE IMAD") {
        console.log("name groß gezeigt");
    } else if (st.slice(0, 16).toLowerCase() === "Liebe imad alisa") {
        console.log("klein name gezeigt");
    }
}



console.log("---------------swtich statement-----------")

/*
switch 

*/ 


let month = 4;

switch (month){
    default:
        console.log("unkonw days");
        break;
    case 0:
        console.log("märz");
        break;
    case 4 >= 4:
            console.log("Aprel");
            break;
          
}


console.log("----------Switch and if Condition Challenge--------")

let jop = "Manger";
let Salary = 0;

switch (jop){
    case "Manger":
    Salary = 8000;
    console.log(`Salary Is ${Salary}`);
    break;
    case "jop":
    case "IT":
        Salary = 7000;
        console.log(`Salary Is ${Salary}`);
        break;

    case "Desaner":
        Salary = 5000 ;
        console.log(`Salary is ${Salary}`);
        break;
        default:
            console.log("unkonw is")

}

let holidays = 0;
let Monay = 0 ;

if(holidays === 0 && holidays === 1){
   let Monay= 5000;
    console.log(`monay is  ${Monay}`);
}else if(holidays >= 4){
   let Monay = 3000;
    console.log(`monay is  ${Monay}`);

}else if (holidays <= 10){
    Monay = 1000;
    console.log(`monay is ${Monay}`);

}else{
    Monay = Monay;
    console.log(`monay is ${Monay}`);
}

console.log("----------------Arreays-----------");

/*
Arrays  --->  المصفوفات
---  Create Array [Tow Methods ] new Aeeay () + []
---  Access التمكن من Array Elements
---  Nested Arrays 
---  change Arrays Elements
---  check for Array.isArray
*/

let myfrinds = ["Imad" , "Omer" , "Amer", "Mama",["Alaa", "Ahud", "Aber"]];
console.log(`hallo Ms ${myfrinds[0]}`);
console.log(`hallo Ms ${myfrinds[2][1]}`);// hier holen wie die name und denn die was wir brachen buchstaben...

console.log(`hallo myschwster ${myfrinds[3][1][3]}`);// nested beim Arrays

console.log(myfrinds);
myfrinds[0]= "Alisawi"; // oder  so use ["Alisawi","Imad"]
console.log(myfrinds);



console.log(Array.isArray(myfrinds)); // ist treu 
// Array ist object


console.log("----------Using Length With Arrays-------")
/*
-- Arrays Methods
-- Length

*/
// Index Start From 0 [0,1,2,3]
let myBürder = ["Omer" , "Amer", "Ali", "Imad"];
console.log(myBürder.length) // length 4

console.log(myBürder);
myBürder[3] = "Alisawi";
console.log(myBürder);

//index kommt vor length mit 1
// index fängt mit 0 an
// length fägnt mit 1 an





let main  = ["Omer" , "Amer", "Ali", "Imad"];

console.log(myBürder.length);
// myBürder[3] = "Alisawi";
// myBürder[myBürder.length] = "alisawi" hier fügt es zu
myBürder[myBürder.length-1] = "Almansuri"; // lösche  ein wort und denn kommt das was ich hingefügt hatte
console.log(myBürder);

myBürder.length = 3;// hier bringt wie viel ich brauche.
console.log(myBürder);
