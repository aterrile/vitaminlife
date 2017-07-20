$(document).ready(function(){
    
    $("a[href='#']").click(function(e){
        e.preventDefault();
    })
    
    $(".menu_toogle").click(function(e){
        e.preventDefault();
        $(".mainmenu").toggleClass('open');
    })
    
    $(".mainmenu .closer").click(function(){
        $(".mainmenu").removeClass('open');
    })
    
    $('#main_slider_home').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed: 2000,
        animateOut: 'fadeOut',
        touchDrag: true,
        mouseDrag : false
    })
    
    $('#canvas_home').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        autoplay:false,
        touchDrag: true,
        mouseDrag : false,
        smartSpeed: 1000
    })
    
    $("#home #banners_dinamicos .item").hover(function(){
        $(this).find('.intro').addClass('visible')
    }, function(){
        $(this).find('.intro').removeClass('visible')
    })
    
});
