$(window).on("load",function(){
	var main = function() {
		var $height = $('.about .part-left img').height();
		$('.about .part-right').css('max-height', $height);
		var $cardHeight = $('.card').width() * 1.41;
		$('.card, .image-wrapper').css('height', $cardHeight);
		var $circleHeight = $('.circle').width();
		$('.circle').css('height', $circleHeight);


				$('.card-name').click( function() {
					$(this).parent().toggleClass('clicked');
					var $prevHeight = $cardHeight - $('.card-name').height() - $(this).siblings('.card-description').height();
					if ($(this).parent().hasClass('clicked')) {
						$(this).siblings('.preview').css('height', $prevHeight);
					} else {
						$(this).siblings('.preview').css('height', 0);
					}
				        });


		//Circles
		var Circle = function(sel){
				var circles = document.querySelectorAll(sel);
				[].forEach.call(circles,function(el){
						var valEl = parseFloat(el.innerHTML);
						var r = Math.round($circleHeight/2 - 7.5);
						var c = Math.round(Math.PI*r*2);
						valEl = Math.round(c*valEl/100);
						var l = Math.round($circleHeight/2);
						var h = Math.round($circleHeight + 1);
						el.innerHTML = '<svg width="'+h+'" height="'+h+'"><circle transform="rotate(-90)" r="'+r+'px" cx="-'+l+'" cy="'+l+'" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px '+c+'px;" r="'+r+'px" cx="-'+l+'" cy="'+l+'" /></svg>';

				});
		};
		Circle('.circle');

	};

	$(".about .part-right, .card-parts").mCustomScrollbar();

	main();
$(window).resize(function() {
	main();
});

$(document).ready(function() {

    $('ul>li>a').bind('click',function(event){
			$('ul li a').removeClass('current');
			$(this).addClass('current');
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1500,'easeOutBack');
        event.preventDefault();
    });

		$('.card').mouseover( function() {
		$(this).addClass('hover');

		});
		$('.card').mouseout( function() {
			$(this).removeClass('hover');
		});





		});

});

//LightBox
$(document).ready(function(){
	$(".prev-link").colorbox({rel:'prev-link'});


});
