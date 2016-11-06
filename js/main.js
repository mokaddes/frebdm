$(function(){
    $(".images ul li a").hover(function(){
        $(".popup_box").fadeIn();
        $(".popup_background").fadeIn();
    });
});
$(function(){
    $(".close").click(function(){
        $(".popup_box").fadeOut();
        $(".popup_background").fadeOut();
    });
});