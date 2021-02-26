// javascript goes here!
"use strict";
let a = "Not working";

function alert_output()
{
    //output using popup
    a = document.getElementById("txtinput").value;
    alert(a);
}

function write_output()
{   
    // output using document write method
    a = document.getElementById("txtinput").value;
    document.getElementById("outputline").innerHTML = a;
    /*document.write(a);*/
}

function console_output()
{   //output using console
    a = document.getElementById("txtinput").value;
    console.log(a);
}



