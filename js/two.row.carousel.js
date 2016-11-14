;(function($, window, document, undefined) {

	var pluginName = "twoRowCarousel",
	defaults = {
		numberWide : 4,
		scrollSpeed : 300,
		container : $('#slider'),
		prev : $('.carousel_prev'),
		next : $('.carousel_next')
	};

	function Plugin(element, options) {
		this.element = element;
		$element = $(element);
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		//Carousel variable definition
		this.currentPage = 0;
		this.carouselChildren = $element.children();
		this.numOfLi = this.carouselChildren.length;
		this.slideWidth = this.carouselChildren.outerWidth();
		this.slideHeight = this.carouselChildren.height();
		this.sliderUlWidth = this.slideWidth * this.options.numberWide;
		this.itemsPerPage = this.sliderUlWidth / this.slideWidth * 2;
		this.numPages = this.numOfLi / this.itemsPerPage;

		this.init();
	}


	Plugin.prototype = {

		init : function() {
			Self = this;
			this.displayCorrectArrows();
			this.setContainerWidth();
			this.setListWidth();
			this.attachEvents($element);
		},
		displayCorrectArrows : function() {
			//Always hide the previous arrow on first screen
			this.options.prev.hide();
			//If we are at the last screen, hide the next arrow
			if (this.options.numberWide === (this.numOfLi / 2)) {
				this.options.next.hide();
			}
		},
		setContainerWidth : function() {
			this.options.container.css({
				width : this.sliderUlWidth
			});
		},
		setListWidth : function() {
			$element.css({
				width : Math.ceil(this.numOfLi / 2) * this.slideWidth,
				left: 0
			});

		},
		//Debouncing Function
		notAnimatedCheck : function(el) {
			if (!el.is(':animated')) {
				return true;
			}
		},
		getCurrentPosition: function(el) {
			var cur = parseInt(el.css('left'));
			return cur;
		},
		moveRight : function(el) {
			this.currentPage++;
			el.stop().animate({
				left : this.getCurrentPosition(el) - this.sliderUlWidth
			}, Self.options.scrollSpeed);
			if (this.currentPage === Math.ceil(this.numPages) - 1) {
				Self.options.next.hide();
			} else {
				Self.options.prev.show();
			} 

		},
		moveLeft : function(el) {
			this.currentPage--;
			el.stop().animate({
				left : this.getCurrentPosition(el) + this.sliderUlWidth
			}, Self.options.scrollSpeed);

			if (this.currentPage === 0) {
				Self.options.prev.hide();
			} else {
				Self.options.next.show();
			} 
		},
		attachEvents : function(el) {

			this.options.prev.click(function() {
				if (Self.notAnimatedCheck(el) === true) {
					Self.moveLeft($element);
				}
			});

			this.options.next.click(function() {
				if (Self.notAnimatedCheck(el) === true) {
					Self.moveRight($element);
				}
			});
			
		}

	}, $.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);
