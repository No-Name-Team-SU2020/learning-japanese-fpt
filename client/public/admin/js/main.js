/* eslint-disable no-undef */
(function ($) {
   
})(jQuery);

(function ($) {
  // USE STRICT
   
  var navbars = ["header", "aside"];
  var hrefSelector =
    'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])';
  var linkElement = navbars
    .map((element) => element + " " + hrefSelector)
    .join(", ");
  $(".animsition").animsition({
    inClass: "fade-in",
    outClass: "fade-out",
    inDuration: 900,
    outDuration: 900,
    linkElement: linkElement,
    loading: true,
    loadingParentElement: "html",
    loadingClass: "page-loader",
    loadingInner: '<div class="page-loader__spin"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "html",
    transition: function (url) {
      window.location.href = url;
    },
  });
})(jQuery);
(function ($) {
  // USE STRICT
   

})(jQuery);
(function ($) {
  // Use Strict
   
  try {
    var progressbarSimple = $(".js-progressbar-simple");
    progressbarSimple.each(function () {
      var that = $(this);
      var executed = false;
      $(window).on("load", function () {
        that.waypoint(
          function () {
            if (!executed) {
              executed = true;
              /*progress bar*/
              that.progressbar({
                update: function (current_percentage, $this) {
                  $this.find(".js-value").html(current_percentage + "%");
                },
              });
            }
          },
          {
            offset: "bottom-in-view",
          }
        );
      });
    });
  } catch (err) {
    console.log(err);
  }
})(jQuery);
(function ($) {
  // USE STRICT
   

})(jQuery);
(function ($) {
  // USE STRICT
   

  // Select 2
  try {
    $(".js-select2").each(function () {
      $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next(".dropDownSelect2"),
      });
    });
  } catch (error) {
    console.log(error);
  }
})(jQuery);
(function ($) {
  // USE STRICT
   

  // Dropdown
  try {
    var menu = $(".js-item-menu");
    var sub_menu_is_showed = -1;

    for (var i = 0; i < menu.length; i++) {
      $(menu[i]).on("click", function (e) {
        e.preventDefault();
        $(".js-right-sidebar").removeClass("show-sidebar");
        if (jQuery.inArray(this, menu) == sub_menu_is_showed) {
          $(this).toggleClass("show-dropdown");
          sub_menu_is_showed = -1;
        } else {
          for (var i = 0; i < menu.length; i++) {
            $(menu[i]).removeClass("show-dropdown");
          }
          $(this).toggleClass("show-dropdown");
          sub_menu_is_showed = jQuery.inArray(this, menu);
        }
      });
    }
    $(".js-item-menu, .js-dropdown").click(function (event) {
      event.stopPropagation();
    });

    $("body,html").on("click", function () {
      for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("show-dropdown");
      }
      sub_menu_is_showed = -1;
    });
  } catch (error) {
    console.log(error);
  }

  var wW = $(window).width();
  // Right Sidebar
  var right_sidebar = $(".js-right-sidebar");
  var sidebar_btn = $(".js-sidebar-btn");

  sidebar_btn.on("click", function (e) {
    e.preventDefault();
    for (var i = 0; i < menu.length; i++) {
      menu[i].classList.remove("show-dropdown");
    }
    sub_menu_is_showed = -1;
    right_sidebar.toggleClass("show-sidebar");
  });

  $(".js-right-sidebar, .js-sidebar-btn").click(function (event) {
    event.stopPropagation();
  });

  $("body,html").on("click", function () {
    right_sidebar.removeClass("show-sidebar");
  });

  // Sublist Sidebar
  try {
    var arrow = $(".js-arrow");
    arrow.each(function () {
      var that = $(this);
      that.on("click", function (e) {
        e.preventDefault();
        that.find(".arrow").toggleClass("up");
        that.toggleClass("open");
        that.parent().find(".js-sub-list").slideToggle("250");
      });
    });
  } catch (error) {
    console.log(error);
  }

  try {
    // Hamburger Menu
    $(".hamburger").on("click", function () {
      $(this).toggleClass("is-active");
      $(".navbar-mobile").slideToggle("500");
    });
    $(".navbar-mobile__list li.has-dropdown > a").on("click", function () {
      var dropdown = $(this).siblings("ul.navbar-mobile__dropdown");
      $(this).toggleClass("active");
      $(dropdown).slideToggle("500");
      return false;
    });
  } catch (error) {
    console.log(error);
  }
})(jQuery);
(function ($) {
  // USE STRICT
   

  // Load more
  try {
    var list_load = $(".js-list-load");
    if (list_load[0]) {
      list_load.each(function () {
        var that = $(this);
        that.find(".js-load-item").hide();
        var load_btn = that.find(".js-load-btn");
        load_btn.on("click", function (e) {
          $(this)
            .text("Loading...")
            .delay(1500)
            .queue(function (next) {
              $(this).hide();
              that.find(".js-load-item").fadeToggle("slow", "swing");
            });
          e.preventDefault();
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
})(jQuery);
(function ($) {
  // USE STRICT
   

  try {
    $('[data-toggle="tooltip"]').tooltip();
  } catch (error) {
    console.log(error);
  }

  // Chatbox
  try {
    var message = $(".au-message__item");
    message.each(function () {
      var that = $(this);

      that.on("click", function () {
        $(this).parent().parent().parent().toggleClass("show-chat-box");
      });
    });
  } catch (error) {
    console.log(error);
  }
})(jQuery);
