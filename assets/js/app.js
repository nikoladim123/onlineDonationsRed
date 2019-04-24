var peoplePicture = document.getElementsByClassName('peoplePicture')[0];
var hOne = document.getElementsByClassName('hOne')[0];
var easyFreeWorksBox = document.getElementsByClassName('easyFreeWorksBox')[0];
var divInsideButton = document.getElementsByClassName('divInsideButton')[0];
var watchNowButton = document.getElementsByClassName('watchNowButton')[0];


// function peoplePictureFun() {
//   peoplePicture.style.top = "0";
//   peoplePicture.style.right = "0";
// }

function hOneFun() {
  setTimeout(function () {
    hOne.style.opacity = '1';
  }, 300);
}

function easyFreeWorksBoxFun() {
  easyFreeWorksBox.style.marginLeft = '4.821vw';
  easyFreeWorksBox.style.opacity = '1';
}

watchNowButton.addEventListener('mouseenter',function(){
  divInsideButtonOn();
});

watchNowButton.addEventListener('mouseleave',function(){
  divInsideButtonOff();
});

function divInsideButtonOn() {
  divInsideButton.style.width = '100%';
}

function divInsideButtonOff() {
  divInsideButton.style.width = '0%';
}

window.onload = function(){
  // peoplePictureFun();
  hOneFun();
  easyFreeWorksBoxFun();
}
