//test

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

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
var items = document.querySelectorAll(".timeline li");

// code for the isElementInViewport function

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
