
/*alert("Hello");*/

//for set focus in the username textbox
window.onload = function() {
  document.getElementById("username").focus();
};

/*LOGIN*/

function login2(){
 var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if(username == "admin" && password=="12345"){
   window.location.href = "welcome.html";
   /*window.location.assign("welcome.html");*/
    console.log("login realizado");        
    alert("welcome to my website!");
   
  }else{    
    window.location.href = ("home.html");
    /*window.location.assign("home.html");*/
    alert("User or Password Invalid!");
  }
}
