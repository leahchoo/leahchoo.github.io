$(document).ready(function(){

    $('.filter-link').click(function(){
        $('.filter-link').removeClass('active');
        $(this).addClass('active');
    });

    $('.btn-all').click(function(){
        $('.gallery .item').removeClass('hide');
    });

    var hideAll = function() {
        $('.gallery .item').addClass('hide');
    };

    $('.btn-books').click(function(){
        hideAll();
        $('.books').removeClass('hide');
    });

    $('.btn-mags').click(function(){
        hideAll();
        $('.mags').removeClass('hide');
    });

    $('.btn-news').click(function(){
        hideAll();
        $('.news').removeClass('hide');
    });

    $('.btn-maps').click(function(){
        hideAll();
        $('.maps').removeClass('hide');
    });

    $('.btn-mail').click(function(){
        hideAll();
        $('.mail').removeClass('hide');
    });

    $('.btn-calligraphy').click(function(){
        hideAll();
        $('.calligraphy').removeClass('hide');
    });

    $('.btn-lettering').click(function(){
        hideAll();
        $('.lettering').removeClass('hide');
    });

    $('.btn-journals').click(function(){
        hideAll();
        $('.journals').removeClass('hide');
    });

    $('.btn-post').click(function(){
        hideAll();
        $('.post').removeClass('hide');
    });

    $('.btn-type').click(function(){
        hideAll();
        $('.type').removeClass('hide');
    });

});
