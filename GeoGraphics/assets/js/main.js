
$(document).ready(function(){
  $('.btn a').click(function(event) {
    event.preventDefault();

    // Toggle active class on tab buttons
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    
    // display only active tab content
    var activeTab = $(this).attr("href");
    $('.tab-content').not(activeTab).css("display","none");
    $(activeTab).fadeIn();
    
});

  $('button').click(function(event) {
    $('.wall').append('<h1 class="rubik-h1">I SHOP THEREFORE I AM</h1>');
  });


})