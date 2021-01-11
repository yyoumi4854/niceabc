;(function ( $ ) {
	$(document).ready(function(){
		$(document).on('click', '.member_img .img_modify', function(){
			$('.img_change_pop').show();
		});
		$(document).on('click', '.img_change_pop .close', function(){
			$('.img_change_pop').hide();
		});
	});
})( jQuery );