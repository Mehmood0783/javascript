const accountId = 12445;
let accountName = "Akmal";
var accountEmail = "akmal@gmail.com"; // ab hm var ka use nhi krty due to scope
accountCity = "Sargodha";
console.table([accountId, accountEmail, accountName, accountCity]); //Befor investigation
// investigation on variables

// accountId = 25487; // This is not allowed you cannot change a constent value
accountNmae = "Ali";
accountEmail = "ab@ab.com";
accountCity = "Nankana";

console.table([accountId, accountEmail, accountName, accountCity]); // After investigation

/*
Nots:
1: preffer not to use var due to block scope and functional scope issues....
2: if we declare a variable and dont assign it any value then its value will UNDEFINED....
3: We cannot change constent value if once it is defined.....
*/