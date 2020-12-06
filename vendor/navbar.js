$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(".link-scroll").on("click", function (e) {
  var tujuan = $(this).attr("href");
  var elementTujuan = $(tujuan);
  $("html, body").animate(
    {
      scrollTop: elementTujuan.offset().top - 50,
    },
    1000,
    "swing"
  );

  e.preventDefault();
});
