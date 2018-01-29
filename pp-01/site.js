
$('#contactForm').on("submit", function(e) {
  e.preventDefault();

  var DoB= new Date(document.getElementById('DoB').value);
  var currentDate=new Date();
  var birthYear=DoB.getFullYear();
  var currentYear=currentDate.getFullYear();
  var currentAge=currentYear-birthYear;
  if (currentAge<18){
    window.alert("You are not old enough to use this website, please go back to disneyland.")
  }
  else{
    window.alert("Form submitted.")
  }
})
