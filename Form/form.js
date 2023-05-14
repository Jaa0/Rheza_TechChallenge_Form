document.getElementById("form1").addEventListener("submit",function (a){
    a.preventDefault();
    let inputname = document.getElementById("name").value;
    console.log(inputname);
    if(inputname.length > 3){
        document.getElementById("form1").submit();
    }
    else{
        document.getElementById("validation").innerText = "Name must contain more than 3 characters"
        
       
    }
});
document.getElementById("form1").addEventListener("submit",function (b){
    b.preventDefault();
    let inputname = document.getElementById("name").value;
    console.log(inputname);
    if(!(document.getElementById("name").value =="")){
        document.getElementById("form1").submit();
    }
    else{
        document.getElementById("validation2").innerText = "Please fill the field"
       
    }
});

document.getElementById("form1").addEventListener("submit",function (c){
    c.preventDefault();
    var inputemail = document.getElementById("email").value;
    console.log(inputemail);
    if(!(document.getElementById("email").value ==="")){
        document.getElementById("form1").submit();
    }
    else{
        document.getElementById("validation3").innerText = "Please fill the field"
    }
});
document.getElementById("form1").addEventListener("submit",function (d){
    d.preventDefault();
    var inputemail = document.getElementById("email").value;
    var s = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    console.log(inputemail);
   if(!(inputemail.match(s))){
    form1.classList.remove("valid")
    form1.classList.add("invalid")
    document.getElementById("validation4").innerText = "Your email is invalid"
   }    
   else{
    form1.classList.add("valid")
    form1.classList.remove("invalid")
    document.getElementById("form1").submit();
   }
});
var form = document.getElementById("form1");

document.getElementById("form1").addEventListener("submit", function(e) {
  var radios = document.getElementsByName("gender");
  var checked = false;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      checked = true;
      break;
    }
  }
  if (!checked) {
    document.getElementById("validation5").innerText = "Please select option"
    e.preventDefault();
  }
});











