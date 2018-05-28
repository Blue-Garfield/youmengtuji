//首页尤梦推荐切换
var $asd=$(".tab-header ul li");

$asd.click(function(){

$(this).addClass("current").siblings().removeClass("current");

var $index=$asd.index(this);

var $content=$(".tab-content .tab-item");

$content.eq($index).show().siblings().hide();

});

