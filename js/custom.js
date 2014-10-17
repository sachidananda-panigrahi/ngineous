function sectionHeight(){
    var height = $(window).height();
    $('.mainWrap section').css({'min-height': height-49});
    $('.mainWrap .landing').css({'min-height': height});
    $('.howItWorksDetSec, .innerCnt').css({'height': height-49});

}
function headerFix(){
//    var height = $(window).height();
    $(document).on("scroll", function () {
        getActiveSection();

    });
}
// Show Collapse Nav Click function
function navClick(){
    $(".responsiveMenu").on('click',function(event){
        event.preventDefault();
        if($(".menu").css('display') == 'none'){
            $(".menu").slideDown();
        }
        else{
            $(".menu").slideUp();
        }
    });
}
//Click Scroll
function sectionScroll(){
    $( '.mainNav > li > a, .roundedMenu li a' ).on('click', function(event) {
        event.preventDefault();
        var target = "#" + $(this).data('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 49
        }, 1000);
    });
}
//Active Nav
function getActiveSection(){
    var navBar = $('.staticNav');
    var mainNav = $('.mainNav');
    navBar.removeClass("fixedNav");
    $('.mainNav li').removeClass('active');
    mainNav.hide();
    var winScrollPos = $(window).scrollTop();

    if($('#howItWork').offset().top <= winScrollPos && winScrollPos < $('#aboutSec').offset().top)
    {
        $('.mainNav li:nth-child(1)').addClass('active');
        navBar.addClass("fixedNav");
        mainNav.show();

    }
    else if($('#aboutSec').offset().top <= winScrollPos && winScrollPos < $('#subscription').offset().top)
    {
        $('.mainNav li:nth-child(2)').addClass('active');
        navBar.addClass("fixedNav");
        mainNav.show();
    }
    else if($('#subscription').offset().top <= winScrollPos && winScrollPos < $('#contactSec').offset().top)
    {
        $('.mainNav li:nth-child(3)').addClass('active');
        navBar.addClass("fixedNav");
        mainNav.show();
    }
    else if($('#contactSec').offset().top <= winScrollPos )
    {
        $('.mainNav li:nth-child(4)').addClass('active');
        navBar.addClass("fixedNav");
        mainNav.show();
    }


}
$(document).ready(function(){
    navClick();
    sectionScroll();
    sectionHeight();
    headerFix();
    $(window).resize(function(){
        sectionHeight();
    })
})