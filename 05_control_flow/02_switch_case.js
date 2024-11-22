
//Switch case is used when we have multiple conditions to check. It is similar to if else ladder.
//Syntax:
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }





const month = "march"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;//if we don't use break, it will execute all the cases below the matched case except default case
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
//return march