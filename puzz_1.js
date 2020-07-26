for(var i=1;i<=5;i++)
{
    $('#pass').append("<button id='bt"+i+"'>0</button>");
}
cor_code=[0,4,7,8,2];
step1 = false;
function step_1() {
    step1 = true;
    alert("Your first step is to find x");
}
$("#step2").click(function(){
    if (step1 == true) {
        $("#code_map").css("visibility","visible");
}
})
$('button').click(function(e){
change($(e.target).attr('id'));
})

function change(btn)
{
    var flag=true;
    k=$("#"+btn);
    var no=k.html();
    if (no==9)
    no=0;
    else
    no++;
    k.html(no);
    for(var i=1;i<=5;i++)
    {
        if(($("#bt"+i).html()!=cor_code[i-1]))
            {flag=false;
                break;
            }
    }
    if (flag==true)
        $('#done').css("visibility","visible");
}