
var handle = false;


$("#toggle").on("click",function(){

    if(handle == false)
    {

    $("#toggle-container").css("justify-content","flex-end");

    $("body").css("backgroundColor","black");

    $("p").css("color","white");

    handle= true;

    }
    else{

        $("#toggle-container").css("justify-content","flex-start");

        $("body").css("backgroundColor","white");

       $("p").css({'color': 'black', 'font-size': '50px' });
        handle= false;
    


    }




});