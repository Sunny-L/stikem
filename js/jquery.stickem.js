/*
 *	Created by Sunny.L on 2015/5/27	
 *	GitHub:https://github.com/Sunny-L/stikem
*/

;(function($){
	$.fn.extend({
		stickem:function(options){
			var options = $.extend({
				containerSelecter:'#stickem-container',
				spend:200,
				ev:function(){},							//传入的执行函数
				eventExecute:1								//传入的执行次数
			},options);
			var evCounts = 0;
			var self = this;
			var tabsTop = $(options.containerSelecter+'').offset().top;//获取nav-tabs距离顶部的位置
			var clearScroll = 0;

			$(window).on('scroll',function(){
				clearTimeout(clearScroll);
				clearScroll = setTimeout(function(){
					var documentTop = $(document).scrollTop();//获取滚动条距离顶部距离
					if(tabsTop<=documentTop){
						$('.stickem').addClass('stickit');
						if(evCounts<options.eventExecute){
							options.ev();
							evCounts++;
						}
					}else {
						$('.stickem').removeClass('stickit');
					}
				},options.spend);
			});
		}
	});
})(jQuery);