var imageArray = [
  'images-index/landscape3.jpg',
  'images-index/milkshake.jpg',
  'images-index/sunset.jpg'];
var currentImage = 0;
var imageDuration = 4500;
var fadeDuration = 800;

function slideShow() {
  document.getElementById('slideshow').style.backgroundImage="url(" + imageArray[currentImage] + ")";
  setInterval(changeImage, imageDuration);
}

function changeImage() {
  document.getElementById('slideshow').className = "fadeOut";
  setTimeout(fadeIn, fadeDuration)
}

function fadeIn() {
  currentImage++;
  if (currentImage == imageArray.length) {
    currentImage = 0;
  }

  document.getElementById('slideshow').style.backgroundImage="url(" + imageArray[currentImage] + ")";
  document.getElementById('slideshow').className = "";
}

slideShow();
