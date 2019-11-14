$(document).ready(function(){

	$gallery = data;

	$($gallery).each(function(html, value) {
		$category = value.Category;
		$artist = value.Artist;
		$link = value.Link;
		$image = value.Image;

		$('#art-gallery').append('<div class="art-card all ' + $category + '"><img src="assets/images/' + $image + '"><div class="art-card-cover"><h2>' + $artist +'</span></h2></div></div>');
	});

	$gallery2 = data2;

	$($gallery2).each(function(html, value) {
		$category = value.Category;
		$artist = value.Artist;
		$link = value.Link;
		$image = value.Image;

		$('.link-list').append('<li><a href="artists/' + $link + '">' + $artist +'</a></li>');
	});


	
});