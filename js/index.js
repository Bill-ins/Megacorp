$(function(){
    var on = true;
    $(".trigger").click(function(){
        $(".navMenu").slideToggle();
    });

    $(".trigger").click(function(){
        if(on === true) {
            $(".banner").animate({
                "margin-top" : "10px"
            });

            $("header").animate({
                "height" : "900px"
            });

            on = false;
        }
        else {
            $(".banner").animate({
                "margin-top" : "100px"
            });

            $("header").animate({
                "height" : "700px"
            });
            on = true;
        }
    });
});