// test 
// alert("change")

// collapsible read more -version 1
var coll = document.getElementsByClassName("moreBtn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const carousels = document.querySelectorAll('.program-carousel');
carousels.forEach(carousel => {
  new Flickity(carousel, {
    // cellSelector: '.carousel-cell',
    cellAlign: 'left',
    wrapAround: true,
    // imagesLoaded: true,
    setGallerySize: false,
    // autoPlay: 2000,
    // pauseAutoPlayOnHover: true,
    // resize: false,
    // draggable: true,
    // adaptiveHeight: true,
    // prevNextButtons: true,
    pageDots: false,
    // contain: true
  });
});

// var galleryElems = document.querySelectorAll('.program-carousel');

// for ( var i=0, len = galleryElems.length; i < len; i++ ) {
//   var galleryElem = galleryElems[i];
//   new Flickity( galleryElem, {
//     wrapAround: true,
//     imagesLoaded: true,
//     setGallerySize: false,
//     autoPlay: true,
//     adaptiveHeight: true
//   });
// }

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}