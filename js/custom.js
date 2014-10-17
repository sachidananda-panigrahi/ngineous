function sectionHeight(){
    var height = $(window).height();
    $('.mainWrap section').css({'min-height': height});
    $('.howItWorksDetSec').css({'min-height': height-50});

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
            scrollTop: $(target).offset().top
        }, 1000);
    });
}
//Active Nav
function getActiveSection(){
    var navBar = $('.staticNav');
    var mainNav = $('.mainNav');
    var responsiveMenu = $('.responsiveMenu');
    navBar.removeClass("fixedNav");
    $('.mainNav li').removeClass('active');
    mainNav.hide();
    responsiveMenu.hide();
    var winWidth = $(window).width();
    var winScrollPos = $(window).scrollTop();

    if($('#howItWork').offset().top <= winScrollPos && winScrollPos < $('#aboutSec').offset().top)
    {
        $('.mainNav li:nth-child(1)').addClass('active');
        navBar.addClass("fixedNav");
        mainNav.show();
        if(winWidth < 768){
            responsiveMenu.show();
        }
    }
    else if($('#aboutSec').offset().top <= winScrollPos && winScrollPos < $('#subscription').offset().top)
    {
        $('.mainNav li:nth-child(2)').addClass('active');
        navBar.addClass("fixedNav");
        mainNav.show();
        if(winWidth < 768){
            responsiveMenu.show();
        }
    }
    else if($('#subscription').offset().top <= winScrollPos && winScrollPos < $('#contactSec').offset().top)
    {
        $('.mainNav li:nth-child(3)').addClass('active');
        navBar.addClass("fixedNav");
        mainNav.show();
        if(winWidth < 768){
            responsiveMenu.show();
        }
    }
    else if($('#contactSec').offset().top <= winScrollPos )
    {
        $('.mainNav li:nth-child(4)').addClass('active');
        navBar.addClass("fixedNav");
        mainNav.show();
        if(winWidth < 768){
            responsiveMenu.show();
        }
    }


}
$(document).ready(function(){
    $('.responsiveMenu').hide();
    navClick();
    sectionScroll();
    sectionHeight();
    headerFix();
    $(window).resize(function(){
        sectionHeight();
        sectionScroll();
        headerFix();
    })
})