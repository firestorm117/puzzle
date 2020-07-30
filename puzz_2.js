var r = 0;
for (var i = 1; i <= 4; i++) {
  $("#pass").append("<button id='bt" + i + "'>0</button>");
}
cor_code = [4, 9, 6, 8];
$("#arrow").click(function () {
  r = r + 30;
  if (r == 360) r = 0;
  $(this).css({ transform: "rotate(" + r + "deg)" });
  dot_normal();
  if (r == 120) {
    $("#d1").css({ "background-color": "red" });
  }
  if (r == 270) {
    $("#d1").css({ "background-color": "blue" });
  }
  if (r == 180) {
    $("#d1").css({ "background-color": "green" });
  }
  if (r == 240) {
    $("#d1").css({ "background-color": "yellow" });
  }
});
function dot_normal() {
  for (var i = 1; i <= 4; i++) {
    $("#d" + i).css({ "background-color": "rgb(218, 226, 230)" });
  }
}

$("pass > button").click(function (e) {
  change($(e.target).attr("id"));
});
function change(btn) {
  var flag = true;
  k = $("#" + btn);
  var no = k.html();
  if (no == 9) no = 0;
  else no++;
  k.html(no);
  for (var i = 1; i <= 4; i++) {
    if ($("#bt" + i).html() != cor_code[i - 1]) {
      flag = false;
      break;
    }
  }
  if (flag == true) $("#done").css("visibility", "visible");
}

//Stage-1

const ip = document.querySelector("#answer");
const pass = document.querySelector("#pass");
const submit = document.querySelector("#submit");

function check() {
  let ans = ip.value;
  if (
    ans == "1:1" ||
    ans == "1 is to 1" ||
    ans == "same" ||
    ans == "equal" ||
    ans == "1/1"
  ) {
    pass.style.visibility = "visible";
    ip.style.display = "none";
    submit.style.display = "none";
    $("#quote").html("Time is the wisest counselor of all");
    $("#quote").append(
      '<p style="color: green;">Impressive! Stage 1 is cleared</p>'
    );
    $("#quote").css({ "text-align": "center" });
  } else {
    $("#quote").append(
      '<p style="color: red;">Sorry, wrong answer! Try again</p>'
    );
  }
}
