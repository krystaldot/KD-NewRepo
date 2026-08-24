jQuery(document).ready(function($) {
  jQuery(".loader-overlay").fadeOut(1500);
});

// home slider js
jQuery(document).ready(function(){
        jQuery(".main-home-slider").owlCarousel({
            items: 1, 
            loop: true,
            margin: 10, 
            dots: true,
			autoplay: true
        });
    });

// home slider js ends

// offer popup close js

    document.addEventListener('DOMContentLoaded', (event) => {
    // Get the close button element
    const closeButton = document.getElementById('close-offer');

    // Check if the close button exists
    if (closeButton) {
        // Add a click event listener to the close button
        closeButton.addEventListener('click', function() {
            // Get the popup element
            const offerPopup = this.closest('.offer-popup');
            
            // Hide the popup element
            if (offerPopup) {
                offerPopup.style.display = 'none';
            }
        });
    }
});






//logo slider home
jQuery('.logo-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
	arrows: false,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });


jQuery('.client-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
	arrows: false,
	alutoplay: true,
});

// popup js
jQuery(document).ready(function($) {
    // Function to open the modal
    function openModal() {
        $('#exampleModalCenter').modal('show');
    }

    // Function to close the modal
    function closeModal() {
        $('#exampleModalCenter').modal('hide');
    }

    // Trigger modal when Elementor button is clicked
    $('.el-button').on('click', function(e) {
        e.preventDefault(); // Prevent default button behavior
        openModal();
    });

    // Close modal when close button is clicked
    $('.close').on('click', function(e) {
        e.preventDefault(); // Prevent default button behavior
        closeModal();
    });
});





// custom-script.js
jQuery(document).ready(function() {

  var sync1 = jQuery("#sync1");
  var sync2 = jQuery("#sync2");
  var slidesPerPage = 6; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
      items: 1,
      slideSpeed: 4000,
      nav: false,
      autoplay: false, 
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: ['<i class="fa-regular fa-greater-than"></i>', '<i class="fa-regular fa-greater-than"></i>'],
  }).on('changed.owl.carousel', syncPosition);

  sync2
      .on('initialized.owl.carousel', function() {
          sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
          items: slidesPerPage,
          dots: false,
          nav: false,
          smartSpeed: 200,
          slideSpeed: 500,
          slideBy: slidesPerPage, responsive: {
              0: {
                items: 2
              },
          
			  500: {
                items: 2
              },
			  
              767: {
                items: 4
              },
          
              1024: {
                items: 4
              },
          
              1366: {
                items: 4
              }
            }, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
          responsiveRefreshRate: 100
      }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;

      //if you disable loop you have to comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - .5);

      if (current < 0) {
          current = count;
      }
      if (current > count) {
          current = 0;
      }

      //end block

      sync2
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();

      if (current > end) {
          sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
          sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
  }

  function syncPosition2(el) {
      if (syncedSecondary) {
          var number = el.item.index;
          sync1.data('owl.carousel').to(number, 100, true);
      }
  }

  sync2.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = jQuery(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
  });
});

// carousel home

jQuery(document).ready(function() {
    // Initialize the carousel
    jQuery('#myCarousel').carousel({
      interval: 6000, 
      pause: 'hover', 
      wrap: true 
    });
  });


// industries js
jQuery(document).ready(function() {
  jQuery('.box').click(function(){
    var dataTarget = jQuery(this).attr('id');

    jQuery('.box').removeClass('active');
    jQuery('.change-image').removeClass('active');

    jQuery(this).addClass('active');
    jQuery(".change-image[data-target=" + dataTarget +"]").addClass('active');

  })
});

// three images add active class on hover
var animatedBoxes = document.querySelectorAll('.animated-box');

// Add active class to the first box by default
animatedBoxes[0].classList.add('active');

// Loop through each animated box and add event listeners
animatedBoxes.forEach(box => {
    box.addEventListener('mouseover', function() {
        // Remove active class from all boxes
        animatedBoxes.forEach(otherBox => {
            otherBox.classList.remove('active');
        });
        // Add active class to the current box
        this.classList.add('active');
    });
});



// software-slide
jQuery('.software-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
  ]
});		


// header hover js
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  const headerBg = document.querySelector(".header-bg");

  menuItems.forEach(item => {
    item.addEventListener("mouseover", function () {
      headerBg.classList.add("header-hovered");
    });

    item.addEventListener("mouseout", function () {
      headerBg.classList.remove("header-hovered");
    });
  });
});


// custom solution js

function changeImage(imagePath) {
      document.getElementById('mainImage').src = imagePath;
    }

    function hoverImage(imagePath) {
      document.getElementById('travelImg').src = imagePath;
    }






// -----------------------mobile technology section--------------
function showfuction(){
  var dots = document.getElementById("item-empty-box");
  var moreText = document.getElementById("item-show-content");
  var btnText = document.getElementById("item-show-button");

  if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "See more"; 
  moreText.style.display = "none";
  } else {
  dots.style.display = "none";
  btnText.innerHTML = "close"; 
  moreText.style.display = "inline";
  }
}
function techFunction1() {
  var dots = document.getElementById("dots-item1");
  var moreText = document.getElementById("item-list1");
  var btnText = document.getElementById("myBtn-first");

  if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "See more"; 
  moreText.style.display = "none";
  } else {
  dots.style.display = "none";
  btnText.innerHTML = "close"; 
  moreText.style.display = "inline";
  }
}
function techFunction2() {
  var dots = document.getElementById("dots-item2");
  var moreText = document.getElementById("item-list2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "See more"; 
  moreText.style.display = "none";
  } else {
  dots.style.display = "none";
  btnText.innerHTML = "close"; 
  moreText.style.display = "inline";
  }
}
function techFunction3() {
  var dots = document.getElementById("dots-item3");
  var moreText = document.getElementById("item-list3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "See more"; 
  moreText.style.display = "none";
  } else {
  dots.style.display = "none";
  btnText.innerHTML = "close"; 
  moreText.style.display = "inline";
  }
}
function techFunction4() {
  var dots = document.getElementById("dots-item4");
  var moreText = document.getElementById("item-list4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "See more"; 
  moreText.style.display = "none";
  } else {
  dots.style.display = "none";
  btnText.innerHTML = "close"; 
  moreText.style.display = "inline";
  }
}
function techFunction5() {
  var dots = document.getElementById("dots-item5");
  var moreText = document.getElementById("item-list5");
  var btnText = document.getElementById("myBtn5");

  if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "See more"; 
  moreText.style.display = "none";
  } else {
  dots.style.display = "none";
  btnText.innerHTML = "close"; 
  moreText.style.display = "inline";
  }
}
// -----------------end mobile technology----------//

// on load popup

jQuery(document).ready(function($) {
    // Function to open the popup
    function openPopup() {
        $('#popup1').fadeIn();
    }

    // Function to close the popup
    function closePopup() {
        $('#popup1').fadeOut();
    }

    // Open the popup after 4 seconds on page load
    setTimeout(openPopup, 4000);

    // Close the popup when the close icon is clicked
    $(document).on('click', '.close', function(e) {
        e.preventDefault();
        closePopup();
    });

    // Prevent closing when clicking inside the popup content
    $(document).on('click', '.popup', function(e) {
        e.stopPropagation();
    });
});


// chatbot open after loading

(function() {
  function onTidioChatApiReady() {
    setTimeout(function() {
      window.tidioChatApi.open();
    }, 10000); // 1000 milliseconds = 10 seconds
  }
  if (window.tidioChatApi) {
    window.tidioChatApi.on("ready", onTidioChatApiReady);
  } else {
    document.addEventListener("tidioChat-ready", onTidioChatApiReady);
  }
})();



