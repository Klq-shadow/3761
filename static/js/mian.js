$(function () {
  $(".current_lang").on("mouseover", function () {
    $(".menu_list").show();
  });

  $(".menu_body ul").on("mouseover", function () {
    $(".menu_list").show();
  });

  $(".menu_body ul").on("mouseout", function () {
    $(".menu_list").hide();
  });

  /*  $(".lang_menu").on("click", function () {
    var lang = $(this).attr("data");
    var dataurl = $(this).attr("data-url");
    $.ajax({
      url: "/lang/change",
      type: "post",
      data: { lang: lang },
      success: function (res) {
        if (res.code == 0) {
          alert(res.msg);
        } else {
          location.href = dataurl;
        }
        return;
      },
    });
    return;
  }); */
});
