
function validateForm(){
    let myName = document.getElementById('name').value;
    let myNumber = document.getElementById('phoneNumber').value;
    let myLocation = document.getElementById('location').value;
    let myFile = document.getElementById('file').value;

        if(myName==''){
            $('#error1').show(800);
        }
            else{
                $('#error1').hide(300);

            }
        
         if(myNumber===''){
            $('#error2').show(800);
        }else{

            $('#error2').hide(300);
        }
             if(myLocation ===''){
                $('#error3').show(800);

            } else {
                $('#error3').hide(300);

            }
           if (myFile ===''){
                return false;
            }
            if(myName!=''&& myNumber!=''&& myLocation !='' && myFile!=''){
            
                $('#message').slideToggle(1500);
                $('#name').val('');
                $('#phoneNumber').val('');
                $('#location').val('');
                $('#file').val('');
                $('.myButton').fadeOut(400);
                $('.myBtn').slideToggle(1500);
            }
 
    };

    $(document).ready(function() {
    $('.myBtn').click(function(){
        location.reload();

    });
});
    

// scroll up button

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $('.up-btn').fadeIn();
        } else {
            $('.up-btn').fadeOut();
        }
    });

    $('.up-btn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 50);
        return false;
    });

});


    

