"use strict";
// -------- Object --------
const apus = {
    firstName: "Apu",
    lastName: "Sikder",
    phone: 1234567890,
    address: {
        city: "Magura",
        state: "Khulna"
    }
};
console.log("Object:");
for (const key in apus) {
    console.log(`${key}: ${apus[key]}`);
}
// -------- Array --------
const fruits = ["Apple", "Banana", "Mango"];
console.log("\nArray:");
fruits.forEach((fruit) => {
    console.log(fruit);
});
// -------- Tuple --------
const userInfo = ["Apu", 25, true];
console.log("\nTuple:");
console.log(`Name: ${userInfo[0]}`);
console.log(`Age: ${userInfo[1]}`);
console.log(`Is Active: ${userInfo[2]}`);
// -------- Enum --------
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log("\nEnum:");
console.log(`Direction Up: ${Direction.Up}`);
console.log(`Direction Down: ${Direction.Down}`);
console.log(`Direction Left: ${Direction.Left}`);
console.log(`Direction Right: ${Direction.Right}`);
