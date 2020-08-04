var txts = [
  "Dr.LUCRETIUS HARRINGTON",
  "Dr.Lucretius Harrington was one of the world's leading scientists in field of alien technology.It was in the year 1984 when he found his greatest discovery.",
  "Dr.Harrington's to sucess was study of a live alien species 'Nebrai' .His strange results concluded that the alien liked flowers ,sparkling items and strangely feels joy in pressing a fellow scientist light board buttons. ",
  "Dr.Harrington always kept his destkop locked with strange puzzles.He also liked to play a world famous game which is one of the best sellers till date and also holds a world record for most ported video game tiltle .Afer all it was released on day of his greatest discovery.",
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
            if($("#answer").val()=='1984'){
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