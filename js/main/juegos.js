/* Game A v.1*/

// const min_number = 1;
// const max_number = 4;

// let square_1 = document.getElementById("game_A_square_1");
// let square_2 = document.getElementById("game_A_square_2");
// let square_3 = document.getElementById("game_A_square_3");
// let square_4 = document.getElementById("game_A_square_4");

// let square_1_value;
// let square_2_value;
// let square_3_value;
// let square_4_value;

// let total_theoric_SquareValues = (((max_number + min_number) * ((max_number - min_number) + 1)) / 2);
// let total_realTime_SquareValues = (Number(square_1.innerHTML) + Number(square_2.innerHTML) + Number(square_3.innerHTML) + Number(square_4.innerHTML));

// let square_1_style = square_1.getAttribute("style");
// let square_2_style = square_2.getAttribute("style");
// let square_3_style = square_3.getAttribute("style");
// let square_4_style = square_4.getAttribute("style");

// let click_number = (Number(square_1.innerHTML) > 0) + (Number(square_2.innerHTML) > 0) + (Number(square_3.innerHTML) > 0) + (Number(square_4.innerHTML) > 0) + 1;

// let correct_positions;

// function update_square_values() {

//     click_number = (Number(square_1.innerHTML) > 0) + (Number(square_2.innerHTML) > 0) + (Number(square_3.innerHTML) > 0) + (Number(square_4.innerHTML) > 0) + 1;
//     total_realTime_SquareValues = (Number(square_1.innerHTML) + Number(square_2.innerHTML) + Number(square_3.innerHTML) + Number(square_4.innerHTML));
// }

// function reset_square_styles () {

//     square_1.setAttribute("style","background-color: grey; color: grey;");
//     square_2.setAttribute("style","background-color: grey; color: grey;");
//     square_3.setAttribute("style","background-color: grey; color: grey;");
//     square_4.setAttribute("style","background-color: grey; color: grey;");

// }


// function reset_square_values () {

    

//     if (!(correct_positions === 4) && (total_realTime_SquareValues > 0)) {

//         square_1.innerHTML = 0;
//         square_2.innerHTML = 0;
//         square_3.innerHTML = 0;
//         square_4.innerHTML = 0;
    
//     } else {

//         square_1.innerHTML = 0;
//         square_2.innerHTML = 0;
//         square_3.innerHTML = 0;
//         square_4.innerHTML = 0;

//         const new_square_1_value = Math.floor((Math.random()*(max_number-min_number+1))+ min_number);
//         console.log(new_square_1_value);

//         let new_square_2_value;
//         let new_square_3_value;
//         let new_square_4_value;

//         function calc_square_2_number() {
//             new_square_2_value = Math.floor((Math.random()*(max_number-min_number+1))+ min_number);
//             if (new_square_2_value === new_square_1_value) {
//                 return calc_square_2_number();
//             }else{
//                 console.log(new_square_2_value);
//                 return new_square_2_value;
//             }
//         }

//         function calc_square_3_number() {
//             new_square_3_value = Math.floor((Math.random()*(max_number-min_number+1))+ min_number);
//             if(new_square_3_value === new_square_1_value || new_square_3_value === new_square_2_value){
//                 return calc_square_3_number();
//             }else{
//                 console.log(new_square_3_value);
//                 return new_square_3_value;
//             }
//         }

//         function calc_square_4_number() {
//             new_square_4_value = Math.floor((Math.random()*(max_number-min_number+1))+ min_number);
//             if(new_square_4_value === new_square_1_value || new_square_4_value === new_square_2_value || new_square_4_value === new_square_3_value){
//                 return calc_square_4_number();
//             }else{
//                 console.log(new_square_4_value);
//                 return new_square_4_value;
//             }
//         }

//         square_1_value = new_square_1_value;
//         square_2_value = calc_square_2_number();
//         square_3_value = calc_square_3_number();
//         square_4_value = calc_square_4_number();

//     }

// }

// function restart_game_A () {

//     console.log(total_realTime_SquareValues);
//     console.log(total_theoric_SquareValues);

//     if (total_realTime_SquareValues === total_theoric_SquareValues) {

//         reset_square_styles();
//         reset_square_values();
//         correct_positions = 0;

//     }

//     update_square_values();

// }
    
// reset_square_styles();
// reset_square_values();

// function check_square_1 () {

//     restart_game_A();

//     if (Number(square_1.innerHTML) === 0) {

//         if (square_1_value === click_number) {

//             square_1.setAttribute("style","background-color: darkgreen; color: white;");
//             correct_positions = correct_positions + 1;
//         } else {
//             square_1.setAttribute("style","background-color: darkred ; color: white;");
//         }
//         update_square_values();
//     }
//     square_1.innerHTML = square_1_value;
//     update_square_values();
// }

// function check_square_2 () {

//     restart_game_A();

//     if (Number(square_2.innerHTML) === 0) {

//         if (square_2_value === click_number) {

//             square_2.setAttribute("style","background-color: darkgreen; color: white;");
//             correct_positions = correct_positions + 1;
//         } else {
//             square_2.setAttribute("style","background-color: darkred ; color: white;");
//         }
//         update_square_values();
//     }
//     square_2.innerHTML = square_2_value;
//     update_square_values();
// }


// function check_square_3 () {

//     restart_game_A();

//     if (Number(square_3.innerHTML) === 0) {

//         if (square_3_value === click_number) {

//             square_3.setAttribute("style","background-color: darkgreen; color: white;");
//             correct_positions = correct_positions + 1;
//         } else {
//             square_3.setAttribute("style","background-color: darkred ; color: white;");
//         }
//         update_square_values();
//     }
//     square_3.innerHTML = square_3_value;
//     update_square_values();
// }


// function check_square_4 () {

//     restart_game_A();

//     if (Number(square_4.innerHTML) === 0) {

//         if (square_4_value === click_number) {

//             square_4.setAttribute("style","background-color: darkgreen; color: white;");
//             correct_positions = correct_positions + 1;
//         } else {
//             square_4.setAttribute("style","background-color: darkred ; color: white;");
//         }
//         update_square_values();
//     }
//     square_4.innerHTML = square_4_value;
//     update_square_values();
// }
    

/* Game A v.2*/

