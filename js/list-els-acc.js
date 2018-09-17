$('.desc').hide();

$(document).ready(function() {

	$('.intro').click(function() {

		if ($(this).parent().hasClass('active-list-el')) {
			$('.desc').slideUp('slow');
			$('.list-el').delay( 600 ).removeClass('active-list-el');
		}	

		else {
			$('.list-el').delay( 600 ).removeClass('active-list-el');
			$('.desc').slideUp('slow');
			$(this).next().slideDown('slow');
			$(this).parent().delay( 600 ).toggleClass('active-list-el');

		}
		
	})
});