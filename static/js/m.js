function HomeScroll(a, b) {
  function g() {
    var g = $(window).scrollLeft(),
      h = $(window).scrollTop(),
      i = $(document).height(),
      j = $(window).height(),
      k = c.height(),
      l = d.height(),
      m = k > l ? f : e,
      n = k > l ? d : c,
      o = k > l ? c.offset().left + c.outerWidth(!0) - g : d.offset().left - c.outerWidth(!0) - g,
      p = k > l ? l : k,
      q = k > l ? k : l,
      r = parseInt(q - j) - parseInt(p - j);
    $(a + "," + b).removeAttr("style"), j > i || p > q || m > h || p - j + m >= h ? n.removeAttr("style") : (j > p && h - m >= r) || (p > j && h - m >= q - j) ? n.attr("style", "margin-top:" + r + "px;") : n.attr("style", "_margin-top:" + (h - m) + "px;position:fixed;left:" + o + "px;" + (j > p ? "top" : "bottom") + ":0;");
  }
  if ($(a).length > 0 && $(b).length > 0) {
    var c = $(a),
      d = $(b),
      e = c.offset().top,
      f = d.offset().top;
    $(window).resize(g).scroll(g).trigger("resize");
  }
}
function Tab_hover(wrap, type) {
  $.each($(wrap), function (idx) {
    let hd = $(wrap).eq(idx).find(".tab_hd .tag");
    let bd = $(wrap).eq(idx).find(".tab_bd");
    if (type == "hover") {
      hd.hover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        if (bd) {
          bd.find(".item").hide().eq($(this).index()).show();
        }
      });
    } else {
      hd.click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        if (bd) {
          bd.find(".item").hide().eq($(this).index()).show();
        }
      });
    }
  });
}

$(function () {
  HomeScroll("#Min_L", "#Min_R"); //RL 滚动

  $(".head_top .menu").hover(function () {
    $(".Meun_lis").stop().slideDown();
  });
  $(".head_top .menu").mouseleave(function () {
    $(".Meun_lis").stop().slideUp();
  });

  Tab_hover(".tab_wrap", "hover");

  if ($(".M2_slide").size() >= 1) {
    new Swiper(".M2_slide", {
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  $(".ranks li").hover(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
  if ($("#hjslider").size() == 1) {
    new Swiper("#hjslider .swiper-container", {
      watchSlidesProgress: true,
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      loopedSlides: 5,
      autoplay: !true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        progress: function (progress) {
          for (i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            var slideProgress = this.slides[i].progress;
            modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.08 + 1;
            }
            translate = slideProgress * modify * 420 + "px";
            scale = 1 - Math.abs(slideProgress) / 5;
            zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform("translateX(" + translate + ") scale(" + scale + ")");
            slide.css("zIndex", zIndex);
            slide.css("opacity", 1);
            if (Math.abs(slideProgress) > 3) {
              slide.css("opacity", 0);
            }
          }
        },
        setTransition: function (transition) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            slide.transition(transition);
          }
        },
      },
    });
  }

  if ($(".Gmslider").size() == 1) {
    new Swiper(".Gmslider", {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  $(".detaile_tab a").click(function (e) {
    $("body,html").animate({ scrollTop: $("#" + $(this).attr("data-pos")).offset().top }, 300);
  });

  // 二维码
  $(document).ready(function () {
    $("#qrcode").each(function () {
      var url = $(this).attr("url");
      var id = $(this).attr("id");
      makeQRCode(id, url);
      $(this).removeAttr("title");
    });
    /* $("#appDetailQrcode2").each(function () {
    var url = $(this).attr("url");
    var id = $(this).attr("id");
    makeQRCode(id, url, 112, 112);
    $(this).removeAttr("title");
  }); */
    //二维码图片
    function makeQRCode(codes, url, width, height) {
      var qrcode = new QRCode(codes, {});
      qrcode.makeCode(url);
    }
  });
});
