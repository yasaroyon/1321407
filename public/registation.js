$(document).ready(function(){

	$("#usermassage").hide();
	$("#passwardmassage").hide();
	$("#cpasswardmassage").hide();
	$("#emailmassage").hide();
	$("#dobmassage").hide();


    $("button").click(function(){

    	//$(".massage").html("u are");
       //$(".massage").show();
       var user_name;
       user_name= $("#username").val();
       var user_passward;
       user_passward= $("#password").val();
       var user_cpassward;
       user_cpassward= $("#confirmpassword").val();
       var user_email;
       user_email= $("#email").val();
       var user_dob;
       user_dob= $("#dateofbirth").val();

	function validateForm() {
	var x = $("#email").val();
	var atpos = x.indexOf("@");
	var dotpos = x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
	$("#emailmassage").show();
    $("#emailmassage").html("Invalid Email");
    
	return false;}
	else{
			$("#emailmassage").hide();
         //     $("#cpasswardmassage").html(" matched !!!");
		}
				
	}
	function validatecpasswad(){
		var a=$("#password").val();
		var b=$("#confirmpassword").val();
		if(a != b){
          $("#cpasswardmassage").show();
          $("#cpasswardmassage").html("Not matched !!!");
          return false;
			}
			else{
				$("#cpasswardmassage").hide();
         //     $("#cpasswardmassage").html(" matched !!!");
			}
			
    }
   
       if(user_name==''){
       $("#usermassage").show();
       $("#usermassage").html("Invalid Input!!!");
       }
       else{
       	$("#usermassage").hide();
       }
       if(user_passward==''){
       $("#passwardmassage").show();
       $("#passwardmassage").html("Invalid Input!!!");
       }
       else{
       	$("#passwardmassage").hide();
       }
       if(validateForm() && user_email==''){
       $("#emailmassage").show();
       $("#emailmassage").html("Invalid Input!!!");
       }
       
       
       if(validatecpasswad() && user_cpassward==''){
       $("#cpasswardmassage").show();
       $("#cpasswardmassage").html("Invalid Input!!!");
       }
      
       if(user_dob==''){
       $("#dobmassage").show();
       $("#dobmassage").html("Invalid Input!!!");
       }
       else{
       	$("#dobmassage").hide();
       }

       
    });
});