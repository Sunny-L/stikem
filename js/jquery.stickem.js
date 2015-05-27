/*
 *	Created by Sunny.L on 2015/5/27	
 *	GitHub:https://github.com/Sunyson
*/

;(function($){
	$.fn.extend({
		stickem:function(options){
			var options = $.extend({
				
			},options);
			var self = this;
			var tabsTop = $('#stickem-container').offset().top;//获取nav-tabs距离顶部的位置
			var clearScroll = 0;

			$(window).on('scroll',function(){
				clearTimeout(clearScroll);
				clearScroll = setTimeout(function(){
					var documentTop = $(document).scrollTop();//获取滚动条距离顶部距离
					if(tabsTop<=documentTop){
						$('.stickem').addClass('stickit');
					}else {
						$('.stickem').removeClass('stickit');
					}
				},200);
			});
		}
	});
})(jQuery);