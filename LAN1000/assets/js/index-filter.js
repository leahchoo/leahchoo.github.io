$(window).load(function () {

var button = 1;
var button_class = "filter-link-current";
var $container = $('#art-gallery');
    
$container.isotope({itemSelector : '.art-card'});
$container.isotope('shuffle');

function check_button(){
	$('.filter-link').removeClass(button_class);
	if(button==1){
		$("#filter-all").addClass(button_class);
		}
	if(button==2){
		$("#filter-murals").addClass(button_class);
		}
	if(button==3){
		$("#filter-paintings").addClass(button_class);
		}
	if(button==4){
		$("#filter-collage").addClass(button_class);
		}	
	if(button==5){
		$("#filter-digital").addClass(button_class);
		}	
	if(button==6){
		$("#filter-generative").addClass(button_class);
		}
}

	
$("#filter-all").click(function() { $container.isotope({ filter: '.all' }); $container.isotope('shuffle'); button = 1; check_button(); });
$("#filter-murals").click(function() {  $container.isotope({ filter: '.murals' }); $container.isotope('shuffle'); button = 2; check_button();  });
$("#filter-paintings").click(function() {  $container.isotope({ filter: '.paintings' }); $container.isotope('shuffle'); button = 3; check_button();  });
$("#filter-collage").click(function() { $container.isotope({ filter: '.collage' }); $container.isotope('shuffle'); button = 4; check_button(); });
$("#filter-digital").click(function() {  $container.isotope({ filter: '.digital' }); $container.isotope('shuffle'); button = 5; check_button();  });
$("#filter-generative").click(function() {  $container.isotope({ filter: '.generative' }); $container.isotope('shuffle'); button = 6; check_button();  });

check_button();

});