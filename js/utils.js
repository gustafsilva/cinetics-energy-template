$(document).ready(function ($) {
  /* Transições */
  $("a").click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 800);
  });
  /* Adiciona classe active ao link escolhido caso clicadado */
  $(".nav .nav-link").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
  /* Adiciona classe active ao link escolhido passe pela section */
  var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    $('.active').removeClass('active');

    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });
});