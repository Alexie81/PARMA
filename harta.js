$(document).ready(function(){
    $("#in").click(function(){
         $("img").width($("img").width()+100);
         $("img").height($("img").height()+100);
    });
    $("#out").click(function(){
        if($("img").width() == "1428.12px" && $("img").height() == "562.172px") {
            $("#out").prop("disabled",true);
        } else{
            $("#out").prop("enabled",true);
         $("img").width($("img").width()-100);
         $("img").height($("img").height()-100);
        }
    });
 });

 //width: 1428.12px; height: 562.172px;