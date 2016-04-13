$(function () {
	//$("img").lazyload({
	     //placeholder : "/images/loading.gif", //加载图片前的占位图片
	  //   effect : "fadeIn" //加载图片使用的效果(淡入)
	//});
	
	
	$(".sroll_right .close").click(function(){
		$(".sroll_right").remove();
	});
	
	$(window).scroll(function() {
		var a_top = document.body.scrollTop || document.documentElement.scrollTop;
		if(a_top > 500){
			$(".sroll_right .back_top").show();
		}else{
			$(".sroll_right .back_top").hide();
		}
	});
	
	
	$(".sroll_right .back_top").click(function(){
		$('html,body').animate({scrollTop:'0px'},800);
		return false;
	});
//	try {
//		if (window.console && window.console.log) {
//			console.log("一个应用，要经历怎样的过程，才能抵达用户面前？\n一位新人，要经历怎样的成长，才能站在技术之巅？\n探寻这里的秘密；\n体验这里的挑战；\n成为这里的主人；\n加入爱加密，加入移动互联网安全，你，可以影响世界。\n");
//			console.log("请将简历发送至 %c support@ijiami.cn（ 邮件标题请以“姓名-应聘XX职位-来自console”命名）", "color:red");
//			console.log("职位介绍：http://www.ijiami.cn/About?v=3")
//		}
//	} catch(e) {}
})