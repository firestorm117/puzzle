var txts = [
  "You found our secret notepad.",
  "Our secret scientists in our top secret laboratory have developed a secret ink with help of alien technology whick can be electronically controlled to appear or disappear. ",
  "You should probably have played this video game afterall its still the best seller till date. ",
  "Our top secret is that we captured a live alien.To our knowledge that being liked flowers,sparkilng items and strangely fety joy in pressing a fellow scientist light board buttons.",
];
var txt_pos = 0;
$("#keyboard").click(function (e) {
  $("#back").css("display", "block");
  $("#keyboard_").css("display", "block");
  $("#main").css("display", "none");
  $("#home").css("visibility", "hidden");
});

$("#monitor").click(function (e) {
  $("#back").css("display", "block");
  $("#end").css("display", "block");
  $("#main").css("display", "none");
  $("#home").css("visibility", "hidden");
});
$("#back").click(function (e) {
  $("#back").css("display", "none");
  $("#end").css("display", "none");
  $("#keyboard_").css("display", "none");
  $("#message").css("display", "none");
  $("#main").css("display", "block");
  $("#home").css("visibility", "visible");
});
$("#tab").click(function (e) {
  alert("tablet");
});
$("#mobile").click(function (e) {
  alert("phone");
});
$("#notes").click(function (e) {
  $("#message").css("display", "block");
  $("#back").css("display", "block");
  $("#main").css("display", "none");
  $("#home").css("visibility", "hidden");
});
$("#message").click(function () {
  $("#txt").html(txts[txt_pos]);
  txt_pos++;
  if (txt_pos == 4) txt_pos = 0;
});
$("area").click(function (e) {
  k = e.target;
  ang = parseInt($(k).attr("s")) + parseInt($(k).attr("angle"));
  if (ang == 360) ang = 0;
  $(k).attr("s", ang);
  $("#c" + k.id).css({ transform: "rotate(" + ang + "deg)" });
  check();
});
function check() {
  flag = true;
  var correct_angles = [90, 0, 135, 120, 216, 45];
  for (var i = 1; i <= 6; i++) {
    if ($("#" + i).attr("s") != correct_angles[i - 1]) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    $("#done").css("visibility", "visible");
  }
}
