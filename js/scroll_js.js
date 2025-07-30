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

jQuery(document).ready(function ($) {
  // Function to update the anchor tag's href
  function updateAnchorHref() {
    var name = $('input[name="name"]').val().trim();
    var subject = $('input[name="subject"]').val().trim();
    var message = $('textarea[name="message"]').val().trim();

    if (name && subject && message) {
      var newHref =
        "mailto:muhammaddaniyal4768@gmail.com?subject=" +
        encodeURIComponent(subject + " - " + name) +
        "&body=" +
        encodeURIComponent(message);

      $("a#emailLink").attr("href", newHref);
      $(".btn-wrapper").removeClass("disabled"); // Enable the wrapper
    } else {
      $("a#emailLink").attr(
        "href",
        "mailto:muhammaddaniyal4768@gmail.com?subject=empty&body=empty"
      );
      $(".btn-wrapper").addClass("disabled"); // Disable the wrapper
    }
  }

  // Event listeners for the inputs
  $('input[name="name"], input[name="subject"], textarea[name="message"]').on(
    "input",
    function () {
      updateAnchorHref();
    }
  );

  // Initially disable the wrapper
  updateAnchorHref();
});
