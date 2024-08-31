jQuery(document).ready(function ($) {
  // Function to update the height of the .dotted-line
  function updateDottedLineHeight() {
    var $howItWorksSection = $(".how-it-works-section");
    var $dottedLine = $(".dotted-line");
    var $lastStep = $(".progress-step.last-step");

    // Get the current scroll position and the position of the .how-it-works-section
    var scrollTop = $(window).scrollTop();
    var sectionTop = $howItWorksSection.offset().top;
    var sectionHeight = $howItWorksSection.outerHeight();
    var windowHeight = $(window).height();

    // Calculate 30% from the top of the window
    var triggerPoint = scrollTop + windowHeight * 0.3;

    // Check if .how-it-works-section is in view
    if (
      triggerPoint > sectionTop &&
      triggerPoint < sectionTop + sectionHeight
    ) {
      // Calculate the relative scroll progress within the section
      var progress = (triggerPoint - sectionTop) / (sectionHeight * 0.7); // Adjust the factor to control the height increase

      // Calculate the new height for the .dotted-line
      var maxHeight = $lastStep.offset().top - $dottedLine.offset().top;
      var newHeight = progress * maxHeight;

      // Set the height but cap it at maxHeight
      $dottedLine.height(Math.min(newHeight, maxHeight));
    }
  }

  // Attach the update function to the scroll event
  $(window).on("scroll", updateDottedLineHeight);

  // Run the update function initially
  updateDottedLineHeight();
});

jQuery(document).ready(function ($) {
  $(".toggle-btn-menu").on("click", function (event) {
    $(this).toggleClass("active"); // Replace 'active' with the class you want to toggle
  });
});
jQuery(document).ready(function ($) {
  $(".menu-link").on("click", function () {
    // Remove the 'active-menu-link' class from all '.menu-link' elements
    $(".menu-link").removeClass("active-menu-link");

    // Add the 'active-menu-link' class to the clicked element
    $(this).addClass("active-menu-link");
  });
});
jQuery(document).ready(function ($) {
  var lastScrollTop = 0;
  var $btnFixed = $(".btn-fixed");
  var delta = 30; // Amount of scroll before showing/hiding

  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();

    if (Math.abs(scrollTop - lastScrollTop) >= delta) {
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        $btnFixed.css({
          right: "-33%",
          transition: "right 0.3s ease",
        });
      } else {
        // Scrolling up
        $btnFixed.css({
          
          right: "30px",
          transition: "right 0.3s ease",
        });
      }
      lastScrollTop = scrollTop;
    }
  });
});
