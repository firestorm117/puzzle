var r=0;
for(var i=1;i<=4;i++)
{
    $('#pass').append("<button id='bt"+i+"'>0</button>");
}
cor_code=[4,9,6,8];
$("#arrow").click(function(){
    r=r+30;
    if(r==360)
        r=0;
    $(this).css({'transform': 'rotate('+r+'deg)'});
    dot_normal();
    if(r==120){
        $("#d1").css({'background-color': 'red'})
    }
    if(r==270){
        $("#d2").css({'background-color': 'red'})
    }
    if(r==180){
        $("#d3").css({'background-color': 'red'})
    }
    if(r==240){
        $("#d4").css({'background-color': 'red'})
    }
})
function dot_normal(){
    for (var i=1;i<=4;i++)
    {
        $("#d"+i).css({'background-color': 'rgb(218, 226, 230)'})
    }
}

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
        for(var i=1;i<=4;i++)
        {
            if(($("#bt"+i).html()!=cor_code[i-1]))
                {
                    flag=false;
                    break;
                }
        }
        if (flag==true)
            $('#done').css("visibility","visible");
            
    }
    