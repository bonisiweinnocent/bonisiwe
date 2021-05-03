$(document).ready(funciton(){ 

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
    });
    $(window).on('scroll load',function(){
$('#menu').removeClass('fa-times');
$('header').removeClass('toggle');

    })
});