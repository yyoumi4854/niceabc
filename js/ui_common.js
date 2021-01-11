;(function ( $ ) {
	$(document).ready(function(){
		// file
		$(document).on('change', '.ui_file input[type="file"]', function(){
			var fileVal = $(this).val();
			$(this).parents('.ui_file').find('.ui_file_input').val(fileVal);
		});
		
		// 약관 toggle
		$('.ui_agree_toggle .active .agree_cont').show();
		$('.ui_agree_toggle .agree_tit .toggle_btn').text('전문보기');
		$('.ui_agree_toggle .active .agree_tit .toggle_btn').text('전문닫기');
		$(document).on('click', '.ui_agree_toggle .agree_tit .toggle_btn', function(){
			if($(this).parents('.agree_tit').hasClass('active')){
				$(this).parents('.agree_tit').removeClass('active');
				$(this).parents('.agree_tit').next('.agree_cont').slideUp();
				$(this).text('전문보기');
			}else{
				$(this).parents('.agree_tit').addClass('active');
				$(this).parents('.agree_tit').next('.agree_cont').slideDown();
				$(this).text('전문닫기');
			}
			
			return false;
		});
				
		// 투자 toggle 20190719추가
		$('.ui_investment_toggle .active .investment_cont').show();
		$('.ui_investment_toggle .investment_tit .toggle_btn').text('전문보기');
		$('.ui_investment_toggle .active .investment_tit .toggle_btn').text('전문닫기');
		$(document).on('click', '.ui_investment_toggle .investment_tit .toggle_btn', function(){
			if($(this).parents('.investment_tit').hasClass('active')){
				$(this).parents('.investment_tit').removeClass('active');
				$(this).parents('.investment_tit').next('.investment_cont').slideUp();
				$(this).text('전문보기');
			}else{
				$(this).parents('.investment_tit').addClass('active');
				$(this).parents('.investment_tit').next('.investment_cont').slideDown();
				$(this).text('전문닫기');
			}
			
			return false;
		});

		// 할인율 toggle 20190920추가

		$('.ui_loan_btn').click(function(){
			$('.loan_agree_cont').slideToggle();
			$(this).toggleClass('loan_btn_active');
		});

		//agree_list ui_loan_btn


		//radio_tab
		$(document).on('change', '.ui_radio_tab .ui_radio_list input[type="radio"]', function(){
			var thisId = $(this).attr('id');
			$('.ui_radio_tab .before_txt').hide();
			$(this).parents('.ui_radio_tab').find('.ui_radio_cont > div').hide();
			$(this).parents('.ui_radio_tab').find('.ui_radio_cont > div.'+thisId+'').show();
		});

		//address zipcode
		$(document).on('change', '.list_address input[type="radio"]', function(){
			$('.list_address li').removeClass('current');
			$(this).parents('li').addClass('current');
		});
		
		//tab
		$('.ui_tab .active button').each(function(){
			var activeId = $(this).attr('data-id');
			$('.ui_tab_cont #'+activeId+'').show();
		});
		$(document).on('click', '.ui_tab button', function(){
			var tabId = $(this).attr('data-id');
			$(this).parents('.ui_tab').children('li').removeClass('active');
			$(this).parent('li').addClass('active');
			$(this).parents('.ui_tab').next('.ui_tab_cont').children('div').hide();
			$(this).parents('.ui_tab').next('.ui_tab_cont').find('#'+tabId+'').show();
		});
		
		// popup
		$('.ui_open_popup').click(function(){
			$('.ui_popup').fadeIn();

			setTimeout(function(){
				var popHei = $('.ui_popup section').height() + 45;
				$('.ui_popup section').css('margin-top', - popHei/2);
			},0);
			
			
		});
		$('.ui_close_popup').click(function(){
			$('.ui_popup').hide();
		});
		// popup - GNB COMMON SEARCH
		$('.ui_open_search').click(function(){
			$('.ui_popup').hide();
			$('.ui_fincent_search').fadeIn();
		});
		$('.ui_close_search').click(function(){
			$('.ui_fincent_search').hide();
		});
		// layer - GNB LOGIN
//		var layerLogin = $('#fincent_header .gnb_layer_login');
//		$('.ui_btn_login').hover(function(){
//			if($('#fincent_header').hasClass('fixed_header')){
//				$(layerLogin).hide();
//				$('.gnb_login').addClass('slide_down');
//			}else{
//				$('.gnb_login').removeClass('slide_down');
//				$(layerLogin).toggle();
//			}
//		});
		// layer - GNB MYPAGE
		$('.ui_open_mypage').hover(function(){
			$('.gnb_layer_user').toggle();
		});
		
		// contents title
		$('.contents_title>.title').click(function(){
			$(this).toggleClass('opened');
		});
		
		//투자하기 search
		$('.ui_search_detail').click(function(){
			$(this).parent().toggleClass('opened');
			if($('.search_invest').hasClass('opened')){
				$('.ui_search_detail span').text('상세검색 숨기기');
			}else{
				$('.ui_search_detail span').text('상세검색');
			}
		});
		
		//list_tool_pop
		$(document).on('click', '.ui_tool_btn', function(){
			if($(this).next('.ui_tool_cont').hasClass('active')){
				$(this).next('.ui_tool_cont').removeClass('active');
			}else{
				$('.ui_tool_cont').removeClass('active');
				$(this).next('.ui_tool_cont').addClass('active');
			};

			return false;
		});
		$(document).on('click', 'body', function(e){
			var $tgPoint = $(e.target);
			var $toolPopBtn = $tgPoint.hasClass('ui_tool_btn');
			var $toolPopArea = $tgPoint.hasClass('ui_tool_cont');
			
			if(!$toolPopBtn && !$toolPopArea){
				$('.ui_tool_cont').removeClass('active');
			}
		});
		
		//accordion
		$('.ui_accordion>dt').click(function(){
			$(this).next('dd').slideToggle();
			$(this).parent('dl').toggleClass('active');
		});
		
		//header 2019-07-03 : 개발요청으로 버튼 UX 변경		 
		$('.ui_gnb_open, .gnb_login, .ui_btn_login, .ui_open_mypage').mouseenter(function(){
			$(this).addClass('active');			
			$('.gnb_login').removeClass('slide_up');
			$('.gnb_login').addClass('slide_down');
			

		});		
		$('.ui_gnb_open, .ui_open_login, .gnb_login, .ui_btn_login, .ui_open_mypage').mouseleave(function(){
			$(this).removeClass('active');
			$('.gnb_login').removeClass('slide_down');
			$('.gnb_login').addClass('slide_up');
		});
		
		//2019-07-03 : 개발요청으로 버튼 UX 변경
		$('.ui_btn_login').mouseenter(function(){
			if($('#fincent_header').hasClass('fixed_header')){
				$('.gnb_login').addClass('slide_down');
			}
		});
		
		//mobile 전체메뉴
		//$('.ui_btn_allmenu').click(function(){
		//	$('#fincent_header').animate({left:0},500);
		//	$('.gnb_depth1.pc_none').addClass('active');
		//});
		//$('#fincent_header .btn_close_allmenu').click(function(){
		//	$('#fincent_header').css('left','100%');
		//});


        //mobile 전체메뉴 개선 2019/10/10
        $('.ui_btn_allmenu').click(function(){
            $('#fincent_header').animate({left:24},500);
            $('.gnb_depth1.pc_none').addClass('active');
             $('.all_menu_bg').addClass('bg_dim');
            $('#fincent_contents').addClass('bg_fixed');
        });
        $('#fincent_header .btn_close_allmenu').click(function(){
            $('#fincent_header').css('left','100%');
             $('.all_menu_bg').removeClass('bg_dim');
           $('#fincent_contents').removeClass('bg_fixed');
        });

		
		//quick
		$('.quick_wrap .quick_btn').click(function(){
			$('.quick_wrap .quick_btn').hide();
			$('.quick_wrap .quick_menu').show();
			$('.quick_wrap .quick_menu .close_btn').show();
			$('.quick_wrap .quick_menu .menu').fadeIn(200);
			setTimeout(function(){
				$('.quick_wrap').addClass('active');
			},0);
			return false;
		});

		$('.quick_wrap .quick_menu .close_btn').click(function(){
			$('.quick_wrap .quick_btn').show();
			$('.quick_wrap .quick_menu').fadeOut(200);
			$('.quick_wrap .quick_menu .close_btn').fadeOut(200);
			$('.quick_wrap .quick_menu .menu').fadeOut(200);
			setTimeout(function(){
				$('.quick_wrap').removeClass('active');
			},0);
			$('.quick_wrap .invest_pop').hide();
			return false;
		});
		$('.quick_wrap .quick_menu .invest_btn button').click(function(){
			$('.quick_wrap .invest_pop').show();
			return false;
		});
		$('.quick_wrap .invest_pop .close').click(function(){
			$('.quick_wrap .invest_pop').hide();
			return false;
		});

		
		/* footer */
		$('.ui_fold_footer').click(function(){
			$('#fincent_footer .inner_wrap').toggleClass('opened');	
			$(document).scrollTop($(document).height());
		});
	});
	
	$(window).scroll(function(){
		var layerLogin = $('#fincent_header .gnb_layer_login');
		$('.gnb_login').removeClass('slide_down');
		if($(this).scrollTop() >= 1){
			$('#fincent_header, #fincent_container').addClass('fixed_header');
			$(layerLogin).hide();
		}else{
			$('#fincent_header, #fincent_container').removeClass('fixed_header');
		}	
	});
})( jQuery );

//제무제표
function financeScroll(){
	var financeScrollLeft = $('.finance_table .all_scroll_table').scrollLeft();
	var financetWid = $('.finance_table').width();
	var financeMaxScroll = $('.finance_table .all_scroll_table .all_table').width() - 20;
	if(financeScrollLeft >= financeMaxScroll - financetWid){
		$('.finance_table').addClass('last');
	}else{
		$('.finance_table').removeClass('last');
	}
};

//모바일 전체메뉴 탭
$(function () {
	tab('#ui_tab',0);
});

function tab(e, num){
	var num = num || 0;
	var menu = $(e).children();
	var con = $(e+'_con').children();
	var select = $(menu).eq(num);
	var i = num;

	select.addClass('active');
	con.eq(num).show();

	menu.click(function(){
		if(select!==null){
			select.removeClass("active");
			con.eq(i).hide();
		}

		select = $(this);
		i = $(this).index();

		select.addClass('active');
		con.eq(i).show();
	});
}

//모바일 마이페이지 탭
$(function () {
	inv_tab('#ui_inv_tab',0);
});

function inv_tab(e, num){
	var num = num || 0;
	var menu = $(e).children();
	var con = $(e+'_con').children();
	var select = $(menu).eq(num);
	var i = num;

	select.addClass('active');
	con.eq(num).show();

	menu.click(function(){
		if(select!==null){
			select.removeClass("active");
			con.eq(i).hide();
		}

		select = $(this);
		i = $(this).index();

		select.addClass('active');
		con.eq(i).show();
	});
}

//모바일 공지사항과 News 탭
$(function () {
	notice_tab('#ui_notice_tab',0);
});

function notice_tab(e, num){
	var num = num || 0;
	var menu = $(e).children();
	var con = $(e+'_con').children();
	var select = $(menu).eq(num);
	var i = num;

	select.addClass('active');
	con.eq(num).show();

	menu.click(function(){
		if(select!==null){
			select.removeClass("active");
			con.eq(i).hide();
		}

		select = $(this);
		i = $(this).index();

		select.addClass('active');
		con.eq(i).show();
	});
}

//전체메뉴
$(function(){
	$('.m_menu').click(function() {
		$("#accordian ul ul").slideUp();
		$('.ico_ar').removeClass('on');
		if(!$(this).next().is(":visible"))
		{
		    $(this).next().slideDown();
			$(this).find('.ico_ar:eq(0)').addClass('on');

		}
	});


})

//NICE투자등급
$(function(){
	var btn_grade_close = $('.btn_grade_close');
	var btn_grade_open = $('.btn_grade_open');
	var inv_grade_cont = $('.inv_grade_cont');
	var grade_cont_bg = $('.grade_cont_bg');
	var Ninner_contents = $('#Ninner_contents');
	btn_grade_close.click(function(){
		inv_grade_cont.slideUp('1000');
		grade_cont_bg.removeClass('grade_dim');
		Ninner_contents.removeClass('cont_fixexd');

	});
	btn_grade_open.click(function(){
		inv_grade_cont.slideDown('fast');
		grade_cont_bg.addClass('grade_dim');
		Ninner_contents.addClass('cont_fixexd');
	});
});





