//CALCULATOR PROGRAM

const dispaly= document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value="";
}

function calculator(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="Error";
    }
}