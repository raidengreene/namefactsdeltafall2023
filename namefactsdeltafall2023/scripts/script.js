// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
// code here
let user_name = $("#user_name").val()
$("#btn").click(function(){
    let user_name = $("#user_name").val()
    let converted = ""
    let sum1 = 0
    let E_or_O =""
    for (var i = 0; i < user_name.length; i++) {
        converted += user_name[i].charCodeAt(0).toString(2) + " ";
    }
    
    
    $("#converted").text(converted);
    for (var i = 0; i < converted.length; i++) {
        sum1 += converted[i];
    }
    if (sum1 % 2 == 0) {
        E_or_O = "Your binary number is even!"
    } else {
        E_or_O = "Your binary number is odd!"
    }
    $("#E_or_O").text(E_or_O);
  });

});
