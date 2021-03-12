// javascript goes here!
"use strict";
let popthis = "Not working";

function alert_output()
{
    //output using popup
    popthis = document.getElementById("txtinput").value;
    alert(popthis);
}

function write_output()
{   
    // output using document write method
    popthis = document.getElementById("txtinput").value;
    document.getElementById("outputline").innerHTML = popthis;
    /*document.write(a);*/
}

function console_output()
{   //output using console
    popthis = document.getElementById("txtinput").value;
    console.log(popthis);
}

function add_numbers()
{   //calc add
    let a = 0, b = 0, r = 0;
    a = document.getElementById("n1").value;
    b = document.getElementById("n2").value;
    r = a + b;
    alert(r);
}

function substract_numbers()
{   //calc minus
    let a = 0, b = 0, r = 0;
    a = document.getElementById("n1").value;
    b = document.getElementById("n2").value;
    r = a - b;
    alert(r);
}

function multiply_numbers()
{   //calc multiply
    let a = 0, b = 0, r = 0;
    a = document.getElementById("n1").value;
    b = document.getElementById("n2").value;
    r = a * b;
    alert(r);
}

function div_numbers()
{   //calc divide
    let a = 0, b = 0, r = 0;
    a = document.getElementById("n1").value;
    b = document.getElementById("n2").value;
    r = a / b;
    alert(r);
}