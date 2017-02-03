$(window).on("load",function(){

	var $height = $('.part-left img').height();
	$('.part-right').css('max-height', $height);
	var $cardHeight = $('.card').width() * 1.41;
	$('.card, .image-wrapper').css('height', $cardHeight);

	$(".part-right, .card-parts").mCustomScrollbar();



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

		$('.card-name').click( function() {
			$(this).parent().toggleClass('clicked');
			var $prevHeight = $cardHeight - $('.card-name').height() - $(this).siblings('.card-description').height();
			if ($(this).parent().hasClass('clicked')) {
				$(this).siblings('.preview').css('height', $prevHeight);
			} else {
				$(this).siblings('.preview').css('height', 0);
			}
		        });
		});

});

//LightBox
$(document).ready(function(){
	$(".prev-link").colorbox({rel:'prev-link'});


});
