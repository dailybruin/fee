$(document).ready(function(){
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if(height>$("#logo_top_container").height()) {
            $("#nav_bar").addClass("sticky");
            $("#main_content").css("height", $("#nav_bar").height());
        }
        else{
            $("#nav_bar").removeClass("sticky");
            $("#main_content").css("height", 0);
        }
    });
});