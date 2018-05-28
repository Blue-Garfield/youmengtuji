(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>1242){
                    docEl.style.fontSize = '40px';
                }else{
                    docEl.style.fontSize = 100* (clientWidth / 1242) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);


//上下滚动
  (function($){
  var status = false;
  $.fn.scrollQ = function(options){
    var defaults = {
      line:1,
      scrollNum:1,
      scrollTime:3000
    }
    var options=jQuery.extend(defaults,options);
    var _self = this;
    return this.each(function(){
      $("li",this).each(function(){
        $(this).css("display","none");
      })
      $("li:lt("+options.line+")",this).each(function(){
        $(this).css("display","block");
      })
      function scroll() {
        for(i=0;i<options.scrollNum;i++) {
          var start=$("li:first",_self);
          start.fadeOut(100);
          start.css("display","none");
          start.appendTo(_self);
          $("li:eq("+(options.line-1)+")",_self).each(function(){
            $(this).fadeIn(500);
            $(this).css("display","block");
          })
        }
      }
      var timer;
      timer = setInterval(scroll,options.scrollTime);
      _self.bind("mouseover",function(){
        clearInterval(timer);
      });
      _self.bind("mouseout",function(){
        timer = setInterval(scroll,options.scrollTime);
      });
    });
  }
})(jQuery);


//wh切换
	$(function(){
	$('.tab_nav span').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab_cnt li').eq($(this).index()).addClass('on').siblings().removeClass('on');
	});
});

//hj切换
	$(function(){
	$('.tab_nav span').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.tab_cnt .article_cnt').eq($(this).index()).addClass('on').siblings().removeClass('on');
	});
});

//jj切换
	$(function(){
	$('.tab_nav span').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.jj_article .article_cnt').eq($(this).index()).addClass('on').siblings().removeClass('on');
	});
});

//上下滚动
 function autoScroll(obj){  
		$(obj).find("ul").animate({  
			marginTop : "-1rem"  
		},1000,function(){  
			$(this).css({marginTop : "0px"}).find("li:first").appendTo(this);  
		})  
	}  
	$(function(){ 
		var scroll=setInterval('autoScroll(".maquee")',2000);
         $(".maquee").hover(function(){
            console.log("aaa");
            clearInterval(scroll);
         },function(){
            scroll=setInterval('autoScroll(".maquee")',2000);
         });
	}); 
	
//收藏下载
    $(function(){
    	$('.sc').click(function(){
    		$(this).addClass('sc_active');
    	});
    	$('.dow').click(function(){
    		$(this).addClass('dow_active');
    	})
    })