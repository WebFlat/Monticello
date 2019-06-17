$(document).ready(function() {
  $('.slider-one').slick({
      dots: true,
      // dotsClass: '.slider-dots',
      adaptiveHeight: true,
      arrows: false,
      autoplay: true,
      draggable: true,
      // vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      focusOnSelect: true
  });
  $('.slider-two').slick({
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,

  });




  
});

function initMap() {
  let geo = {
    lat: 40.677963,
    lng: -73.896072
  }
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: geo
  });

  let image = '../img/marker.png';
  let marker = new google.maps.Marker({
    position: geo,
    map: map,
    icon: image,
    title: '91 Nolan'
  });
};
