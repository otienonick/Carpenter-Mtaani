// $(document).ready (function() {
//     $(".myButton").click (function() {
//         alert("yes")  
//     });
// }); 

$(document).ready(function(){
    $('#myModal').hide();
});

function validate() {
    var myName = document.getElementById("name");
    var myEmail = document.getElementById("email");
    var myMessage = document.getElementById("message");
    if(myName.value!="" && myEmail.value!="" && myMessage.value!="" && myMessage.value.length>20 ) {
        alert("thank you")
    } 
}