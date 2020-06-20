window.addEventListener("load", () => {
  document.querySelector("body").classList.add("loaded");
});
$(window).scroll(function () {
  if ($(window).scrollTop() >= 76) {
    $("nav").addClass("fixed-header");
  } else {
    $("nav").removeClass("fixed-header");
  }
});

let sections = $("section"),
  nav = $("nav"),
  nav_height = nav.outerHeight();

$(window).on("scroll", function () {
  let cur_pos = $(this).scrollTop();

  sections.each(function () {
    let top = $(this).offset().top - nav_height - 50,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find(".nav-link").removeClass("active");
      sections.removeClass("active");

      $(this).addClass("active");
      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
    }
  });
});

nav.find("a").on("click", function () {
  let $el = $(this),
    id = $el.attr("href");

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - nav_height + 100,
    },
    500
  );

  return false;
});

setTimeout(function start() {
  $(".bar").each(function (i) {
    var $bar = $(this);
    $(this).append('<span class="count"></span>');
    setTimeout(function () {
      $bar.css("width", $bar.attr("data-percent"));
    }, i * 100);
  });

  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).parent(".bar").attr("data-percent"),
        },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now) + "%");
          },
        }
      );
  });
}, 600);
