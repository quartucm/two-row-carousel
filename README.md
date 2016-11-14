# two-row-carousel

A work in progress jQuery plugin to support two row carousel.
 
Support
--------------
Tested in IE8+

- CSS3 [Flex-box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) has eliminated the need for this, but if you need to support IE8 this will work.
- A caveat is that the UL list is halved to make 2 rows, so your items will be displayed out of order.

**To Do:** Dynamically add arrows and parent container.

SET-UP:		
The plug-in expects the following structure:

HTML:
--------------
```
<div id="slider">
		<ul id="carousel">
		<li>Add some li's</li>
		</ul>
</div>
```
CSS:
--------------
```
#slider {
	height: 612px; /*Very important*/
    margin: -4px 0 0;
    overflow: hidden;
}

#carousel {
    position: relative;
}

#carousel li {
	height: 304px;
	max-width: 308px;
	overflow: hidden;
	width: 100%;
	position: relative;
	float: left;
}
```
jQuery:
--------------
To instantiate:
Link to jQuery, link to two Row Carousel, call it on your UL element.
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="js/two.row.carousel.js"></script>
		<script type="text/javascript">
			$(document).ready(function() {
				$('#carousel').twoRowCarousel();

			});
</script>
```		

Optional Minification:
--------------
If you would like to option to modify the code and minify, run the following in your command line:

 - npm install > This will install uglifyjs
 - npm run minify > This will compile two.row.carousel.js > two.row.carousel.min.js  by default
 - Edit the package.json if you want a different output name

		
Configuration options defaults:
--------------
```
		numberWide : 4,  //controls how many items wide you want each frame to be
		scrollSpeed : 300, //how fast you want the transition between frames to take
		container : $('#slider'), //the parent container name
		prev : $('.carousel_prev'), //previous arrow name
		next : $('.carousel_next') //next arrow name
```		
		
