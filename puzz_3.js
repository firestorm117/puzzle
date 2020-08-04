var txts = [
  "You found our secret notepad.",
  "Our secret scientists in our top secret laboratory have developed a secret ink with help of secret alien technology which can be electronically controlled to appear or disappear. ",
  "You should probably have played this video game after all its still the best seller till date. ",
  "Our top achievement is that we captured a live alien.To our knowledge that being liked flowers,sparkilng items and strangely feels joy in pressing a fellow scientist light board buttons.",
];
const c3=['2','6','R','8','E','9','5','D','K','3'];
const cc3=[9,2,5];
var txt_pos = 0;
var correct_angles = [90, 0, 135, 108, 300, 45];
for (var i = 1; i <= 3; i++) {
    var k=Math.floor(Math.random() * 10);
    if(k==cc3[i-1])
      k=Math.floor(Math.random() * 10);
    $('#task2').append("<button id='bt" + i + "' v='"+k+"'>"+c3[k]+"</button>");
}
$("#keyboard").click(function (e) {
  $("#keyboard_").css("display", "block");
  disp_def()
});

$("#monitor").click(function (e) {
  $("#end").css("display", "block");
  disp_def()
});

$("#tab").click(function (e) {
    $("#tb").css("display", "block");
    disp_def()
});
$("#mobile").click(function (e) {
    $("#ph").css("display", "block");
    disp_def()
});
$("#notes").click(function (e) {
  $("#message").css("display", "block");
  disp_def()
});
$('#clue_sheet').click(function(e){
  $("#color_sheet").css("display", "block");
  disp_def()
})
$('#col_sheet').click(function(){
    $('#col_sheet').css('display','none');
    $('#clue2').css('display','block');
})
$('#clue2').click(function(){
    $('#col_sheet').css('display','block');
    $('#clue2').css('display','none');
})
$("#message").click(function () {
  $("#txt").html(txts[txt_pos]);
  txt_pos++;
  if (txt_pos == 4) txt_pos = 0;
});
$("#turning > area").click(function (e) {
  k = e.target;
  ang = parseInt($(k).attr("s")) + parseInt($(k).attr("angle"));
  $("#c" + k.id).css({ transform: "rotate(" + ang + "deg)" });
  $(k).attr("s", ang);
  check();
});
$("#back").click(function (e) {
    $("#ph").css("display", "none");
    $("#back").css("display", "none");
    $("#end").css("display", "none");
    $("#keyboard_").css("display", "none");
    $("#color_sheet").css("display", "none");
    $("#tb").css("display", "none");
    $("#message").css("display", "none");
    $("#main").css("display", "block");
    $("#home").css("visibility", "visible");
  });
  
  $("#task2 > button").click(function(e){
    bt_change($(e.target).attr('id'));
})
function check() {
  flag = true;
  for (var i = 1; i <= 6; i++) {
    var c=$("#" + i).attr("s");
    var re=Math.floor(c/360);
    c=c-(re*360);
    if ( c!= correct_angles[i - 1]) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    $("#win").css("display", "block ");
    $("#end").css("display", "none");
    $("#back").css("display", "none");
  }
}

function task1_check()
        {
            if($("#answer").val()=='5'){
                $("#task1").css('display','none');
                $("#clue1").css('display','block');
            }
        }
       
function disp_def()
{
  $("#back").css("display", "block");
  $("#main").css("display", "none");
  $("#home").css("visibility", "hidden");
}

function bt_change(btn){
    var b=$("#"+btn);
    var no=b.attr('v');
    no++;
    if(no==10)
        no=0;
    b.html(c3[no]);
    b.attr('v',no);
    var flag=true;
    for(var i=0;i<3;i++)
    {
        if($("#bt"+(i+1)).attr('v')!=cc3[i])
          {  flag=false;
            break;
          }
    }
    if(flag==true)
    {
        $("#task2").css('display','none');
        $("#clue3").css('display','block');
    }
    }