$(document).ready(function(){

		$gallery2 = data2;

	$($gallery2).each(function(html, value) {
		$category = value.Category;
		$artist = value.Artist;
		$link = value.Link;
		$image = value.Image;

		$('.link-list').append('<li><a href="' + $link + '">' + $artist +'</a></li>');
	});

	
});