

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  });



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
 
    var myinput = document.getElementById("myInput");


  }

  function filterFunction() {
    var myinput, filter, ul, li, a, i;
    var myinput = document.getElementById("myInput");
    filter = myinput.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }




// находит ближайший Id при нажатии и добовляет к result этого id в инпут

var myinput = document.getElementById("myInput");
var myNumber = document.getElementById("number");

function mySearch(clicked_id){
document.getElementById("myDropdown").classList.toggle("show");
 rezult = document.getElementById("rezult" + clicked_id).innerHTML;
myinput.value = rezult;
 console.log(clicked_id)

  var myNumber = document.getElementById("number");
   var number = document.getElementById( "number" + clicked_id).innerHTML;
  
   Number(number);
  console.log(typeof(number))

  myNumber.value = number;
  myNumber.focus();
}


 

function pageCode(){

    let text = document.createTextNode(myNumber.value);
    text = myNumber.value
    if(text.length < 1){

  console.log('ага расскажешь за номер')
  window.location.href = 
  "index.html";

    }else{
      localStorage.setItem('cart',text);
      window.location.href = 
     "./pageCode/index.html";
    }

 }


