function sectionHeight(){
    var height = $(window).height();
    $('.mainWrap section').css({'height': height});

}
function headerFix(){
//    var height = $(window).height();
    $(document).on("scroll", function () {
        getActiveSection();

    });
}
//Click Scroll
function sectionScroll(){
    $( '.mainNav > li > a' ).on('click', function(event) {
        event.preventDefault();
        var target = "#" + $(this).data('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
}
//Active Nav
function getActiveSection(){
    var navBar = $('.staticNav');
    navBar.removeClass("fixedNav");
    $('.mainNav li').removeClass('active');
    var winScrollPos = $(window).scrollTop();
    console.log(winScrollPos);
    console.log($('#contactSec').offset().top );
    if($('#howItWork').offset().top <= winScrollPos && winScrollPos < $('#aboutSec').offset().top)
    {
        $('.mainNav li:nth-child(1)').addClass('active');
        navBar.addClass("fixedNav");
    }
    else if($('#aboutSec').offset().top <= winScrollPos && winScrollPos < $('#subscription').offset().top)
    {
        $('.mainNav li:nth-child(2)').addClass('active');
        navBar.addClass("fixedNav");
    }
    else if($('#subscription').offset().top <= winScrollPos && winScrollPos < $('#contactSec').offset().top)
    {
        $('.mainNav li:nth-child(3)').addClass('active');
        navBar.addClass("fixedNav");
    }
    else if($('#contactSec').offset().top <= winScrollPos )
    {
            $('.mainNav li:nth-child(4)').addClass('active');
            navBar.addClass("fixedNav");
    }


}
$(document).ready(function(){

    sectionScroll();
    sectionHeight();
    headerFix();
    $(window).resize(function(){
        sectionHeight();
    })
})