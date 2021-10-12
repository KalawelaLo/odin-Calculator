let clear = "";
let cal_screen = "";

const print = function(str) {
    const main_cal_screen = document.getElementById("screen");
    main_cal_screen.textContent = str;
};
const process_button = function(char) {
    if((/[0-9]/).test(char)){
        cal_screen += char;
    } else if (char == "C"){
        cal_screen = clear;
    } else if ((/[+-\/x]/g).test(char)){
        let tmp =  cal_screen + char;
        if((/\d+[x+/-]\d+[x+/-]/).test(tmp)){
            process_num_fun_num();
            cal_screen += char;
        } else if (cal_screen == ""){
            cal_screen = '0' + char;
        } else {
            cal_screen += char;
        }
    } else {
        if ((/\d+[x+/-]\d+/).test(cal_screen)){
            process_num_fun_num();
        } else {
            cal_screen = clear;
        }      
    }
    print(cal_screen);
};

const process_num_fun_num = function() {
    let funs = ["x","/","+", "-"];
    let ind = -1;
    for (let i = 0; i < funs.length; i++ ){
        if (cal_screen.includes(funs[i])){
            ind = i;
            break;
        }
    }
    console.log(ind);
    if (ind != -1){
        let numbers = cal_screen.split(funs[ind]);
        let number_1 = parseInt(numbers[0]);
        let number_2 = parseInt(numbers[1]);
        console.log(number_1, " ", funs[ind], " " , number_2);
        if (ind == 0){
            cal_screen = number_1 * number_2;
        } else if (ind == 1){
            cal_screen = number_1 / number_2;
        } else if (ind == 2) {
            cal_screen = number_1 + number_2; 
        } else {
            cal_screen = number_1 - number_2;  
        }
    } else {
        cal_screen = clear; 
    }
}

const button_list = document.getElementsByClassName("button_cal");
for (let button of button_list){
    button.addEventListener("click", function (){
        process_button(this.textContent);
    })
}