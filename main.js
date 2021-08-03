
function validateForm(){
    let myName = document.getElementById('name').value;
    let myNumber = document.getElementById('phoneNumber').value;
    let myLocation = document.getElementById('location').value;
    let myFile = document.getElementById('file').value;
    if(myName !='' && myNumber!='' && myLocation!='' && myFile !=''){
        $('#message').slideToggle(1500);
        $('form#myForm').reset();
      

       

    };

    
};