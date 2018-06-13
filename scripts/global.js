
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


x.onclick = function(){
  if( bgExplContainer.style.display === "none"){
    bgExplContainer.style.display = "block";
    x.innerHTML = "<span><p>Hide explanation</p></span>";
  }
  else{
    bgExplContainer.style.display = "none";
    x.innerHTML = "<span><p>Click for explanation</p></span>";
  }
};


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
            /*x.onclick = function(){
              if( bgExplContainer.style.display = "none"){
                bgExplContainer.style.display = "block";
              }
              else{
                bgExplContainer.style.display = "none";
              }
            };*/
            document.getElementById('bg-cap').innerHTML = "<p>Bring back the content</p>";
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
        document.getElementById('bg-cap').innerHTML = "<p>Check out the background-picture</p>";
      }
      if( bgExplContainer.style.display = "block"){
        bgExplContainer.style.display = "none";
      }
      content.style.opacity = opacity;
      filter.style.opacity = opacity;
      x.style.opacity = 1 - opacity;
      opacity += 0.1;
    }, 30);
  }
}
/* Thanks to https://leewc.com/articles/javascript-fade-in-out-callback/ for code inspo*/

/* Hamburger menu */

var burger = document.getElementById('hamburger');

burger.onclick = function(){
  var nav = document.getElementById('main-nav');
  var bar1 = document.getElementById('bar-1');
  var bar2 =  document.getElementById('bar-2');
  var bar3 =  document.getElementById('bar-3');

  if(nav.style.display ==="none"){
    nav.style.display = 'block';
    document.getElementById('bar-1').classList.add('change-1');
    document.getElementById('bar-2').classList.add('change-2');
    document.getElementById('bar-3').classList.add('change-3');
  }
  else{
    nav.style.display = 'none';
    document.getElementById('bar-1').classList.remove('change-1');
    document.getElementById('bar-2').classList.remove('change-2');
    document.getElementById('bar-3').classList.remove('change-3');
  }
}


/* Back to top button */
window.onscroll = function(){
  var toTopBtn = document.getElementById('to-top');
  toTopBtn.style.opacity = window.pageYOffset/400;
}
