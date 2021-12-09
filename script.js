let adElement;
window.addEventListener('DOMContentLoaded', (event) => {

  adElement = document.getElementById('ad');


  window.setTimeout(function(){

    adElement.style.visibility = "visible";

  }, 3000);



}); 
