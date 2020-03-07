var sidenav = document.getElementsByClassName("sidenav")[0];
var sidenav_backdrop = document.getElementsByClassName("sidenav-backdrop")[0];
var navbar_open = false;
var logo = document.getElementsByClassName('logo')[0]
var logo_white = document.getElementsByClassName('logo-white')[0]
 

$('.exit-navbar').on('click', ()=>{
    sidenav.style.width = "0vw";
    sidenav_backdrop.style.width = "0vw";
    logo.style.opacity = 1;
    logo_white.style.opacity = 0;
    navbar_open = false;
    rotateNavbutton(false);
    fadeEffects(false);
});

$('.open-navbar').on('click',()=>{
    if(navbar_open){
        sidenav.style.width = "0vw";
        sidenav_backdrop.style.width = "0vw";
        logo.style.opacity = 1;
        logo_white.style.opacity = 0;
        navbar_open = false;
        rotateNavbutton(false);
        fadeEffects(false);
    }
    else{
        sidenav.style.width = "40vw";
        sidenav_backdrop.style.width = "100vw";
        logo.style.opacity = 0;
        logo_white.style.opacity = 1;
        navbar_open = true;
       
        rotateNavbutton(true);
        fadeEffects(true);
    }   
});

function rotateNavbutton(activate){
    if(activate){
        $('.sidenav-button').css({"justify-content":"center"});
        $('.line-bar-1').css({"transform": "rotate(45deg)","background-color":"white"});
        $('.line-bar-2').css({"transform": "rotate(-45deg)","background-color":"white"});
    }
    else{
        $('.sidenav-button').css({"justify-content":"space-between"});
        $('.line-bar-1').css({"transform": "rotate(0deg)","background-color":"#0072A0"});
        $('.line-bar-2').css({"transform": "rotate(0deg)","background-color":"#0072A0"});
    }
}

function fadeEffects(activate){
    if(activate){
        $('.search-bar-container').addClass('animated fadeInUp delay-1s');
        $('#subscribe-button').addClass('animated fadeInUp delay-1s');
        $('.nav-item-content a').addClass('animated fadeInLeft delay-1s');
    }else{
        $('.search-bar-container').removeClass('animated fadeInUp delay-1s');
        $('#subscribe-button').removeClass('animated fadeInUp delay-1s');
        $('.nav-item-content a').removeClass('animated fadeInLeft delay-1s');
    }
}