document.addEventListener("keydown", function(event) {
  if(event.which == 13){
      var intro = document.getElementsByClassName('intro');
      intro[0].className += "fade";
  }
});
