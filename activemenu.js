
const div = document.querySelector('.nav-style');

window.onscroll = function() {
  var top = window.scrollY;
  console.log(top);
  if (top>=100){
    header.classList.add ('active')
  }else{
    header.classList.remove('active');
  }
}