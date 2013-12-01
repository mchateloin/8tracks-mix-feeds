$(document).ready(function(){

    var $itemLinks = $(".mix-feed-item-link");
        $itemLinkHeadings = $(".mix-feed-item-link h2");

    $itemLinkHeadings.hide();

    $itemLinks.hover(function () {
			var $this = $(this);
            $this.find("h2").fadeIn();
			$this.siblings().css({
				'-webkit-opacity': 0.4,
				'-moz-opacity': 0.4,
				'opacity': 0.4
			});

        },function () {
            var $this = $(this);
            $this.find("h2").fadeOut();
			$this.siblings().css({
				'-webkit-opacity': 1,
				'-moz-opacity': 1,
				'opacity': 1
			});
	});


    $itemLinkHeadings.hover(function () {
            var $this = $(this);
            $this.find("h2").fadeIn();
			$this.siblings().css({
				'-webkit-opacity': 0.4,
				'-moz-opacity': 0.4,
				'opacity': 0.4
			});

        },function () {
			var $this = $(this);
            $this.find("h2").fadeOut();
			$this.siblings().css({
				'-webkit-opacity': 1,
				'-moz-opacity': 1,
				'opacity': 1
			});
    });

});