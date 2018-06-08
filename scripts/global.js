
/* Smooth page transisiton */
var body = document.getElementsByTagName('body')[0];
window.onload = function(){
  var opacity, timer;

  opacity = 0;
  timer = setInterval(function(){
    if(opacity >=1){
      clearInterval(timer);
    }
    body.style.opacity = opacity;
    opacity += 0.1;
  }, 30);
}

/* Background fade-in functionality */
var sun = document.getElementById('sun');
var bg = document.getElementById('bg');
var bgExplContainer = document.getElementById('bg-expl-container');
var bgBox = document.getElementById('bg-box');
var x = document.getElementById('x');


sun.onclick = function(){
  var content = document.getElementById('content');
  var filter = document.getElementById('filter');
  var opacity, timer;

  if(bg.style.zIndex !== "999"){ //fade out the content
    opacity = 1;
    timer = setInterval(function(){
      if(opacity <= 0){
        bg.style.zIndex = "999";
        clearInterval(timer);
          /* Event listener for displaying background-explanation element*/
            x.onmouseover = function(){
              bgBox.style.display = "block";
            };
            document.getElementById('bg-cap').innerHTML = "Bring back the content";
            bgBox.onmouseleave = function(){
              bgBox.style.display = "none";
            };
        }

      content.style.opacity = opacity;
      sun.style.zIndex = "999";
      sun.style.opacity = "1";
      x.style.opacity = 1 - opacity;
      filter.style.opacity = opacity;

      opacity -= 0.1;
    }, 30);
  }
  else{ //fade in the content
    opacity = 0;
    timer = setInterval(function(){
      bg.style.zIndex = "-999";

      if(opacity >= 1){
        clearInterval(timer);
        document.getElementById('bg-cap').innerHTML = "Check out the background-picture";
        x.onmouseover = function(){null};
      }
      content.style.opacity = opacity;
      filter.style.opacity = opacity;
      x.style.opacity = 1 - opacity;
      opacity += 0.1;
    }, 30);
  }
}




/* Thanks to https://leewc.com/articles/javascript-fade-in-out-callback/ for code inspo*/

/* Back to top button */
window.onscroll = function(){
  var toTopBtn = document.getElementById('to-top');
  toTopBtn.style.opacity = window.pageYOffset/400;
}
