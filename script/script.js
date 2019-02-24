var sliderImg = document.querySelectorAll('.slider-img');
var counter = 1;
function nextImg(){
  var currentImg = document.querySelector('.dis-block');
  currentImg.classList.toggle('dis-block');
  sliderImg[counter].classList.toggle('dis-block');
  counter++;
  if (counter == sliderImg.length) {
    counter = 0;
  }
}
