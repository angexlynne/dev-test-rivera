jQuery(document).ready(function () {
    jQuery('a.gallery').colorbox({
    	opacity:0.5,
    	rel:'true',
    	open:'true',
    	slideshow:'true',
    	// slideshowSpeed:2000,
    	transition:'elastic',
    	width:'300px',
    	height:'200px'
    });
});

setTimeout(function(){$.colorbox.close();}, 8000);

setTimeout(function(){$.colorbox.next();}, 2000);