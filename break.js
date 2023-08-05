/* for(i = 1; i < 10; i++){
    if (i > 6){
        break;
    }
    console.log(i);
} */

// var roastGiven = 0;
// while (roastGiven < 10){
//     roastGiven++;
//     console.log(roastGiven);
//     if(roastGiven > 5){
//         break;
//     }
// }

// var names = ['Rahim', 'Karim', 'Sofik', 'Mijan', 'Atik'];
// for(var i=0; i<names.length; i++){
//     var nam = names[i];
//     if(nam == 'Sofik'){
//         break;
//     }
//     console.log(nam);
// }

var numbers = [10, 63, 30, 69, 89, 55, 67, 70, 80, 90];
for(var i=0; i<numbers.length; i++){
    var number = numbers[i];
    if(number > 55){
        continue;
    }
    console.log(number);
}