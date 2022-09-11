$(document).ready(function () {
  $("#btn-1").click(function () {
    var div = $("div");
    div.animate({ height: "300px", opacity: "0.4" }, "slow");
    div.animate({ width: "300px", opacity: "0.8" }, "slow");
    div.animate({ height: "100px", opacity: "0.4" }, "slow");
    div.animate({ width: "100px", opacity: "0.8" }, "slow");
  });
});
// $(document).ready(function () {
//   $("btn").click(function () {
//     $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
//   });
// });
$(document).ready(function () {
  $("#btn-1").click(function () {
    alert("Value: " + $("#p1").text("kai dzma"));
  });
});
// $(document).ready(function(){
//   $("button").click(function(){
//     alert($("#w3s").attr("href"));
//   });
// });
// აბრუნებს href მიცეუმულ ლინკს ამ შემთვევაში w3school.com
// ასევე შეგვიძლია attr('href','youtube.com') ასე შევუცვალოთ ლინკის ვალიუ
// text(),html(),val() ასევე შეგვიძლია გამოვიყენოთ value მისათითებლად მაგ: text('oki doki') value დააბრუნებს ამას
// $(document).ready(function(){
//   $("#btn1").click(function(){
//     $("#test1").text("Hello world!");
//   }); ეს არის მაგალითი
