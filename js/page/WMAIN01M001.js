	$(window).scroll(function(){
		if($(this).scrollTop() >= 1){
			$('#fincent_header, .contents_title').removeClass('back_transparent');
			$('.gnb_depth1').addClass('top_adjust');
			$('.gnb_login_depth').addClass('left_adjust');
		}else{
			$('#fincent_header, .contents_title').addClass('back_transparent');
			$('.gnb_depth1').removeClass('top_adjust');
			$('.gnb_login_depth').removeClass('left_adjust');
		}
	});