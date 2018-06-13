/* For later use
var imgs = document.getElementsByTagName('img');
var zoomBox = document.getElementById('zoom');

var i;
for(i = 0; i < imgs.length; i++){
  imgs[i].onclick = zoom;
}

var close = document.getElementById('close');
close.onclick = function(){
  zoomBox.style.display = "none";

}

function zoom(){
  var src = this.getAttribute('src');
  var zoomImg = document.getElementById('img')
  zoomImg.style.background = "url('" + src + "') no-repeat";
  zoomImg.style.backgroundSize = "contain";
  zoomBox.style.display = "block";
}
*/
