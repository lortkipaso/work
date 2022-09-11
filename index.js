$(document).ready(function () {
  $("#btn").click(function () {
    $("#ok").toggle();
  });
});
//
//
$(document).ready(function () {
  $("p").dblclick(function () {
    $(this).hide(function () {
      $(this).addClass("color-1");
    });
    $("div").empty();
  });
});
//
//
$(document).ready(function () {
  $("#kargi").click(function () {
    $("div").animate({
      left: "250px",
      opacity: "0.5",
      height: "+=100px",
      width: "+=150px", //ამ შემთევაში += -ით ჩვენ ყოველ დაჭერაზე ზომას ვუცვლით
    });
  });
});
