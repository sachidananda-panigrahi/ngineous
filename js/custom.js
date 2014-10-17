function sectionHeight(){
    var height = $(window).height();
    $('.mainWrap section').css({'min-height': height});
    $('.mainWrap .landing').css({'min-height': height});
    $('.howItWorksDetSec, .innerCnt').css({'height': height});

}
function headerFix(){

    $(document).on("scroll", function () {
        getActiveSection();

    });
}
// Show Collapse Nav Click function
function navClick(){
    $(".responsiveMenu, .hideOnclick a").on('click',function(event){
        event.stopImmediatePropagation();
//        alert('hi')
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
    var width = $(window).width();
    var navBar = $('.staticNav');
    var mainNav = $('.mainNav');
    navBar.removeClass("fixedNav");
    $('.mainNav li').removeClass('active');
    if(width > 768){
        mainNav.hide();
    }
    var winScrollPos = $(window).scrollTop();
    winScrollPos = winScrollPos + 49;
    console.log('scroll pos'+ winScrollPos);
    console.log('contactSec offset'+ $('#contactSec').offset().top);

    if($('#howItWork').offset().top <= winScrollPos && winScrollPos < $('#aboutSec').offset().top)
    {
        $('.mainNav li:nth-child(1)').addClass('active');
        navBar.addClass("fixedNav");
        if(width > 768){
            mainNav.show();
        }

    }
    else if($('#aboutSec').offset().top <= winScrollPos && winScrollPos < $('#subscription').offset().top)
    {
        $('.mainNav li:nth-child(2)').addClass('active');
        navBar.addClass("fixedNav");
        if(width > 768){
            mainNav.show();
        }
    }
    else if($('#subscription').offset().top <= winScrollPos && winScrollPos < $('#contactSec').offset().top)
    {
        $('.mainNav li:nth-child(3)').addClass('active');
        navBar.addClass("fixedNav");
        if(width > 768){
            mainNav.show();
        }
    }
    else if($('#contactSec').offset().top <= winScrollPos )
    {
        $('.mainNav li:nth-child(4)').addClass('active');
        navBar.addClass("fixedNav");
        if(width > 768){
            mainNav.show();
        }
    }


}

function belowIpadSection(){
    var width = $(window).width();
    if(width < 768)
    {
        $('.mainNav').addClass('hideOnclick');
        navClick();
    }
}

$(document).ready(function(){
    navClick();
    sectionScroll();
    sectionHeight();
    headerFix();
    belowIpadSection();
    $(window).resize(function(){
        sectionHeight();
        headerFix();
        belowIpadSection();
    })
})