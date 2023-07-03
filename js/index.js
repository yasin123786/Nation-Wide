// ------------------------------change text----------------------------
MediaQueryList
function changeTextAndImage_1() {
  document.getElementById("text-1").style.display = "block";
  document.getElementById("text-2").style.display = "none";
  document.getElementById("text-3").style.display = "none";
  document.getElementById("text-4").style.display = "none";
  document.getElementById("1").style.backgroundColor = "#C2CF10";
  document.getElementById("1").style.color = "black";
  document.getElementById("2").style.backgroundColor = "#2D3C51";
  document.getElementById("2").style.color = "white";
  document.getElementById("3").style.backgroundColor = "#2D3C51";
  document.getElementById("3").style.color = "white";
  document.getElementById("4").style.backgroundColor = "#2D3C51";
  document.getElementById("4").style.color = "white";

  var img = document.getElementById('image');
  img.src = './image/section-img-1.jpg';
}
function changeTextAndImage_2() {
  document.getElementById("text-1").style.display = "none";
  document.getElementById("text-2").style.display = "block";
  document.getElementById("text-3").style.display = "none";
  document.getElementById("text-4").style.display = "none";
  document.getElementById("2").style.backgroundColor = "#C2CF10";
  document.getElementById("2").style.color = "black";
  document.getElementById("1").style.backgroundColor = "#2D3C51";
  document.getElementById("1").style.color = "white";
  document.getElementById("3").style.backgroundColor = "#2D3C51";
  document.getElementById("3").style.color = "white";
  document.getElementById("4").style.backgroundColor = "#2D3C51";
  document.getElementById("4").style.color = "white";

  var img = document.getElementById('image');
  img.src = './image/section-img-2.jpg';
}
function changeTextAndImage_3() {
  document.getElementById("text-1").style.display = "none";
  document.getElementById("text-2").style.display = "none";
  document.getElementById("text-3").style.display = "block";
  document.getElementById("text-4").style.display = "none";
  document.getElementById("3").style.backgroundColor = "#C2CF10";
  document.getElementById("3").style.color = "black";
  document.getElementById("2").style.backgroundColor = "#2D3C51";
  document.getElementById("2").style.color = "white";
  document.getElementById("1").style.backgroundColor = "#2D3C51";
  document.getElementById("1").style.color = "white";
  document.getElementById("4").style.backgroundColor = "#2D3C51";
  document.getElementById("4").style.color = "white";

  var img = document.getElementById('image');
  img.src = './image/section-img-3.jpg';
}
function changeTextAndImage_4() {

  document.getElementById("text-1").style.display = "none";
  document.getElementById("text-2").style.display = "none";
  document.getElementById("text-3").style.display = "none";
  document.getElementById("text-4").style.display = "block";
  document.getElementById("4").style.backgroundColor = "#C2CF10";
  document.getElementById("4").style.color = "black";
  document.getElementById("3").style.backgroundColor = "#2D3C51";
  document.getElementById("3").style.color = "white";
  document.getElementById("2").style.backgroundColor = "#2D3C51";
  document.getElementById("2").style.color = "white";
  document.getElementById("1").style.backgroundColor = "#2D3C51";
  document.getElementById("1").style.color = "white";

  var img = document.getElementById('image');
  img.src = './image/section-img-4.jpg';

}

// ------------------slider----------------------

var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 5,
  sliderPerGroup: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
