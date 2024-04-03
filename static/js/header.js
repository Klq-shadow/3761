var header = `<div class="head_cont">
<div class="wrap">
  <a href="index.html" class="logo"><img src="static/images/logo2@2x.png" /></a>
  <div class="nav_item">
    <a href="index.html" class="on">首页</a>
    <a href="games.html" class="">安卓游戏</a>
    <a href="apps.html" class="">安卓软件</a>
    <a href="heji.html" class="">合集专题</a>
    <a href="news.html" class="">资讯攻略</a>
  </div>

  <div class="current_box enable_switch">
    <div class="current_lang">English</div>
    <div class="menu_list" style="display: none">
      <div class="menu_body">
        <ul>
          <li class="lang_menu" data="en-us" data-url="https://download.juxia.com/">
            <a class="flag-icon flag-country flag_country_us" href="" hreflang="en">English</a>
          </li>
          <li class="lang_menu" data="vi" data-url="https://download.juxia.com/vi">
            <a class="flag-icon flag-country flag_country_us" href="" hreflang="vi">Việt Nam</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="search-box">
    <input type="text" value="" class="form-control keyword js-keyword special search-keyword" name="keyword" autocomplete="off" data-page="home" placeholder="3761" />
    <span data-url="" class="btn btn-default search-button search-block"></span>
  </div>
</div>
</div>`;
//@牛超 底下这段js代码可以删除
document.addEventListener("DOMContentLoaded", function () {
  var currentUrl = window.location.href;

  var navItems = document.querySelectorAll(".nav_item a");

  navItems.forEach(function (item) {
    if (item.href === currentUrl) {
      item.classList.add("on");
    } else {
      item.classList.remove("on");
    }
  });
});
